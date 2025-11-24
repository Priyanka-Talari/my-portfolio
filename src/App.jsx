import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FloatingClouds from './components/FloatingClouds';
import SwimmingFish from './components/SwimmingFish';
import CodeFish from './components/CodeFish';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import './styles/animations.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100 overflow-hidden">
      <FloatingClouds />
      <SwimmingFish />
      <CodeFish />
      
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <div className="relative z-10">
        {currentPage === 'Home' && <HomePage />}
        {currentPage === 'Projects' && <ProjectsPage />}
        {currentPage === 'Contact' && <ContactPage />}
      </div>
    </div>
  );
}