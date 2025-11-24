import React from 'react';
import { Code2, Terminal, Laptop } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    { 
      title: 'CoffeeHouse Website', 
      tech: ['React', 'Node.js', 'SQL', 'Python'],
      description: 'Full-stack shopping platform with real-time inventory management and secure payment processing',
      icon: Laptop,
      link: "https://coffeehouse-seven.vercel.app/"
    },
    { 
      title: 'Task Management App', 
      tech: ['React', 'Firebase', 'Tailwind'],
      description: 'Collaborative task tracker with team features, real-time updates, and intuitive UI',
      icon: Terminal,
      link: "https://your-task-app-link.com"
    },
    { 
      title: 'Weather Dashboard', 
      tech: ['React', 'API', 'Charts.js'],
      description: 'Real-time weather data visualization with beautiful charts and forecasts',
      icon: Code2,
      link: "https://your-weather-dashboard.com"
    },
    { 
      title: 'Portfolio Generator', 
      tech: ['React', 'Three.js', 'AI'],
      description: 'AI-powered portfolio builder that creates stunning developer portfolios',
      icon: Laptop,
      link: "https://your-portfolio-generator.com"
    }
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-8 sm:pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-gray-800">
          My Projects
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg px-4">
          Swimming through my ocean of creations 🐟
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn border-2 border-gray-100 hover:border-amber-200"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-amber-400 rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform">
                <project.icon size={20} className="sm:w-7 sm:h-7 text-white" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors pr-8">
                {project.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 sm:px-4 py-1 sm:py-2 bg-amber-50 text-amber-700 rounded-full text-xs sm:text-sm font-medium border border-amber-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Corrected: working link button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2.5 sm:py-3 bg-amber-400 text-white rounded-full font-semibold 
                           hover:bg-amber-500 transition-all duration-300 shadow-md hover:shadow-lg 
                           text-sm sm:text-base text-center"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
