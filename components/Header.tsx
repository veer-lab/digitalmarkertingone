import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };
  
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-2xl shadow-black/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={handleLogoClick} className="text-3xl font-bold gradient-text font-heading">Vaurion</a>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" onClick={handleNavClick} className="text-gray-300 nav-link">About</a>
          <a href="#services" onClick={handleNavClick} className="text-gray-300 nav-link">Services</a>
          <a href="#contact" onClick={handleNavClick} className="text-gray-300 nav-link">Contact</a>
        </nav>
        <a href="#contact" onClick={handleNavClick} className="hidden md:inline-block bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold py-2 px-5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-600/40">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;