import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { TreeDeciduous, Home, Sprout, GitBranchPlus } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import bgTrimming from '@/assets/tree-removal01.jpeg';
import bgTrunk from '@/assets/tree-trunk01.jpeg';
import bgPalm from '@/assets/after06.jpeg';
import bgHealth from '@/assets/after01.jpg';

type Locale = 'en' | 'es';

interface Service {
  Icon: LucideIcon;
  title: string;
  description: string;
  bgImage: ImageMetadata | string;
}

const servicesEn: Service[] = [
  {
    Icon: TreeDeciduous,
    title: 'Tree & Palm Trimming',
    description: 'Expert trimming for all types of trees and palms to enhance health, safety, and aesthetics.',
    bgImage: bgTrimming,
  },
  {
    Icon: GitBranchPlus,
    title: 'Trunk Maintenance',
    description: 'Professional trunk cleaning, disease prevention, and structural support for healthy and stable trees.',
    bgImage: bgTrunk,
  },
  {
    Icon: Home,
    title: 'Palm Specialization',
    description: 'Specialized care for all palm varieties including frond trimming, trunk cleaning, and health treatments.',
    bgImage: bgPalm,
  },
  {
    Icon: Sprout,
    title: 'Tree Health Services',
    description: 'Comprehensive tree health assessments, disease treatment, and preventative care for long-term vitality.',
    bgImage: bgHealth,
  },
];

const servicesEs: Service[] = [
  {
    Icon: TreeDeciduous,
    title: 'Poda de Árboles y Palmeras',
    description: 'Poda experta de todo tipo de árboles y palmeras para mejorar su salud, seguridad y estética.',
    bgImage: bgTrimming,
  },
  {
    Icon: GitBranchPlus,
    title: 'Mantenimiento de Troncos',
    description: 'Limpieza de troncos, prevención de enfermedades y soporte estructural para árboles sanos y estables.',
    bgImage: bgTrunk,
  },
  {
    Icon: Home,
    title: 'Especialistas en Palmas',
    description: 'Cuidado especializado para palmas: corte de hojas, limpieza de troncos y tratamientos de salud.',
    bgImage: bgPalm,
  },
  {
    Icon: Sprout,
    title: 'Cuidado y Salud de Árboles',
    description: 'Evaluaciones de salud, tratamiento de enfermedades y cuidado preventivo para una vitalidad duradera.',
    bgImage: bgHealth,
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

interface Props { locale?: Locale }

const ServicesOverview: React.FC<Props> = ({ locale = 'en' }) => {
  const services = locale === 'es' ? servicesEs : servicesEn;
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
            <Card className="group text-center flex flex-col h-full border-t border-t-zinc-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 relative shadow-sm">
              {/* Background Image with Low-Compute Fade Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={typeof service.bgImage === 'string' ? service.bgImage : service.bgImage.src} 
                  alt="" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/90 group-hover:bg-white/80 transition-colors duration-500"></div>
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-center pt-8 pb-5">
                  <div className="h-14 w-14 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center shadow-sm group-hover:shadow transition-all duration-200 ring-1 ring-zinc-200/50">
                    <service.Icon className="h-7 w-7 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
                  </div>
                </div>
                
                <CardHeader className="pt-0 pb-2 px-6">
                  <CardTitle className="text-lg font-semibold text-zinc-900 group-hover:text-green-800 transition-colors duration-300 drop-shadow-sm">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow pb-8 px-6">
                  <p className="text-zinc-700 font-medium text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesOverview; 