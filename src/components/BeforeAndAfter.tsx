import React, { useState } from 'react';
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

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value[0]);
  };

  return (
    <ScrollAnimationWrapper>
      <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{title}</h2>
            <p className="text-green-700/80 max-w-2xl mx-auto">{description}</p>
          </div>
          
          <div className={cn("relative w-full overflow-hidden rounded-xl shadow-xl border-2 border-white", className)}>
            <div className="relative w-full aspect-[16/9]">
              {/* After Image (Bottom Layer) */}
              <img
                src={afterImage}
                alt={afterLabel}
                className="absolute inset-0 w-full h-full object-cover"
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
              
              </div>
            </div>

            <Slider
              defaultValue={[sliderValue]}
              max={100}
              step={0.1}
              onValueChange={handleSliderChange}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] z-10"
            />
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