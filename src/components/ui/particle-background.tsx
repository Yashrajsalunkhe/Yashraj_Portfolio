import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const colors = ['#4F46E5', '#7C3AED', '#14B8A6'];
    const particleCount = 50;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random properties
      const size = Math.random() * 5 + 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      
      // Apply styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.left = `${left}%`;
      particle.style.top = `${top}%`;
      particle.style.opacity = (Math.random() * 0.5 + 0.1).toString();
      
      // Animation
      particle.style.animation = `float ${Math.random() * 20 + 10}s ease-in-out ${Math.random() * 5}s infinite`;
      
      container.appendChild(particle);
    }
    
    // Cleanup
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <motion.div 
      id="particles-container" 
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={containerRef}
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
