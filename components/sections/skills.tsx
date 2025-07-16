"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: "🎨",
      skills: [
        { name: "React.js", level: "Advanced", percentage: 90, color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
        { name: "Next.js", level: "Advanced", percentage: 85, color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200" },
        { name: "TypeScript", level: "Intermediate", percentage: 75, color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
        { name: "JavaScript ES6+", level: "Advanced", percentage: 90, color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
        { name: "HTML5", level: "Advanced", percentage: 95, color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
        { name: "CSS3", level: "Advanced", percentage: 90, color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200" },
        { name: "Tailwind CSS", level: "Advanced", percentage: 88, color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200" },
      ]
    },
    {
      title: "Backend Technologies",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: "Intermediate", percentage: 70, color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
        { name: "Express.js", level: "Intermediate", percentage: 68, color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200" },
        { name: "MongoDB", level: "Intermediate", percentage: 65, color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: "Intermediate", percentage: 75, color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
        { name: "SEO", level: "Intermediate", percentage: 70, color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
        { name: "Responsive Design", level: "Advanced", percentage: 92, color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200" },
        { name: "Performance Optimization", level: "Intermediate", percentage: 78, color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={skillsRef}
          className="opacity-0 translate-y-8 transition-all duration-700 relative z-10"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-800"
                onMouseEnter={() => setHoveredCategory(categoryIndex)}
                onMouseLeave={() => setHoveredCategory(null)}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="space-y-2"
                        style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                      >
                        <div className="flex items-center justify-between">
                        <Badge 
                          className={`${skill.color} px-3 py-1 text-sm font-medium hover:scale-105 transition-transform cursor-default`}
                        >
                          {skill.name}
                        </Badge>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          {skill.level}
                        </span>
                      </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Skills Overview */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", 
                "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "SEO", "Responsive Design"
              ].map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="text-sm py-2 px-4 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}