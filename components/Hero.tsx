import React, { useState } from 'react';
import Chat from './Chat';

const NeuralOrb: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div className="neural-orb-container" onClick={onClick}>
    <div className="neural-orb">
      <div className="orb-core"></div>
      <div className="orb-ring" style={{ transform: 'rotateY(30deg) rotateX(15deg)' }}>
        <div className="orb-particle" style={{ animationDelay: '0s' }}></div>
      </div>
      <div className="orb-ring" style={{ transform: 'rotateY(-30deg) rotateX(-15deg)' }}>
        <div className="orb-particle" style={{ animationDelay: '-1.5s' }}></div>
      </div>
      <div className="orb-ring" style={{ transform: 'rotateY(90deg) rotateX(75deg)' }}>
        <div className="orb-particle" style={{ animationDelay: '-3s' }}></div>
      </div>
       <div className="orb-ring" style={{ transform: 'rotateY(90deg) rotateX(-75deg)' }}>
        <div className="orb-particle" style={{ animationDelay: '-4.5s' }}></div>
      </div>
    </div>
  </div>
);

const Hero: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
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

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] animate-pulse bg-gradient-to-tr from-amber-800/20 via-transparent to-amber-900/20 rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-6 text-center z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 font-heading">
                Revolutionizing Marketing with <span className="gradient-text">Artificial Intelligence</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
                <span className="font-bold gradient-text">Vaurion</span> delivers next-generation digital marketing solutions, harnessing the power of AI to drive growth, engagement, and unparalleled results for your business.
              </p>
              <a href="#services" onClick={handleNavClick} className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 inline-block shadow-2xl shadow-amber-600/40">
                Explore Our Solutions
              </a>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center items-center mt-10 md:mt-0">
              <NeuralOrb onClick={() => setIsChatOpen(true)} />
              <p className="mt-8 text-amber-500 font-semibold animate-pulse">Click the Orb to ask our AI</p>
            </div>
          </div>
        </div>
      </section>
      <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default Hero;