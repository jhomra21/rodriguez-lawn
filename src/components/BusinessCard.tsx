import React from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// WhatsApp Icon Component 
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 256 259" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" className={className}>
    <path d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z" fill="#00E676"/>
    <path d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.79-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z" fill="#FFF"/>
  </svg>
);

// Film grain texture CSS
const filmGrainStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: '0.10',
  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
  pointerEvents: 'none',
  zIndex: 1,
  mixBlendMode: 'multiply',
} as React.CSSProperties;

const BusinessCard: React.FC = () => {
  return (
    <motion.div 
      className="max-w-full w-full xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto overflow-hidden shadow-lg rounded-lg border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Main Card - White Background */}
      <div className="bg-white p-6 sm:p-8 pb-6 relative">
        {/* Film grain texture overlay */}
        <div style={filmGrainStyle}></div>
        
        {/* Top section with RODRIGUEZ */}
        <div className="mb-4 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-700 tracking-wide uppercase text-center font-serif">Rodriguez</h1>
        </div>

        {/* Specializing text */}
        <p className="text-center text-gray-600 text-base sm:text-lg font-medium mb-6 relative z-10">Specializing in Tree & Palm Trimming</p>
        
        {/* Lawn Service with icons */}
        <div className="relative my-8 z-10">
          {/* Left side icon (Palm Tree) positioned between edge and text */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[10%] sm:left-[12%]">
            {/* Palm Tree with gradient */}
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-8 sm:h-12 sm:w-10 stroke-current" 
                style={{ 
                  filter: 'drop-shadow(0 1px 2px rgba(0, 100, 0, 0.1))' 
                }}
                fill="none" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round">
                <defs>
                  <linearGradient id="palmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#047857" />
                  </linearGradient>
                </defs>
                <path stroke="url(#palmGradient)" d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"/>
                <path stroke="url(#palmGradient)" d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"/>
                <path stroke="url(#palmGradient)" d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"/>
                <path stroke="url(#palmGradient)" d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"/>
              </svg>
            </div>
          </div>

          {/* Tree - Right positioned between edge and text */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[10%] sm:right-[12%]">
            {/* Tree with gradient */}
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-8 sm:h-12 sm:w-10 stroke-current"
                style={{ 
                  filter: 'drop-shadow(0 1px 2px rgba(0, 100, 0, 0.1))' 
                }}  
                fill="none" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round">
                <defs>
                  <linearGradient id="treeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#047857" />
                  </linearGradient>
                </defs>
                <path stroke="url(#treeGradient)" d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"/>
                <path stroke="url(#treeGradient)" d="M12 19v3"/>
              </svg>
            </div>
          </div>

          {/* Lawn Service with gradient text */}
          <h2 className="text-center font-semibold my-3 mx-16 sm:mx-24 font-serif text-3xl sm:text-4xl bg-gradient-to-br from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent">Lawn Service</h2>
        </div>
        
        {/* Emilio with gradient text */}
        <h2 className="text-center font-bold mt-6 mb-2 font-serif text-4xl sm:text-5xl bg-gradient-to-br from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent relative z-10">Emilio</h2>
        
        {/* 24 Years Experience */}
        <p className="text-center text-gray-700 font-medium text-base sm:text-lg my-2 relative z-10">24 Years of Experience</p>
        
        {/* Free Estimates Line with gradient text */}
        <div className="text-center font-semibold text-base sm:text-lg mt-6 mb-3 font-serif bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent relative z-10">
          Free Estimates • Rio Grande Valley Wide
        </div>
      </div>
      
      {/* Contact Section - Improved Design */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 py-5 px-6 relative">
        {/* Film grain texture overlay for contact section */}
        <div style={filmGrainStyle}></div>
        
        <TooltipProvider>
          <div className="flex flex-row items-stretch relative z-10">
            {/* Emilio (Spanish) */}
            <div className="flex-1 flex flex-col pr-3">
              <div className="flex items-center gap-2.5 h-14">
                <div className="h-7 w-7 rounded-full bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3.5 w-3.5 text-green-600 hover:scale-110 transition-all duration-200" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium leading-tight">Emilio (Spanish)</p>
                  <Tooltip delayDuration={350}>
                    <TooltipTrigger asChild>
                      <a href="tel:+19563788069" className="text-base text-gray-900 font-semibold hover:text-green-600 transition-colors leading-tight mt-0.5 block">
                        (956) 378-8069
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Call or text Emilio</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              
              {/* Horizontal divider on md+ screens, hidden on small screens */}
              <div className="hidden sm:block border-t border-gray-200 my-1"></div>
              
              {/* WhatsApp */}
              <div className="group flex items-center h-8 ml-2">
                <Tooltip delayDuration={350}>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://wa.me/19563788069" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <span className="flex h-7 w-7 items-center justify-center bg-green-50 rounded-md p-0.5 shadow-sm">
                        <WhatsAppIcon className="h-6 w-6 group-hover:scale-110 transition-all duration-200" />
                      </span>
                      WhatsApp
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Message Emilio on WhatsApp</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            
            {/* Vertical divider on small screens, hidden on md+ */}
            <div className="block sm:hidden w-px bg-gray-200 mx-2"></div>
            
            {/* Ever (English) */}
            <div className="flex-1 flex flex-col pl-3">
              <div className="flex items-center gap-2.5 h-14">
                <div className="h-7 w-7 rounded-full bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3.5 w-3.5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-medium leading-tight">Ever (English)</p>
                  <Tooltip delayDuration={350}>
                    <TooltipTrigger asChild>
                      <a href="tel:+19569297845" className="text-base text-gray-900 font-semibold hover:text-green-600 transition-colors leading-tight mt-0.5 block">
                        (956) 929-7845
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Call or text Ever</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              
              {/* Horizontal divider on md+ screens, hidden on small screens */}
              <div className="hidden sm:block border-t border-gray-200 my-1"></div>
              
              {/* WhatsApp */}
              <div className="group flex items-center h-8 ml-2">
                <Tooltip delayDuration={350}>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://wa.me/19569297845" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <span className="flex h-7 w-7 items-center justify-center bg-green-50 rounded-md p-0.5 shadow-sm">
                        <WhatsAppIcon className="h-6 w-6 group-hover:scale-110 transition-all duration-200" />
                      </span>
                      WhatsApp
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Message Ever on WhatsApp</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>
        </TooltipProvider>
      </div>
    </motion.div>
  );
};

export default BusinessCard; 