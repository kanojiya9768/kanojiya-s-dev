"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Shubham Surve",
      position: "React JS Developer",
      company: "The Adroit Company",
      content: "Vishal was an exceptional teammate at The Adroit Company, working together on the Simdhar Education project. His proficiency in React.js and collaborative approach significantly contributed to our success.",
      rating: 5,
      avatar: "SS"
    },
    {
      name: "Irfan Khan",
      position: "Backend Developer",
      company: "Boppo Technologies",
      content: "Working with Vishal at Boppo Technologies was a pleasure. His front-end expertise complemented our backend development, resulting in seamless project delivery and high-quality outcomes.",
      rating: 5,
      avatar: "IK"
    },
    {
      name: "Rahul Sharma",
      position: "Project Manager",
      company: "Boppo Technologies",
      content: "Vishal's expertise in React.js and Next.js has been instrumental in delivering high-quality projects. His attention to detail and commitment to clean code makes him a valuable team member.",
      rating: 5,
      avatar: "RS"
    },
    {
      name: "Sakshi",
      position: "UI/UX Designer",
      company: "Boppo Technologies",
      content: "Working with Vishal was a great experience. He perfectly translated our designs into responsive, pixel-perfect interfaces. His understanding of modern web technologies is impressive.",
      rating: 5,
      avatar: "PP"
    }
  ];
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={testimonialsRef}
          className="opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Client Testimonials
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              What clients and colleagues say about working with me
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial Card */}
            <Card className="group hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col items-center text-center">
                  {/* Quote Icon */}
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {testimonials[currentIndex].position}
                      </p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {testimonials[currentIndex].company}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}