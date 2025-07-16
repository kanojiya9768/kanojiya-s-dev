"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter, ChevronDown } from "lucide-react";
import { projects, categories, years } from "@/data/projects";

export function Projects() {
  const projectsRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openYear, setOpenYear] = useState(false);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = projects.filter(project => 
    (selectedCategory === "All" || project.category === selectedCategory) &&
    (selectedYear === "All" || project.year === selectedYear)
  );

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={projectsRef}
          className="opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              A showcase of my recent work and contributions to various projects
            </p>
          </div>

          {/* Filter Section */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Filter Projects
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden"
              >
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>

            <div className={`${showFilters ? 'block' : 'hidden'} sm:block mt-4`}>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Button
                    variant="outline"
                    className="w-full sm:w-48 justify-between bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    onClick={() => setOpenCategory(!openCategory)}
                  >
                    {selectedCategory}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openCategory ? 'rotate-180' : ''}`} />
                  </Button>
                  <div
                    className={`absolute z-10 w-full sm:w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg mt-1 overflow-hidden transition-all duration-300 ease-in-out ${
                      openCategory ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {categories.map(category => (
                      <div
                        key={category}
                        className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer"
                        onClick={() => {
                          setSelectedCategory(category);
                          setOpenCategory(false);
                        }}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Button
                    variant="outline"
                    className="w-full sm:w-48 justify-between bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    onClick={() => setOpenYear(!openYear)}
                  >
                    {selectedYear}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openYear ? 'rotate-180' : ''}`} />
                  </Button>
                  <div
                    className={`absolute z-10 w-full sm:w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg mt-1 overflow-hidden transition-all duration-300 ease-in-out ${
                      openYear ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {years.map(year => (
                      <div
                        key={year}
                        className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer"
                        onClick={() => {
                          setSelectedYear(year);
                          setOpenYear(false);
                        }}
                      >
                        {year}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <Card 
                key={project.id} 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-[520px]"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center relative overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-6xl font-bold text-gray-300 dark:text-gray-600">
                      {project.title.charAt(0)}
                    </div>
                  )}
                  {project.status && (
                    <Badge 
                      className={`absolute top-2 right-2 ${
                        project.status === 'Under Development' 
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {project.year}
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="mb-3 text-xs">
                    {project.category}
                  </Badge>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.techStack.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2 mt-auto">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    {project.githubLink && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                No projects found matching the selected filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}