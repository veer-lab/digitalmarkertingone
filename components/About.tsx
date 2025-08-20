import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">About <span className="gradient-text">Vaurion</span></h2>
          <p className="text-amber-500 mt-3 text-lg">Pioneering the Future of Digital Engagement</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
             <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 opacity-20 blur-xl"></div>
             <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
              alt="Data Analytics Dashboard" 
              className="relative rounded-xl shadow-2xl shadow-amber-800/40 object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-gray-300 text-lg space-y-5 leading-relaxed">
            <p>
              At <span className="font-semibold text-amber-500">Vaurion</span>, we believe that the future of marketing is intelligent, automated, and deeply personalized. Founded by a team of tech innovators and marketing strategists, our mission is to empower businesses of all sizes to achieve their full potential in the digital landscape.
            </p>
            <p>
              We move beyond traditional methods by integrating cutting-edge AI at the core of everything we do. From predictive analytics that forecast market trends to intelligent automation that nurtures leads 24/7, our solutions are designed to be smarter, faster, and more effective.
            </p>
            <p>
              Our commitment is to your growth. We partner with you to build data-driven strategies that not only reach your audience but also create meaningful, lasting connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;