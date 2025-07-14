import { MailerTemplate } from "@/lib/MailerTemplate";
import nodemailer from "nodemailer";

export async function POST(req) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Validate input
  if (!name || !email || !subject || !message)
    throw new Error("Missing form fields");
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter connection
    await new Promise((resolve, reject) => {
      transporter.verify((error, success) => {
        if (error) {
          console.error("Transporter Verification Error:", error);
          reject(error);
        } else {
          console.log("Transporter Ready:", success);
          resolve(success);
        }
      });
    });
  } catch (setupError) {
    console.error("Transporter Setup Error:", setupError);
    return new Response(
      JSON.stringify({
        message: "Failed to set up email service",
        error: setupError.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "kanojiya9768@gmail.com",
    subject: `New Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `,
    html: MailerTemplate(name, email, subject, message),
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Email Error Details:", {
      message: error.message,
      code: error.code,
      response: error.response,
    });
    return new Response(
      JSON.stringify({ message: "Failed to send email", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
