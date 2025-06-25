import { motion } from "framer-motion";
import { timeline as staticTimeline, TimelineItem } from "../data/timeline";

interface AboutProps {
  timeline?: TimelineItem[];
  aboutMe?: string;
  imageUrl?: string;
}

const About = ({ timeline: timelineProp, aboutMe, imageUrl }: AboutProps) => {
  // Ensure timeline is always an array and fallback to staticTimeline if empty
  const timeline = Array.isArray(timelineProp) && timelineProp.length > 0 ? timelineProp : staticTimeline;

  return (
    <section id="about" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card rounded-2xl p-1 shadow-xl">
              <img 
                src={imageUrl || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"} 
                alt="Tech workspace with computers and AI visualizations" 
                className="rounded-2xl w-full h-auto" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-accent">Full-Stack Developer & AI Engineer</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {aboutMe || `I'm a passionate full-stack developer with strong problem-solving skills, currently pursuing a degree in Artificial Intelligence and Data Science at ADCET with a CGPA of 8.45. My journey in tech is driven by a desire to create innovative solutions that merge cutting-edge technologies with practical applications.`}
            </p>
            
            <motion.div 
              className="glass rounded-xl p-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h4 className="text-xl font-semibold mb-3 text-white">What I Do</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>Design and develop smart systems like facial recognition doorbells and gesture automation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>Build full-stack web applications with modern frameworks and responsive design</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>Integrate AI models and algorithms into practical, user-friendly interfaces</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                  <span>Develop IoT solutions and real-time systems for smart automation</span>
                </li>
              </ul>
            </motion.div>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-dark-lighter rounded-lg px-5 py-3 inline-flex items-center">
                <i className="fas fa-code text-primary mr-2"></i>
                <span>Full-Stack</span>
              </div>
              <div className="bg-dark-lighter rounded-lg px-5 py-3 inline-flex items-center">
                <i className="fas fa-robot text-primary mr-2"></i>
                <span>AI & ML</span>
              </div>
              <div className="bg-dark-lighter rounded-lg px-5 py-3 inline-flex items-center">
                <i className="fas fa-microchip text-primary mr-2"></i>
                <span>IoT</span>
              </div>
              <div className="bg-dark-lighter rounded-lg px-5 py-3 inline-flex items-center">
                <i className="fas fa-database text-primary mr-2"></i>
                <span>Data Science</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Timeline */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-10 text-center">My <span className="text-gradient">Journey</span></h3>
          
          <div className="timeline-container">
            {timeline.map((item, index) => (
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
