import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { TreeDeciduous, Home, Sprout, Sparkles } from 'lucide-react'; // Icons for services
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <TreeDeciduous className="h-7 w-7 text-green-600" />,
    title: 'Tree & Palm Trimming',
    description: 'Expert trimming for all types of trees and palms to enhance health and aesthetics.',
  },
  {
    icon: <Home className="h-7 w-7 text-green-600" />,
    title: 'Lawn Maintenance',
    description: 'Comprehensive lawn care including mowing, edging, and fertilization for a lush, green yard.',
  },
  {
    icon: <Sparkles className="h-7 w-7 text-green-600" />,
    title: 'Yard Cleanup',
    description: 'Seasonal and general yard cleanup services to keep your property neat and tidy.',
  },
  {
    icon: <Sprout className="h-7 w-7 text-green-600" />,
    title: 'Planting & Mulching',
    description: 'Beautify your landscape with new plantings and fresh mulch for a vibrant look.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut" 
    }
  }
};

const ServicesOverview: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Services Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service) => (
          <motion.div 
            key={service.title} 
            variants={item}
            className="h-full"
          >
            <Card className="group text-center flex flex-col h-full bg-white border-0 rounded-xl overflow-hidden hover:shadow-sm transition-all duration-300">
              <div className="flex justify-center pt-8 pb-5">
                <div className="h-14 w-14 bg-green-50 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              
              <CardHeader className="pt-0 pb-2 px-6">
                <CardTitle className="text-lg font-medium text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow pb-8 px-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      

    </div>
  );
};

export default ServicesOverview; 