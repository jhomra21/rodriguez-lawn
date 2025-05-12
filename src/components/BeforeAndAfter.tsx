import React, { useState, useRef, useEffect } from 'react';
import { Slider } from "./ui/slider";
import { cn } from "../lib/utils";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { ArrowLeftRight } from 'lucide-react'; // Import icon for handle

interface BeforeAndAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  description?: string;
  className?: string;
}

const BeforeAndAfter: React.FC<BeforeAndAfterProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  title = "See the Transformation",
  description = "Drag the slider to see the difference our professional lawn care services can make.",
  className,
}) => {
  const [sliderValue, setSliderValue] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0]);
  };

  // Function to handle both mouse and touch events
  const updateSliderFromPointer = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, position));
    setSliderValue(clamped);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updateSliderFromPointer(e.clientX);
    e.preventDefault(); // Prevent text selection while dragging
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    updateSliderFromPointer(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    if (e.touches.length > 0) {
      updateSliderFromPointer(e.touches[0].clientX);
    }
    e.preventDefault(); // Prevent scrolling while dragging
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    if (e.touches.length > 0) {
      updateSliderFromPointer(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    // Add global event listeners for mouse and touch move/end events
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <ScrollAnimationWrapper>
      <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-green-400 to-green-900 text-transparent bg-clip-text pb-4">{title}</h2>
            <p className="text-zinc-600/90 max-w-2xl mx-auto">{description}</p>
          </div>
          
          <div 
            ref={containerRef}
            className={cn("relative w-full overflow-hidden rounded-xl shadow-xl border-2 border-white cursor-grab active:cursor-grabbing", className)}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div className="relative w-full aspect-[16/9]">
              {/* After Image (Bottom Layer) */}
              <img
                src={afterImage}
                alt={afterLabel}
                className="absolute inset-0 w-full h-full object-cover"
                draggable="false"
              />

              {/* Before Image (Top Layer, clipped) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
              >
                <img
                  src={beforeImage}
                  alt={beforeLabel}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable="false"
                />
              </div>

              {/* Labels - more prominent */}
              <div 
                className="absolute top-4 left-4 bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-semibold select-none pointer-events-none shadow-lg"
                style={{ opacity: sliderValue > 15 ? 1 : 0, transition: 'opacity 0.3s' }}
              >
                {beforeLabel}
              </div>
              <div 
                className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-lg text-sm font-semibold select-none pointer-events-none shadow-lg"
                style={{ opacity: sliderValue < 85 ? 1 : 0, transition: 'opacity 0.3s' }}
              >
                {afterLabel}
              </div>

              {/* Custom Handle Line with circle grip */}
              <div
                className="absolute top-0 bottom-0 bg-white w-1 pointer-events-none shadow-lg"
                style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }}
              >
                {/* Add handle circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                  <ArrowLeftRight className="w-3 h-3 text-green-700" />
                </div>
              </div>
            </div>

            {/* Slider component - hidden on mobile since we're implementing direct touch handling */}
            <div className="hidden md:block">
              <Slider
                defaultValue={[sliderValue]}
                value={[sliderValue]}
                max={100}
                step={0.1}
                onValueChange={handleSliderChange}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] z-10"
              />
            </div>
          </div>
          
          <div className="text-center mt-6 text-gray-600 text-sm italic">
            Actual results may vary based on your property's specific conditions and chosen services.
          </div>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
};

export default BeforeAndAfter; 