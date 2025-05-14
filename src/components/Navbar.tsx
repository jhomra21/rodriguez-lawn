import React, { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={cn(
        "w-full py-4 px-4 backdrop-blur-md sticky top-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/80 dark:bg-zinc-900/90 shadow-sm border-b border-zinc-200 dark:border-zinc-800"
          : "bg-white/80 dark:bg-zinc-900/80"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#top" 
          className="text-xl font-bold text-green-800 transition-colors duration-200 flex items-center group"
        >
          <svg
            viewBox="0 0 446.975 446.975"
            className="h-7 w-8 mr-2 mb-1.5 fill-green-700 group-hover:fill-green-900 group-hover:h-8 group-hover:w-9 drop-shadow-md group-hover:drop-shadow-lg transition-all duration-200"
          >
            <g>
              <g>
                <g>
                  <path d="M151.791,345.286c-20.016,0-36.299-16.283-36.299-36.299c0-20.016,16.283-36.299,36.299-36.299 c20.016,0,36.299,16.283,36.299,36.299C188.09,329.002,171.807,345.286,151.791,345.286z M151.791,282.688 c-14.502,0-26.299,11.798-26.299,26.299c0,14.501,11.797,26.299,26.299,26.299c14.502,0,26.299-11.798,26.299-26.299 C178.09,294.486,166.293,282.688,151.791,282.688z"/>
                </g>
                <g>
                  <path d="M400.525,354.853c-14.471,0-26.242-11.773-26.242-26.242c0-14.469,11.771-26.24,26.242-26.24 c14.469,0,26.24,11.772,26.24,26.24C426.766,343.081,414.994,354.853,400.525,354.853z M400.525,312.371 c-8.957,0-16.242,7.285-16.242,16.24c0,8.956,7.285,16.242,16.242,16.242c8.955,0,16.24-7.286,16.24-16.242 C416.766,319.656,409.48,312.371,400.525,312.371z"/>
                </g>
                <g>
                  <g>
                    <path d="M258.643,333.612c-2.762,0-5-2.238-5-5V304.38c0-2.761,2.238-5,5-5c2.762,0,5,2.239,5,5v24.232 C263.643,331.374,261.404,333.612,258.643,333.612z"/>
                  </g>
                  <g>
                    <path d="M285.727,333.612c-2.762,0-5-2.238-5-5V304.38c0-2.761,2.238-5,5-5c2.762,0,5,2.239,5,5v24.232 C290.727,331.374,288.488,333.612,285.727,333.612z"/>
                  </g>
                  <g>
                    <path d="M312.809,333.612c-2.762,0-5-2.238-5-5V304.38c0-2.761,2.238-5,5-5c2.762,0,5,2.239,5,5v24.232 C317.809,331.374,315.57,333.612,312.809,333.612z"/>
                  </g>
                </g>
                <path d="M400.525,282.162c-7.572,0-14.721,1.833-21.043,5.06l-33.613-21.267c-0.691-0.438-1.48-0.698-2.297-0.761l-50.021-3.766 v-22.11h13.828c2.762,0,5-2.239,5-5v-6.633c0-27.756-25.414-27.756-43.971-27.756c-18.557,0-43.973,0-43.973,27.756v6.633 c0,2.761,2.238,5,5,5h13.83v18.325l-49.756-3.745L37.262,73.638c-0.988-1.14-2.379-1.703-3.779-1.704v-0.021H13.51 C6.061,71.913,0,77.974,0,85.423s6.061,13.511,13.51,13.511h32.445L150.4,219.431L59.85,191.64 c-1.514-0.466-3.164-0.185-4.439,0.759c-1.275,0.943-2.027,2.435-2.027,4.021v116.269c0,2.762,2.238,5,5,5h27.922 c4.275,32.334,32.002,57.374,65.486,57.374c18.193,0,34.693-7.394,46.654-19.332h164.402 c8.443,11.697,22.182,19.332,37.678,19.332c25.611,0,46.449-20.838,46.449-46.451 C446.975,302.999,426.137,282.162,400.525,282.162z M13.51,88.934c-1.936,0-3.51-1.575-3.51-3.511c0-1.936,1.574-3.511,3.51-3.511 h17.689l6.088,7.021H13.51z M234.436,227.685c0-15.073,8.902-17.756,33.973-17.756s33.971,2.683,33.971,17.756v1.633h-67.943 V227.685z M283.551,239.318v21.357l-30.285-2.279v-19.078H283.551z M85.748,307.688H63.383V203.184l99.369,30.496l11.379,13.127 c-6.982-2.517-14.502-3.895-22.34-3.895C115.791,242.912,86.445,271.854,85.748,307.688z M151.791,365.062 c-30.922,0-56.076-25.155-56.076-56.075c0-30.92,25.154-56.075,56.076-56.075c30.92,0,56.074,25.155,56.074,56.075 C207.865,339.907,182.711,365.062,151.791,365.062z M357.355,345.73H206.678c7.061-10.514,11.188-23.154,11.188-36.743 c0-17.145-6.572-32.776-17.318-44.53l141.031,10.616l28.815,18.23c-9.977,8.525-16.32,21.186-16.32,35.308 C354.072,334.656,355.246,340.428,357.355,345.73z M400.525,365.062c-20.1,0-36.453-16.353-36.453-36.451 c0-20.099,16.354-36.449,36.453-36.449c20.098,0,36.449,16.35,36.449,36.449C436.975,348.709,420.623,365.062,400.525,365.062z"/>
              </g>
            </g>
          </svg>
          <span className="font-serif tracking-wide drop-shadow-md group-hover:drop-shadow-lg transition-all duration-200">Rodriguez</span>
          <span className="hidden sm:inline font-serif tracking-wide ml-1.5 drop-shadow-md group-hover:drop-shadow-lg transition-all duration-200">Lawn Service</span>
        </a>

        {/* Mobile Menu Toggle */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 transition-all duration-200">
          <a 
            href="#services" 
            className="text-sm font-medium text-zinc-700 hover:shadow-sm hover:text-green-700 hover:bg-green-50 hover:border-green-300/80 border border-transparent rounded-md px-4 py-2 transition-colors"
          >
            Services
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-zinc-700 hover:shadow-sm hover:text-green-700 hover:bg-green-50 hover:border-green-300/80 border border-transparent rounded-md px-4 py-2 transition-colors"
          >
            Contact
          </a>
          <Button 
            asChild 
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
            <a href="#contact" className="z-10">
              Get a Free Estimate
            </a>
          </Button>
        </nav>
      </div>

      {/* Mobile Menu - Using CSS transitions for animation */}
      <div 
        className={cn(
          "md:hidden absolute inset-x-0 bg-white/95 dark:bg-zinc-900/95 shadow-lg border-b border-zinc-200 dark:border-zinc-800 backdrop-blur-md overflow-hidden transition-all duration-200 ease-in",
          mobileMenuOpen 
            ? "max-h-96 opacity-100 translate-y-0" 
            : "max-h-0 opacity-0 -translate-y-2"
        )}
      >
        <nav className="flex flex-col space-y-3 py-4 px-6">
          <a 
            href="#services" 
            className="text-sm font-medium text-zinc-700 hover:text-green-700 py-2 px-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-zinc-700 hover:text-green-700 py-2 px-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <div className="pt-2">
            <Button 
              asChild 
              className={cn(
                "w-full relative bg-gradient-to-tr from-green-800 via-green-600 to-green-800 text-white hover:scale-103",
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
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="z-10"
              >
                Get a Free Estimate
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar; 