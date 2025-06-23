import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ name, percentage, delay = 0 }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1, delay: delay },
      });
      setWidth(percentage);
    }
  }, [controls, inView, percentage, delay]);

  return (
    <div className="skill-item" ref={ref}>
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <motion.span 
          className="text-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: delay + 0.6 }}
        >
          {width}%
        </motion.span>
      </div>
      <div className="w-full bg-dark-lighter rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={controls}
        ></motion.div>
      </div>
    </div>
  );
};

export default SkillBar;
