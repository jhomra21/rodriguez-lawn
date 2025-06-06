import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, CheckCircle2, Tag } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// WhatsApp Icon Component
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 256 259" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" className={className}>
    {/* Simplified WhatsApp icon for cleaner look if needed, or keep as is if it fits */}
    <path d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z" fill="#25D366"/> {/* Notion-like solid green */}
    <path d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.79-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z" fill="#FFF"/>
  </svg>
);

// Subtle noise texture for Notion-like feel
const noiseStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: '0.03',
  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
  pointerEvents: 'none',
  zIndex: 1,
  mixBlendMode: 'multiply',
} as React.CSSProperties;

const BusinessCard: React.FC = () => {
  return (
    <motion.div
      className="max-w-full w-full xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto overflow-hidden shadow-md rounded-xl border border-gray-200/70 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Main Card Content Area -- Do not touch this div PLEASE */}
      <div className="px-6 pt-8 pb-5 relative overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-zinc-100 border-b border-e border-zinc-300 shadow-[0_3px_8px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.75)] rounded-t-xl -mb-5 before:absolute before:inset-0 before:rounded-t-xl before:bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_65%)] before:pointer-events-none">
        {/* Subtle noise texture overlay */}
        <div style={noiseStyle}></div>

      

        {/* Lawn Service immediately under Rodriguez - card style container */}
        <div className="relative overflow-hidden flex flex-col items-center justify-center py-6 px-6 mb-8 -mx-6 -mt-8 rounded-t-xl rounded-b-xl 
                        bg-gradient-to-br from-zinc-100 via-white to-zinc-300/80 shadow-[0_2px_5px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] 
                        before:absolute before:inset-0 before:rounded-t-xl before:bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_65%)] 
                        before:pointer-events-none border-b border-zinc-300/70">
          {/* Top section with RODRIGUEZ */}
          <div className="mb-3 relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-b from-zinc-500 to-zinc-900 text-transparent bg-clip-text tracking-tight uppercase font-serif">Rodriguez</h1>
          </div>
          
          {/* Lawn Service section */}
          <div className="flex items-center justify-center w-full">
            {/* Left side icon (Palm Tree) */}
            <div className="flex-shrink-0 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-9 w-9"
                strokeWidth="0.5">
                <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" className="fill-green-600 stroke-green-700"/>
                <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" className="fill-green-700 stroke-green-800"/>
                <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" className="fill-green-800 stroke-green-900"/>
                <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" className="fill-amber-600 stroke-amber-800"/>
              </svg>
            </div>

            {/* Lawn Service Text */}
            <h2 className="text-center font-medium font-serif text-2xl sm:text-3xl text-gray-800">Trimming Services</h2>

            {/* Tree - Right icon */}
            <div className="flex-shrink-0 ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-10" strokeWidth="0.5">
                {/* Tree Trunk Base */}
                <path d="M11.5 18 L11.5 23 L12.5 23 L12.5 18 Z" className="fill-amber-700 stroke-amber-800"/>
                
                {/* Trunk Branch Left */}
                <path d="M11.5 18 C11 18, 10 17, 9 15 L10 14.5 Z" className="fill-amber-600 stroke-amber-700"/>
                
                {/* Trunk Branch Right */}
                <path d="M12.5 18 C13 18, 14 17, 15 15 L14 14.5 Z" className="fill-amber-600 stroke-amber-700"/>
                
                {/* Lower Foliage Base - Darkest */}
                <path d="M6 15 C6 19, 9 21, 12 21 C15 21, 18 19, 18 15 C18 11, 15 13, 12 13 C9 13, 6 11, 6 15 Z" className="fill-green-800/80 stroke-green-900"/>
                
                {/* Middle Foliage Layer */}
                <path d="M7 12 C7 16, 9.5 18, 12 18 C14.5 18, 17 16, 17 12 C17 8, 14.5 10, 12 10 C9.5 10, 7 8, 7 12 Z" className="fill-green-700 stroke-green-800"/>
                
                {/* Upper Foliage Layer */}
                <path d="M8 9 C8 13, 10 15, 12 15 C14 15, 16 13, 16 9 C16 5, 14 7, 12 7 C10 7, 8 5, 8 9 Z" className="fill-green-600 stroke-green-700"/>
                
                {/* Top Foliage Crown */}
                <path d="M9 6 C9 9, 10.5 11, 12 11 C13.5 11, 15 9, 15 6 C15 3, 13.5 4, 12 4 C10.5 4, 9 3, 9 6 Z" className="fill-green-500 stroke-green-600"/>
                
                {/* Highlight Foliage Accents - Light */}
                <path d="M10 7 C10 9, 11 10, 12 10 C13 10, 14 9, 14 7 C14 5, 13 6, 12 6 C11 6, 10 5, 10 7 Z" className="fill-green-400/60 stroke-green-500"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Specializing text */}
        <p className="text-center text-gray-600 text-base sm:text-lg font-normal mb-10 relative z-10">Specializing in Tree & Palm Trimming and Maintenance</p>

        {/* Middle section - Modernized Notion-like style */}
        <div className="relative z-10 flex flex-col items-center space-y-8">
          {/* Emilio - elevated card style */}
          <div className="w-full max-w-sm mx-auto">
            <div className="pt-5 pb-4 px-6 relative overflow-hidden bg-gradient-to-br from-green-100/70 via-green-50/50 to-green-100/70 border border-green-200/50 rounded-lg shadow-[0_3px_6px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] before:absolute before:inset-0 before:rounded-lg before:bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0)_60%)] before:pointer-events-none">
              <h2 className="text-center font-bold mb-1.5 font-serif text-3xl sm:text-4xl text-zinc-900">Emilio & Ever</h2>
              <p className="text-center text-green-700 font-normal text-base sm:text-lg">24 Years of Experience</p>
            </div>
          </div>

          {/* Service promises - stacked pills */}
          <div className="flex flex-col items-center space-y-3">
            {/* Free Estimates pill */}
            <div className="relative overflow-hidden inline-flex items-center gap-2 py-2.5 px-5 bg-gradient-to-br from-gray-100 via-white to-gray-100/70 border border-gray-200/70 rounded-xl text-gray-700 text-sm sm:text-base shadow-[0_3px_6px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)] before:absolute before:inset-[1.5px] before:rounded-lg before:bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_70%)] before:opacity-90 before:-z-10 before:pointer-events-none">
              <Tag className="h-4 w-4 text-orange-500 flex-shrink-0" />
              <span className="font-semibold text-gray-800">Free Estimates</span>
              <div className="h-4 w-px bg-gray-300 mx-1"></div> {/* Vertical line separator */}
              <MapPin className="h-4 w-4 text-blue-500 flex-shrink-0 -ml-1" /> 
              <span className="font-medium text-gray-600">Rio Grande Valley Wide</span>
            </div>
            
            {/* Best Prices pill */}
            <div className="relative overflow-hidden inline-flex items-center gap-2 py-2.5 px-5 mb-2
                            bg-gradient-to-br from-green-600 via-green-500 to-green-600 border border-green-700/50 
                            rounded-xl text-white text-sm sm:text-base font-semibold shadow-[0_3px_7px_rgba(0,0,0,0.18),inset_0_1px_1.5px_rgba(255,255,255,0.5)] 
                            before:absolute before:inset-[1.5px] before:rounded-lg before:bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_70%)] 
                            before:from-green-400/70 before:to-green-500/70 before:opacity-90 before:-z-10 before:pointer-events-none">
              <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" /> 
              Best Prices in the <p className="italic font-medium">Entire</p> Valley
            </div>
          </div>
        </div>

        {/* Free spacing at bottom for balance */}
        <div className="h-4 sm:h-6"></div>
      </div>

      {/* Contact Section - Notion-inspired Cards */}
      <div className="bg-white border-t-2 rounded-t-xl border-zinc-200/70 py-6 px-6 sm:px-8 relative">
        {/* Subtle noise texture overlay for contact section */}
        <div style={noiseStyle}></div>

        <TooltipProvider>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            {/* Emilio (Spanish) */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100/80 border border-gray-200/60 shadow-[0_4px_8px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] rounded-lg before:absolute before:inset-[1.5px] before:rounded-lg before:bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_70%)] before:opacity-90 before:-z-10 before:pointer-events-none">
              <CardContent className="p-4">
                <div className="flex flex-row items-center justify-between sm:flex-col sm:items-start sm:gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-md bg-gray-100/70 border border-gray-200/80 flex items-center justify-center flex-shrink-0 shadow-inner-sm">
                      <Phone className="h-4 w-4 text-gray-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium leading-tight">Emilio (Spanish)</p>
                      <Tooltip delayDuration={300}>
                        <TooltipTrigger asChild>
                          <a href="tel:+19563788069" className="text-base sm:text-lg text-gray-800 font-semibold hover:text-green-600 transition-colors leading-tight mt-0.5 block">
                            (956) 378-8069
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Call or text Emilio</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 w-full hidden sm:block"></div>

                  {/* WhatsApp */}
                  <div className="group flex items-center">
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <a
                          href="https://wa.me/19563788069"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 text-sm text-gray-700 hover:text-green-600 transition-colors"
                        >
                          <span className="flex h-8 w-8 items-center justify-center bg-gray-50 rounded-md p-1.5 border border-gray-100 group-hover:bg-green-50 transition-colors">
                            <WhatsAppIcon className="h-4.5 w-4.5 text-green-600 group-hover:scale-105 transition-transform duration-200" />
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
              </CardContent>
            </Card>

            {/* Ever (English) */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100/80 border border-gray-200/60 shadow-[0_4px_8px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] rounded-lg before:absolute before:inset-[1.5px] before:rounded-lg before:bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_70%)] before:opacity-90 before:-z-10 before:pointer-events-none">
              <CardContent className="p-4">
                <div className="flex flex-row items-center justify-between sm:flex-col sm:items-start sm:gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-md bg-gray-100/70 border border-gray-200/80 flex items-center justify-center flex-shrink-0 shadow-inner-sm">
                      <Phone className="h-4 w-4 text-gray-700" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium leading-tight">Ever (English)</p>
                      <Tooltip delayDuration={300}>
                        <TooltipTrigger asChild>
                          <a href="tel:+19569297845" className="text-base sm:text-lg text-gray-800 font-semibold hover:text-green-600 transition-colors leading-tight mt-0.5 block">
                            (956) 929-7845
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Call or text Ever</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 w-full hidden sm:block"></div>

                  {/* WhatsApp */}
                  <div className="group flex items-center">
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <a
                          href="https://wa.me/19569297845"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 text-sm text-gray-700 hover:text-green-600 transition-colors"
                        >
                          <span className="flex h-8 w-8 items-center justify-center bg-gray-50 rounded-md p-1.5 border border-gray-100 group-hover:bg-green-50 transition-colors">
                            <WhatsAppIcon className="h-4.5 w-4.5 text-green-600 group-hover:scale-105 transition-transform duration-200" />
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
              </CardContent>
            </Card>
          </div>
        </TooltipProvider>
      </div>
    </motion.div>
  );
};

export default BusinessCard; 