import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import BusinessCard from './BusinessCard';
import { cn } from '../lib/utils';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn("relative min-h-[80vh] flex items-center transition-all duration-150 ease-in overflow-hidden", className)}>
      <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-6 md:gap-12 items-center transition-all duration-150 ease-in py-16 md:py-20">
        {/* Left Column: Headline and CTAs */}
        <motion.div 
          className="bg-transparent backdrop-blur-sm lg:col-span-3 text-center lg:text-left order-2 lg:order-1 rounded-lg p-6 border border-zinc-400/40"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Content with glass panel */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <span className="font-bold leading-tight bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-400 text-transparent bg-clip-text">Professional </span> <br />
              <motion.span 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
               <span className="leading-tight font-bold bg-gradient-to-b from-green-200/90 to-green-500 text-transparent bg-clip-text">Tree & Palm Care</span>
              </motion.span>
            </motion.h1>
            <motion.p 
              className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto lg:mx-0 drop-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              Expert tree trimming, palm maintenance, and trunk services with over <span className="italic text-green-200 font-medium">24 years of experience</span>. Serving the Rio Grande Valley in Texas.
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
                  "relative bg-gradient-to-tr from-green-700 via-green-500 to-green-700 text-white hover:scale-103",
                  "shadow-[0_4px_8px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.3)]",
                  "before:absolute before:inset-[2px] before:rounded-[0.45rem]",
                  "before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_var(--tw-gradient-to)_100%)]",
                  "before:from-green-400/90 before:to-green-600",
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
                  "relative bg-zinc-100 border-none text-zinc-900 group",
                  "shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_0_0_2px_rgba(255,255,255,0.5)]",
                  "before:absolute before:inset-[2px] before:rounded-[0.45rem]",
                  "before:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_30%,_rgba(255,255,255,0.1)_100%)]",
                  "before:opacity-90 before:-z-10",
                  "hover:before:brightness-105 hover:shadow-[0_6px_12px_rgba(0,0,0,0.15),inset_0_0_0_2px_rgba(255,255,255,0.6)]",
                  "active:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.5),0_2px_4px_rgba(0,0,0,0.1)]",
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