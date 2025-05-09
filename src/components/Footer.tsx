import React from 'react';
import { Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-6 md:py-8 px-4 text-center">
      <div className="container mx-auto">
        <p className="mb-3 text-lg font-semibold">
          Rodriguez Lawn Service &copy; {currentYear}
        </p>
        <p className="mb-3 text-sm md:text-base">
          Serving Edinburg, TX &amp; Valley Wide
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-2">
          <a href="tel:+19563788069" className="flex items-center gap-2 hover:text-green-300 transition-colors">
            <Phone size={16} className="text-green-400" />
            <span>Emilio (Spanish): (956) 378-8069</span>
          </a>
          <span className="hidden md:inline">|</span>
          <a href="tel:+19569297845" className="flex items-center gap-2 hover:text-green-300 transition-colors">
            <Phone size={16} className="text-green-400" />
            <span>Ever (English): (956) 929-7845</span>
          </a>
        </div>
        
        <div className="mt-4 flex justify-center">
          <a 
            href="https://wa.me/19563788069" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors"
          >
            <svg viewBox="0 0 32 32" width="20" height="20" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.008 0h-.016C7.178 0 0 7.178 0 16c0 3.498 1.128 6.74 3.046 9.374L1.05 30.85l5.644-1.824c2.518 1.66 5.52 2.624 8.754 2.624 8.814 0 15.992-7.178 15.992-16S24.822 0 16.008 0z" fill="#25D366"/>
              <path d="M25.233 22.386c-.388 1.098-1.929 2.01-3.16 2.275-0.842.18-1.942.324-5.644-1.21-4.735-1.968-7.784-6.785-8.02-7.1-.228-.314-1.914-2.54-1.914-4.842 0-2.3 1.21-3.432 1.637-3.9.388-.422 1.026-.614 1.638-.614.198 0 .378.028.539.05.47.02.705.048 1.016.79.388.94.388 2.517.52 3.01.276.992.276 1.19.18 1.362-.18.326-.304.422-.559.674-.255.252-.498.446-.753.72-.228.228-.486.478-.198.908.29.422 1.279 1.82 2.743 2.945 1.889 1.45 3.478 1.902 3.975 2.113.328.14.73.106 1.026-.152.388-.326.866-.866 1.353-1.396.344-.39.78-.54 1.24-.346.47.16 2.97 1.396 3.478 1.65.52.253.866.38 1.006.582.132.228.132 1.31-.254 2.573z" fill="#FFF"/>
            </svg>
            <span className="text-sm">Contact us on WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 