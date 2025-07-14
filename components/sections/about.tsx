"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

export function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={aboutRef}
          className="opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Passionate Front-End Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a Front-End Developer with 2+ years of experience building responsive 
                  and high-performance web applications. I focus on creating clean, scalable 
                  UI with strong attention to detail.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I also have working knowledge of backend tools like Node.js, Express.js, 
                  and MongoDB, allowing me to collaborate across the full stack. Passionate 
                  about clean code and continuous learning.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
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
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Education
              </h3>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
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
                        <GraduationCap className="h-6 w-6 text-blue-500 flex-shrink-0" />
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