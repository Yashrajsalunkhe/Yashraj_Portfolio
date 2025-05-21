import { motion } from "framer-motion";

export interface TimelineItem {
  period: string;
  title: string;
  subtitle: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="timeline-container">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <div className="glass-card rounded-xl p-6">
            <span className="text-accent font-semibold">{item.period}</span>
            <h4 className="text-xl font-bold mt-1">{item.title}</h4>
            <p className="text-gray-400 mt-2">{item.subtitle}</p>
            <p className="mt-2">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
