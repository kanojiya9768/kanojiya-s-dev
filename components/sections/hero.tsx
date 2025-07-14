"use client";

import { Button } from "@/components/ui/button";
import { Download, Eye, Github, Linkedin, MapPin, Phone, Mail, ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-50 isolate">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="translate-y-8 transition-all duration-700 delay-200 hero-image">
            <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
                  <img src="/img/profile.png" alt="profile" className="w-full h-full rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 translate-y-8 transition-all duration-700 delay-400 hero-content">
            <div className="space-y-2">
              <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                <span>Vishal</span>
                <span className=" bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                 {" "} Kanojiya
                </span>
              </h1>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-semibold">
                React.js / Front-End Developer
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Crafting exceptional digital experiences with{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">2+ years</span>{" "}
                of expertise in modern web technologies. Passionate about clean code, 
                responsive design, and bringing innovative ideas to life.
              </p>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="translate-y-8 transition-all duration-700 delay-600 hero-contact">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">+91 8097859158</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">kanojiya9768@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Navi Mumbai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="translate-y-8 transition-all duration-700 delay-800 hero-buttons">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Eye className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View My Work
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 rounded-full font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="translate-y-8 transition-all duration-700 delay-1000 hero-social">
            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://github.com/kanojiya9768"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Github className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>
              
              <a
                href="https://linkedin.com/in/vishal-kanojiya"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="transition-all duration-700 delay-1200 hero-scroll">
            <div className="flex flex-col items-center mt-16">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Scroll to explore</p>
              <div className="animate-bounce">
                <div className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-600">
                  <ArrowDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75 delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-75 delay-500"></div>
    </section>
  );
}