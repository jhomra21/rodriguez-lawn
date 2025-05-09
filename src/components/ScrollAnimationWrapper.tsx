import React from 'react';
import { motion } from 'motion/react';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  delay?: number;
  distance?: number;
  duration?: number;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({ 
  children, 
  delay = 0, 
  distance = 20,
  duration = 0.5 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper; 