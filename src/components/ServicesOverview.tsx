import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { TreeDeciduous, Home, Sprout, Sparkles } from 'lucide-react'; // Icons for services
import { motion } from 'motion/react';

const services = [
  {
    icon: <TreeDeciduous className="h-8 w-8 md:h-10 md:w-10 text-green-600 mb-3 md:mb-4" />,
    title: 'Tree & Palm Trimming',
    description: 'Expert trimming for all types of trees and palms to enhance health and aesthetics.',
  },
  {
    icon: <Home className="h-8 w-8 md:h-10 md:w-10 text-green-600 mb-3 md:mb-4" />,
    title: 'Lawn Maintenance',
    description: 'Comprehensive lawn care including mowing, edging, and fertilization for a lush, green yard.',
  },
  {
    icon: <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-green-600 mb-3 md:mb-4" />,
    title: 'Yard Cleanup',
    description: 'Seasonal and general yard cleanup services to keep your property neat and tidy.',
  },
  {
    icon: <Sprout className="h-8 w-8 md:h-10 md:w-10 text-green-600 mb-3 md:mb-4" />,
    title: 'Planting & Mulching',
    description: 'Beautify your landscape with new plantings and fresh mulch for a vibrant look.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.3,
      ease: "easeOut" 
    }
  }
};

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-10 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800 text-center mb-3 md:mb-4">
            Our Lawn & Tree Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center mb-8 md:mb-12 max-w-xl mx-auto">
            From routine maintenance to specialized tree care, we offer a range of services to keep your outdoor spaces beautiful.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.title} 
              variants={item}
            >
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col h-full">
                <CardHeader className="items-center pb-3 md:pb-6">
                  {service.icon}
                  <CardTitle className="text-lg md:text-xl font-semibold text-green-700">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                  <p className="text-sm md:text-base text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-8 md:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button asChild size="lg" className="bg-green-700 hover:bg-green-800 transition-colors duration-150 text-white">
            <a href="/services">View All Services</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview; 