import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import BusinessCard from './BusinessCard';

const Hero: React.FC = () => {
  return (
    <section className="bg-green-50 py-8 md:py-16 lg:py-24 transition-all duration-150 ease-in">
      <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-6 md:gap-12 items-center transition-all duration-150 ease-in">
        {/* Left Column: Headline and CTAs */}
        <motion.div 
          className="lg:col-span-3 text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Professional <br />
            <motion.span 
              className="text-green-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Tree & Lawn Care
            </motion.span>
          </motion.h1>
          <motion.p 
            className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            Specializing in expert tree trimming, palm care, and comprehensive lawn services with over 24 years of experience. Serving Edinburg, TX and Valley Wide.
          </motion.p>
          <motion.div 
            className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            <Button asChild size="lg" className="bg-green-700 hover:bg-green-800 text-white transition-colors duration-150">
              <a href="/contact#estimate">Request Free Estimate</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-100 hover:text-green-800 transition-colors duration-150">
              <a href="/services">
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column: Business Card */}
        <div className="lg:col-span-2 order-1 lg:order-2 mb-6 lg:mb-0 w-full">
          <BusinessCard />
        </div>
      </div>
    </section>
  );
};

export default Hero; 