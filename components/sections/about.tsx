"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, MapPin, Award, Target, Heart } from "lucide-react";

export function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "South Indian Education Society (SIES)",
      duration: "2020 - 2023",
      location: "Mumbai"
    },
    {
      degree: "HSC (12th)",
      institution: "Sai Nath Junior College",
      duration: "2018 - 2020",
      location: "Mumbai"
    },
    {
      degree: "SSC (10th)",
      institution: "Roopshree Vidhyalya",
      duration: "2018",
      location: "Mumbai"
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: "Quality Focused",
      description: "Committed to delivering high-quality, maintainable code"
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Always focused on achieving project objectives efficiently"
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Genuinely passionate about creating amazing web experiences"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={aboutRef}
          className="opacity-0 translate-y-8 transition-all duration-700 relative z-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Passionate Front-End Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a Front-End Developer with 2+ years of experience building responsive and 
                  high-performance web applications. I specialize in React.js, Next.js, and modern 
                  web technologies, focusing on creating clean, scalable UI with strong attention to detail.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Beyond frontend development, I have solid experience with backend technologies 
                  including Node.js, Express.js, and MongoDB. This full-stack knowledge allows me 
                  to build complete web solutions and collaborate effectively across all layers of development.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-sm">
                  2+ Years Experience
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Full Stack Knowledge
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Clean Code Advocate
                </Badge>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <highlight.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Education
              </h3>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card 
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardContent className="p-0">
                      <div className={`flex items-start justify-between transition-all duration-300 ${
                        hoveredCard === index ? 'transform translate-x-2' : ''
                      }`}>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {edu.institution}
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {edu.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {edu.location}
                            </div>
                          </div>
                        </div>
                        <GraduationCap className={`h-6 w-6 text-blue-500 flex-shrink-0 transition-transform duration-300 ${hoveredCard === index ? 'scale-110 rotate-12' : ''}`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}