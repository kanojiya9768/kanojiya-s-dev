"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Search, 
  Zap, 
  Palette, 
  Database,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive, high-performance web applications using modern frameworks and best practices.",
      features: ["React.js & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Creating seamless user experiences across all devices with mobile-first responsive design approach.",
      features: ["Mobile Optimization", "Cross-browser Testing", "Touch-friendly UI", "Progressive Web Apps"],
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Implementing SEO best practices to improve search engine rankings and organic visibility.",
      features: ["Technical SEO", "Page Speed Optimization", "Meta Tags & Schema", "Core Web Vitals"],
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, efficiency, and exceptional user experience.",
      features: ["Code Splitting", "Lazy Loading", "Bundle Optimization", "Caching Strategies"],
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800"
    },
    {
      icon: Palette,
      title: "UI/UX Implementation",
      description: "Converting designs into pixel-perfect, interactive user interfaces with attention to detail.",
      features: ["Design Systems", "Component Libraries", "Animations", "User Experience"],
      color: "text-pink-600 dark:text-pink-400",
      bgColor: "bg-pink-100 dark:bg-pink-900/20",
      borderColor: "border-pink-200 dark:border-pink-800"
    },
    {
      icon: Database,
      title: "Full-Stack Integration",
      description: "Connecting frontend applications with backend services and databases for complete solutions.",
      features: ["API Integration", "Database Design", "Authentication", "Real-time Features"],
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={servicesRef}
          className="opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Services & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Comprehensive web development services to bring your digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white dark:bg-gray-800 border-2 ${service.borderColor} hover:border-opacity-50 relative overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 dark:to-gray-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${service.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-3 group/feature"
                        style={{ animationDelay: `${(index * 100) + (featureIndex * 50)}ms` }}
                      >
                        <CheckCircle className={`h-4 w-4 ${service.color} group-hover/feature:scale-110 transition-transform duration-200`} />
                        <span className="text-sm text-gray-600 dark:text-gray-300 group-hover/feature:text-gray-900 dark:group-hover/feature:text-white transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Arrow */}
                  <div className="flex justify-end mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className={`h-5 w-5 ${service.color}`} />
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