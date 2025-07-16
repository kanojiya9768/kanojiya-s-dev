"use client";

import { Github, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kanojiya9768",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/vishal-kanojiya",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:kanojiya9768@gmail.com",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Stats", href: "#stats" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-400">VK</span>
              <span className="text-lg font-medium">Vishal Kanojiya</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Front-End Developer passionate about creating modern, responsive web applications with clean code and exceptional user experience.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 dark:bg-gray-700 rounded-lg hover:bg-blue-600 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "MongoDB",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-800 dark:bg-gray-700 px-2 py-1 rounded text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a
                  href="mailto:kanojiya9768@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  kanojiya9768@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <a
                  href="tel:+918097859158"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  +91 8097859158
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  Koparkhairne, Navi Mumbai
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>© {currentYear} Vishal Kanojiya. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Available for new opportunities</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}