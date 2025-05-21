import { motion } from "framer-motion";
import { projects } from "@/data/projects";

interface ProjectsProps {
  onProjectClick: (id: number) => void;
}

const Projects = ({ onProjectClick }: ProjectsProps) => {
  return (
    <section id="projects" className="py-20 bg-dark bg-pattern">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Blending innovation with practical applications to create impactful solutions.</p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="glass-card rounded-xl overflow-hidden h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-dark-lighter text-xs font-medium px-2.5 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <button 
                    className="text-accent hover:text-white transition-colors duration-300 flex items-center"
                    onClick={() => onProjectClick(project.id)}
                  >
                    <span>View Details</span>
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
