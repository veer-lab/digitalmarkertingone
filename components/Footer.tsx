import React from 'react';
import { TwitterIcon, LinkedinIcon, InstagramIcon } from './icons';

const Footer: React.FC = () => {
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
    <footer className="bg-black border-t border-gray-800/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Column 1: Logo and Copyright */}
          <div>
            <a href="#" onClick={handleLogoClick} className="inline-block mb-4 text-3xl font-bold gradient-text font-heading">Vaurion</a>
            <p className="text-gray-400 max-w-xs mx-auto md:mx-0">Innovating Digital Marketing with the Power of Artificial Intelligence.</p>
             <p className="text-gray-500 mt-6">&copy; {new Date().getFullYear()} <span className="font-semibold text-amber-400">Vaurion</span>. All Rights Reserved.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" onClick={handleNavClick} className="text-gray-400 hover:text-amber-500 transition-colors">About</a></li>
              <li><a href="#services" onClick={handleNavClick} className="text-gray-400 hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#contact" onClick={handleNavClick} className="text-gray-400 hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-heading">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-5">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-amber-500 transition-colors">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-amber-500 transition-colors">
                <LinkedinIcon />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-amber-500 transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;