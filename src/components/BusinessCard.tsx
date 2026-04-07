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
import WhatsAppIcon from './WhatsAppIcon';

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

type CardStrings = {
  experience: string;
  specializing: string;
  freeEstimates: string;
  rgvWide: string;
  bestPricesPrefix: string;
  bestPricesEmphasis: string;
  bestPricesSuffix: string;
  emilioLabel: string;
  everLabel: string;
  callEmilio: string;
  callEver: string;
  messageEmilio: string;
  messageEver: string;
};

const defaultStrings: CardStrings = {
  experience: '24 Years of Experience',
  specializing: 'Specializing in Tree & Palm Trimming and Maintenance',
  freeEstimates: 'Free Estimates',
  rgvWide: 'Rio Grande Valley Wide',
  bestPricesPrefix: 'Best Prices in the ',
  bestPricesEmphasis: 'Entire',
  bestPricesSuffix: ' Valley',
  emilioLabel: 'Emilio (Spanish)',
  everLabel: 'Ever (English)',
  callEmilio: 'Call or text Emilio',
  callEver: 'Call or text Ever',
  messageEmilio: 'Message Emilio on WhatsApp',
  messageEver: 'Message Ever on WhatsApp',
};

interface BusinessCardProps {
  strings?: Partial<CardStrings>;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ strings }) => {
  const s: CardStrings = { ...defaultStrings, ...(strings || {}) };
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
                <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" className="fill-green-600 stroke-green-700" />
                <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" className="fill-green-700 stroke-green-800" />
                <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" className="fill-green-800 stroke-green-900" />
                <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" className="fill-amber-600 stroke-amber-800" />
              </svg>
            </div>

            {/* Lawn Service Text */}
            <h2 className="text-center font-medium font-serif text-2xl sm:text-3xl text-gray-800">Trimming Services</h2>

            {/* Tree - Right icon */}
            <div className="flex-shrink-0 ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-10" strokeWidth="0.5">
                {/* Tree Trunk Base */}
                <path d="M11.5 18 L11.5 23 L12.5 23 L12.5 18 Z" className="fill-amber-700 stroke-amber-800" />

                {/* Trunk Branch Left */}
                <path d="M11.5 18 C11 18, 10 17, 9 15 L10 14.5 Z" className="fill-amber-600 stroke-amber-700" />

                {/* Trunk Branch Right */}
                <path d="M12.5 18 C13 18, 14 17, 15 15 L14 14.5 Z" className="fill-amber-600 stroke-amber-700" />

                {/* Lower Foliage Base - Darkest */}
                <path d="M6 15 C6 19, 9 21, 12 21 C15 21, 18 19, 18 15 C18 11, 15 13, 12 13 C9 13, 6 11, 6 15 Z" className="fill-green-800/80 stroke-green-900" />

                {/* Middle Foliage Layer */}
                <path d="M7 12 C7 16, 9.5 18, 12 18 C14.5 18, 17 16, 17 12 C17 8, 14.5 10, 12 10 C9.5 10, 7 8, 7 12 Z" className="fill-green-700 stroke-green-800" />

                {/* Upper Foliage Layer */}
                <path d="M8 9 C8 13, 10 15, 12 15 C14 15, 16 13, 16 9 C16 5, 14 7, 12 7 C10 7, 8 5, 8 9 Z" className="fill-green-600 stroke-green-700" />

                {/* Top Foliage Crown */}
                <path d="M9 6 C9 9, 10.5 11, 12 11 C13.5 11, 15 9, 15 6 C15 3, 13.5 4, 12 4 C10.5 4, 9 3, 9 6 Z" className="fill-green-500 stroke-green-600" />

                {/* Highlight Foliage Accents - Light */}
                <path d="M10 7 C10 9, 11 10, 12 10 C13 10, 14 9, 14 7 C14 5, 13 6, 12 6 C11 6, 10 5, 10 7 Z" className="fill-green-400/60 stroke-green-500" />
              </svg>
            </div>
          </div>
        </div>

        {/* Specializing text */}
        <p className="text-center text-gray-600 text-base sm:text-lg font-normal mb-10 relative z-10">{s.specializing}</p>

        {/* Middle section - Modernized Notion-like style */}
        <div className="relative z-10 flex flex-col items-center space-y-8">
          {/* Emilio - elevated card style */}
          <div className="w-full max-w-sm mx-auto">
            <div className="pt-5 pb-4 px-6 relative overflow-hidden bg-gradient-to-br from-green-100/70 via-green-50/50 to-green-100/70 border border-green-200/50 rounded-lg shadow-[0_3px_6px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] before:absolute before:inset-0 before:rounded-lg before:bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0)_60%)] before:pointer-events-none">
              <h2 className="text-center font-bold mb-1.5 font-serif text-3xl sm:text-4xl text-zinc-900">Emilio & Ever</h2>
              <p className="text-center text-green-700 font-normal text-base sm:text-lg">{s.experience}</p>
            </div>
          </div>

          {/* Service promises - stacked pills */}
          <div className="flex flex-col items-center space-y-3">
            {/* Free Estimates pill */}
            <div className="relative overflow-hidden inline-flex items-center gap-2 py-2.5 px-5 bg-gradient-to-br from-gray-100 via-white to-gray-100/70 border border-gray-200/70 rounded-xl text-gray-700 text-sm sm:text-base shadow-[0_3px_6px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)] before:absolute before:inset-[1.5px] before:rounded-lg before:bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_70%)] before:opacity-90 before:-z-10 before:pointer-events-none">
              <Tag className="h-4 w-4 text-orange-500 flex-shrink-0" />
              <span className="font-semibold text-gray-800">{s.freeEstimates}</span>
              <div className="h-4 w-px bg-gray-300 mx-1"></div> {/* Vertical line separator */}
              <MapPin className="h-4 w-4 text-blue-500 flex-shrink-0 -ml-1" />
              <span className="font-medium text-gray-600">{s.rgvWide}</span>
            </div>

            {/* Best Prices pill */}
            <div className="relative overflow-hidden inline-flex items-center gap-2 py-2.5 px-5 mb-2
                            bg-gradient-to-br from-green-600 via-green-500 to-green-600 border border-green-700/50 
                            rounded-xl text-white text-sm sm:text-base font-semibold shadow-[0_3px_7px_rgba(0,0,0,0.18),inset_0_1px_1.5px_rgba(255,255,255,0.5)] 
                            before:absolute before:inset-[1.5px] before:rounded-lg before:bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_70%)] 
                            before:from-green-400/70 before:to-green-500/70 before:opacity-90 before:-z-10 before:pointer-events-none">
              <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" />
              {s.bestPricesPrefix} <p className="italic font-medium">{s.bestPricesEmphasis}</p>{s.bestPricesSuffix}
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
                      <p className="text-sm text-gray-500 font-medium leading-tight">{s.emilioLabel}</p>
                      <Tooltip delayDuration={300}>
                        <TooltipTrigger asChild>
                          <a href="tel:+19563788069" className="text-base sm:text-lg text-gray-800 font-semibold hover:text-green-600 transition-colors leading-tight mt-0.5 block">
                            (956) 378-8069
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{s.callEmilio}</p>
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
                        <p>{s.messageEmilio}</p>
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
                      <p className="text-sm text-gray-500 font-medium leading-tight">{s.everLabel}</p>
                      <Tooltip delayDuration={300}>
                        <TooltipTrigger asChild>
                          <a href="tel:+19569297845" className="text-base sm:text-lg text-gray-800 font-semibold hover:text-green-600 transition-colors leading-tight mt-0.5 block">
                            (956) 929-7845
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{s.callEver}</p>
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
                        <p>{s.messageEver}</p>
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