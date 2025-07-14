
export const MailerTemplate = (name,email,subject,message) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f7fa;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #1e40af;
      color: #ffffff;
      text-align: center;
      padding: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 30px;
      color: #333333;
    }
    .content h2 {
      color: #1e40af;
      font-size: 20px;
      margin-top: 0;
    }
    .content p {
      line-height: 1.6;
      margin: 10px 0;
    }
    .details {
      background-color: #f9fafb;
      padding: 15px;
      border-radius: 5px;
      margin: 20px 0;
    }
    .details p {
      margin: 5px 0;
    }
    .footer {
      text-align: center;
      padding: 20px;
      background-color: #e2e8f0;
      color: #666666;
      font-size: 12px;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #1e40af;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      margin-top: 20px;
    }
    .button:hover {
      background-color: #1e3a8a;
    }
    @media (max-width: 600px) {
      .container {
        margin: 20px;
      }
      .content {
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Portfolio Enquiry Received!</h1>
    </div>
    <div class="content">
      <h2>Hello Vishal Kanojiya,</h2>
      <p>Dear vishal , You Hhave received new message from you portfolio site.</p>
      <div class="details">
        <p><strong>Enquiry Details:</strong></p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Subject: ${subject}</p>
        <p>Message: ${message}</p>
      </div>
      <p>I’ll review your request and get back to you within 24-48 hours. Feel free to contact me directly at <a href="mailto:kanojiya9768@gmail.com" style="color: #1e40af;">kanojiya9768@gmail.com</a> or <a href="tel:+918097859158" style="color: #1e40af;">+91 8097859158</a> if you need immediate assistance.</p>
      <p>Looking forward to collaborating with you!</p>
      <a href="https://kanojiyas-dev.vercel.app/" class="button">Visit My Portfolio</a>
    </div>
    <div class="footer">
      <p>© 2025 Vishal Kanojiya | Mumbai, India</p>
      <p>This is an automated response. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>`;
};
