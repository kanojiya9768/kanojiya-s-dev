"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, ExternalLink } from "lucide-react";

export function Experience() {
  const experienceRef = useRef<HTMLDivElement>(null);

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "GBIM Technologies",
      position: "Front-End Developer",
      duration: "DEC 2024 - JUNE 2025",
      location: "Mumbai, India",
      type: "Full-time",
      status: "Current",
      description: [
        "Working on responsive, high-performance web apps using React.js and Next.js",
        "Collaborate with UI/UX teams and ensure scalable, clean code with Tailwind CSS",
        "Focus on speed optimization and cross-browser compatibility",
        "Currently working on the ASBS MBA college website project, focused on delivering a responsive, SEO-optimized platform using React.js, Next.js, and Tailwind CSS",
        "The site highlights ASBS's international MBA program, featuring global exposure in Slovenia, Germany, and Austria",
        "Responsible for frontend architecture, component design, and seamless CMS integration to enhance user experience and content management"
      ],
      technologies: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "SEO"],
      website: "https://asbsmba.in/"
    },
    {
      company: "Boppo Technologies",
      position: "Front-End Developer",
      duration: "Sep 2023 - Oct 2024",
      location: "Mumbai, India",
      type: "Full-time",
      status: "Completed",
      description: [
        "Built scalable web platforms using Next.js and integrated third-party APIs",
        "Led feature development and mentored junior developers",
        "Ensured on-time delivery and enhanced user experience through performance tuning",
        "Developed \"Boppo Go,\" a multi-vendor e-commerce platform with Next.js and Tailwind CSS",
        "Built admin dashboards and collaborated on key payment and product flows",
        "Worked on third-party API integration and mentored new devs on Next.js structure and coding practices"
      ],
      technologies: ["Next.js", "React.js", "Tailwind CSS", "JavaScript", "API Integration"],
      website: "https://www.boppotechnologies.com/"
    },
    {
      company: "The Adroit",
      position: "React Developer Intern",
      duration: "Jun 2023 - Sep 2023",
      location: "Mumbai, India",
      type: "Internship",
      status: "Completed",
      description: [
        "Converted UI/UX wireframes into responsive components using React.js",
        "Developed modules for classes, placements, and counseling support",
        "Gained hands-on experience in state management and modern front-end tools"
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "State Management"],
      website: null
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={experienceRef}
          className="opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              My professional journey and key contributions in the field of web development
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  exp.status === 'Current' ? 'border-l-4 border-l-blue-500' : 'border-l-4 border-l-gray-300'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Building className="h-5 w-5 text-blue-500" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                          {exp.company}
                        </h3>
                        {exp.status === 'Current' && (
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            Current
                          </Badge>
                        )}
                      </div>
                      
                      <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                        {exp.position}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>

                      <div className="space-y-2 mb-4">
                        {exp.description.map((desc, descIndex) => (
                          <div key={descIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                              {desc}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="secondary"
                            className="text-xs hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {exp.website && (
                      <div className="flex-shrink-0">
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="text-sm font-medium">View Project</span>
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}