import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative group">
      {/* Glow effect element */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-800 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-300"></div>
      
      {/* Main card content */}
      <div className="relative bg-gray-900 h-full p-8 rounded-xl border border-gray-700 transition-all duration-300 group-hover:border-transparent">
        <div className="flex flex-col items-center text-center">
          {icon}
          <h3 className="text-xl font-bold text-white mb-3 font-heading">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;