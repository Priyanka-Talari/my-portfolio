import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const HomePage = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    'Full Stack Developer',
    'Python Developer',
    'Backend Developer',
    'Software Engineer',
    'Web Developer',
    'React Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { 
      Icon: Github, 
      label: 'GitHub', 
      url: 'https://github.com/Priyanka-Talari' 
    },
    { 
      Icon: Linkedin, 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/priyanka-talari-47102626b/' 
    },
    { 
      Icon: Mail, 
      label: 'Email', 
      url: 'mailto:priyankatalari16@gmail.com' 
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 sm:py-0">
      <div className="text-center z-10 animate-fadeIn max-w-4xl w-full">
        {/* Profile Fish Image */}
        <div className="mb-6 sm:mb-8 relative inline-block">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-white shadow-2xl p-3 sm:p-4 animate-gentleBob">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <ellipse cx="100" cy="100" rx="70" ry="50" fill="#E6B941"/>
              <ellipse cx="95" cy="100" rx="60" ry="43" fill="#F4D03F"/>
              <circle cx="115" cy="85" r="10" fill="#7DBADB"/>
              <circle cx="115" cy="85" r="5" fill="white"/>
              <path d="M 30 100 L 10 70 L 20 100 L 10 130 Z" fill="#F4D03F"/>
              <path d="M 35 100 L 15 75 L 25 100 L 15 125 Z" fill="#E6B941"/>
            </svg>
          </div>
        </div>
        
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-3 sm:mb-4 text-gray-800 animate-gentleWave px-4">
          Priyanka Talari
        </h1>
        
        {/* Rotating Titles */}
        <div className="h-10 sm:h-12 md:h-14 mb-4 sm:mb-6">
          <p className="text-xl sm:text-2xl md:text-3xl text-amber-600 font-medium">
            <span className="inline-block animate-titleSlide" key={currentTitle}>
              {titles[currentTitle]}
            </span>
          </p>
        </div>
        
        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
          Swimming through clouds of code, creating digital experiences 
          that soar beyond imagination 🐟☁️
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4 mb-8 sm:mb-12">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-amber-400 text-white rounded-full font-semibold hover:bg-amber-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View My Work
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-amber-600 border-2 border-amber-400 rounded-full font-semibold hover:bg-amber-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get In Touch
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 px-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 sm:p-4 bg-white rounded-full hover:bg-amber-400 transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg"
              title={social.label}
            >
              <social.Icon size={20} className="sm:w-6 sm:h-6 text-gray-700 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;