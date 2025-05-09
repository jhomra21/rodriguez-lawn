import React from 'react';
import { motion } from 'motion/react';

const BusinessCard: React.FC = () => {
  return (
    <motion.div 
      className="max-w-full w-full xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto overflow-hidden shadow-xl border border-gray-200 rounded-sm"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.1))' }}
    >
      {/* Main Card - White Background */}
      <div className="bg-gray-50 p-3 sm:p-5 pb-3 relative">
        {/* Top section with RODRIGUEZ */}
        <div className="mb-2 sm:mb-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-800 tracking-widest uppercase font-serif text-center">Rodriguez</h1>
        </div>

        {/* Specializing text */}
        <p className="text-center text-green-800 italic text-base sm:text-lg font-medium">Specializing in Tree & Palm Trimming</p>
        
        {/* Lawn Service with icons */}
        <div className="relative my-1">
          {/* Left side icons (Palm Tree and Lawn Mower) - positioned side by side */}
          <div className="absolute top-8 sm:top-10 left-2 xs:left-3 sm:left-6 md:left-8 flex items-center space-x-1 xs:space-x-2 sm:space-x-3">
            {/* Palm Tree */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-4 xs:h-7 xs:w-5 sm:h-9 sm:w-7 text-green-800 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"/>
              <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"/>
              <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"/>
              <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"/>
            </svg>

            {/* Lawn Mower */}
            <svg viewBox="0 0 446.975 446.975" className="h-4 w-6 xs:h-5 xs:w-7 sm:h-7 sm:w-9 text-green-800 fill-current">
              <g>
                <g>
                  <g>
                    <path d="M151.791,345.286c-20.016,0-36.299-16.283-36.299-36.299c0-20.016,16.283-36.299,36.299-36.299
                      c20.016,0,36.299,16.283,36.299,36.299C188.09,329.002,171.807,345.286,151.791,345.286z M151.791,282.688
                      c-14.502,0-26.299,11.798-26.299,26.299c0,14.501,11.797,26.299,26.299,26.299c14.502,0,26.299-11.798,26.299-26.299
                      C178.09,294.486,166.293,282.688,151.791,282.688z"/>
                  </g>
                  <g>
                    <path d="M400.525,354.853c-14.471,0-26.242-11.773-26.242-26.242c0-14.469,11.771-26.24,26.242-26.24
                      c14.469,0,26.24,11.772,26.24,26.24C426.766,343.081,414.994,354.853,400.525,354.853z M400.525,312.371
                      c-8.957,0-16.242,7.285-16.242,16.24c0,8.956,7.285,16.242,16.242,16.242c8.955,0,16.24-7.286,16.24-16.242
                      C416.766,319.656,409.48,312.371,400.525,312.371z"/>
                  </g>
                  <g>
                    <g>
                      <path d="M258.643,333.612c-2.762,0-5-2.238-5-5V304.38c0-2.761,2.238-5,5-5c2.762,0,5,2.239,5,5v24.232
                        C263.643,331.374,261.404,333.612,258.643,333.612z"/>
                    </g>
                    <g>
                      <path d="M285.727,333.612c-2.762,0-5-2.238-5-5V304.38c0-2.761,2.238-5,5-5c2.762,0,5,2.239,5,5v24.232
                        C290.727,331.374,288.488,333.612,285.727,333.612z"/>
                    </g>
                    <g>
                      <path d="M312.809,333.612c-2.762,0-5-2.238-5-5V304.38c0-2.761,2.238-5,5-5c2.762,0,5,2.239,5,5v24.232
                        C317.809,331.374,315.57,333.612,312.809,333.612z"/>
                    </g>
                  </g>
                  <path d="M400.525,282.162c-7.572,0-14.721,1.833-21.043,5.06l-33.613-21.267c-0.691-0.438-1.48-0.698-2.297-0.761l-50.021-3.766
                    v-22.11h13.828c2.762,0,5-2.239,5-5v-6.633c0-27.756-25.414-27.756-43.971-27.756c-18.557,0-43.973,0-43.973,27.756v6.633
                    c0,2.761,2.238,5,5,5h13.83v18.325l-49.756-3.745L37.262,73.638c-0.988-1.14-2.379-1.703-3.779-1.704v-0.021H13.51
                    C6.061,71.913,0,77.974,0,85.423s6.061,13.511,13.51,13.511h32.445L150.4,219.431L59.85,191.64
                    c-1.514-0.466-3.164-0.185-4.439,0.759c-1.275,0.943-2.027,2.435-2.027,4.021v116.269c0,2.762,2.238,5,5,5h27.922
                    c4.275,32.334,32.002,57.374,65.486,57.374c18.193,0,34.693-7.394,46.654-19.332h164.402
                    c8.443,11.697,22.182,19.332,37.678,19.332c25.611,0,46.449-20.838,46.449-46.451
                    C446.975,302.999,426.137,282.162,400.525,282.162z M13.51,88.934c-1.936,0-3.51-1.575-3.51-3.511c0-1.936,1.574-3.511,3.51-3.511
                    h17.689l6.088,7.021H13.51z M234.436,227.685c0-15.073,8.902-17.756,33.973-17.756s33.971,2.683,33.971,17.756v1.633h-67.943
                    V227.685z M283.551,239.318v21.357l-30.285-2.279v-19.078H283.551z M85.748,307.688H63.383V203.184l99.369,30.496l11.379,13.127
                    c-6.982-2.517-14.502-3.895-22.34-3.895C115.791,242.912,86.445,271.854,85.748,307.688z M151.791,365.062
                    c-30.922,0-56.076-25.155-56.076-56.075c0-30.92,25.154-56.075,56.076-56.075c30.92,0,56.074,25.155,56.074,56.075
                    C207.865,339.907,182.711,365.062,151.791,365.062z M357.355,345.73H206.678c7.061-10.514,11.188-23.154,11.188-36.743
                    c0-17.145-6.572-32.776-17.318-44.53l141.031,10.616l28.815,18.23c-9.977,8.525-16.32,21.186-16.32,35.308
                    C354.072,334.656,355.246,340.428,357.355,345.73z M400.525,365.062c-20.1,0-36.453-16.353-36.453-36.451
                    c0-20.099,16.354-36.449,36.453-36.449c20.098,0,36.449,16.35,36.449,36.449C436.975,348.709,420.623,365.062,400.525,365.062z"/>
                </g>
              </g>
            </svg>
          </div>

          {/* Tree - Right */}
          <div className="absolute top-5 right-2 xs:right-3 sm:right-6 md:right-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-4 xs:h-7 xs:w-5 sm:h-9 sm:w-7 text-green-800 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"/>
              <path d="M12 19v3"/>
            </svg>
          </div>

          {/* Lawn Service */}
          <h2 className="text-center text-green-800 text-4xl sm:text-5xl font-bold italic my-1 mx-8 xs:mx-12 sm:mx-16 md:mx-20 pt-5 sm:pt-6 pb-3 sm:pb-4">Lawn Service</h2>
        </div>
        
        {/* Emilio */}
        <h2 className="text-center text-green-800 text-5xl sm:text-6xl font-bold italic font-serif mt-3 sm:mt-4 mb-0" style={{ fontStyle: 'italic', fontFamily: 'serif' }}>Emilio</h2>
        
        {/* 24 Years Experience */}
        <p className="text-center text-green-800 font-bold text-base sm:text-lg my-1">24 Years of Experience</p>
        
        {/* Free Estimates Line */}
        <div className="text-center text-green-800 font-extrabold text-lg sm:text-xl mt-3 sm:mt-4 mb-3 sm:mb-4">
          Free Estimates • Edinburg, TX • Valley Wide
        </div>
      </div>
      
      {/* Green Bottom Section */}
      <div className="bg-green-800 text-white py-3 sm:py-4 px-3 sm:px-5">
        <div className="grid grid-cols-5 items-center">
          {/* Emilio (Spanish) */}
          <div className="col-span-2 text-left">
            <div className="font-bold text-sm sm:text-lg lg:text-xl">Emilio (Spanish)</div>
            <div className="font-bold text-base sm:text-xl lg:text-2xl">(956) 378-8069</div>
          </div>
          
          {/* WhatsApp Logo */}
          <div className="col-span-1 flex items-center justify-center">
            <div className="bg-white rounded-full p-1 sm:p-2 flex items-center justify-center">
              <svg viewBox="0 0 256 259" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" className="h-8 w-8 sm:h-10 sm:w-10">
                <path d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z" fill="#00E676"/>
                <path d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.79-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z" fill="#FFF"/>
              </svg>
            </div>
          </div>
          
          {/* Ever (English) */}
          <div className="col-span-2 text-right">
            <div className="font-bold text-sm sm:text-lg lg:text-xl">Ever (English)</div>
            <div className="font-bold text-base sm:text-xl lg:text-2xl">(956) 929-7845</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessCard; 