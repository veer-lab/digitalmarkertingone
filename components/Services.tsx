import React from 'react';
import ServiceCard from './ServiceCard';
import { BrainCircuitIcon, BotIcon, UsersIcon, DatabaseZapIcon, TrendingUpIcon } from './icons';

const servicesData = [
  {
    icon: <BrainCircuitIcon />,
    title: 'AI in Digital Marketing',
    description: 'Leverage cutting-edge AI for predictive analytics, hyper-targeted audience segmentation, and dynamic campaign optimization to maximize your ROI.'
  },
  {
    icon: <BotIcon />,
    title: 'WhatsApp & Instagram Automation',
    description: 'Engage customers 24/7 with intelligent, automated chat flows, personalized interactions, and seamless customer support on the platforms they use most.'
  },
  {
    icon: <UsersIcon />,
    title: 'Advanced Lead Capture',
    description: 'Implement smart, multi-step forms and advanced tracking systems to capture high-quality leads and streamline your entire sales funnel effortlessly.'
  },
  {
    icon: <DatabaseZapIcon />,
    title: 'Unified Contact Management',
    description: 'Utilize a central hub for all your contacts, automatically enriched with AI-driven insights to help you build better, more profitable relationships.'
  },
  {
    icon: <TrendingUpIcon />,
    title: 'AI-Powered SEO Strategy',
    description: 'Outrank the competition with AI-driven keyword analysis, content optimization, and backlink strategies that adapt to search engine algorithms in real-time.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">Our AI-Powered Services</h2>
          <p className="text-amber-500 mt-3 text-lg">Solutions Designed for Maximum Impact</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;