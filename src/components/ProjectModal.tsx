import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

interface ProjectModalProps {
  isOpen: boolean;
  projectId: number | null;
  onClose: () => void;
}

const ProjectModal = ({ isOpen, projectId, onClose }: ProjectModalProps) => {
  const project = projectId !== null ? projects.find(p => p.id === projectId) : null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={handleBackdropClick}
        >
          <motion.div 
            className="modal-backdrop absolute inset-0 bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          
          <motion.div 
            className="glass-card rounded-xl w-full max-w-4xl mx-4 p-6 relative z-10 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
              onClick={onClose}
              aria-label="Close modal"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            
            <div className="modal-content">
              <div className="mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 md:h-80 object-cover rounded-lg" 
                />
              </div>
              
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6">{project.longDescription || project.description}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {project.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-dark-lighter text-sm font-medium px-3 py-1.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.links && (
                <div className="flex flex-wrap gap-4 mt-8">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-dark-lighter hover:bg-dark-surface transition-colors duration-300 text-white px-4 py-2 rounded-lg flex items-center"
                    >
                      <i className="fab fa-github mr-2"></i> View Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg flex items-center hover:opacity-90 transition-opacity duration-300"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
