import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import BusinessCard from './BusinessCard';
import { cn } from '../lib/utils';

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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-b from-green-500 to-green-950 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Professional <br />
            <motion.span 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold bg-gradient-to-b from-green-400 to-green-900 text-transparent bg-clip-text"
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
            Specializing in expert tree trimming, palm care, and comprehensive lawn services with over 24 years of experience. Serving the Rio Grande Valley in Texas.
          </motion.p>
          <motion.div 
            className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            <Button 
              asChild 
              size="lg" 
              className={cn(
                "relative bg-gradient-to-tr from-green-800 via-green-600 to-green-800 text-white hover:scale-103",
                "shadow-[0_4px_8px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.3)]",
                "before:absolute before:inset-[2px] before:rounded-[0.45rem]",
                "before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_var(--tw-gradient-to)_100%)]",
                "before:from-green-500/90 before:to-green-700",
                "before:opacity-90 before:-z-10",
                "hover:before:brightness-110 hover:shadow-[0_6px_12px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.4)]",
                "active:shadow-[0_2px_4px_rgba(0,0,0,0.2)]",
                "active:translate-y-[1px] transition-all duration-200",
                "border-none overflow-hidden"
              )}
            >
              <a href="#contact" className="z-10 flex items-center justify-center">
                Request Free Estimate
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className={cn(
                "relative bg-white border-none text-green-700 group",
                "shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_0_0_2px_#16a34a]",
                "before:absolute before:inset-[2px] before:rounded-[0.45rem]",
                "before:bg-[radial-gradient(circle_at_center,_white_30%,_#f0fdf4_100%)]",
                "before:opacity-90 before:-z-10",
                "hover:before:brightness-105 hover:shadow-[0_6px_12px_rgba(0,0,0,0.15),inset_0_0_0_2px_#16a34a]",
                "active:shadow-[inset_0_0_0_2px_#16a34a,0_2px_4px_rgba(0,0,0,0.1)]",
                "active:translate-y-[1px] transition-all duration-200",
                "overflow-hidden"
              )}
            >
              <a href="#services" className="z-10 flex items-center justify-center">
                Our Services <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
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