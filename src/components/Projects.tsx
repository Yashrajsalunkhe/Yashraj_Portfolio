import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Tilt from 'react-parallax-tilt';
import { useState, useMemo } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Fuse from "../lib/fuse";

interface ProjectsProps {
  onProjectClick: (id: number) => void;
}

const Projects = ({ onProjectClick }: ProjectsProps) => {
  // --- FILTER & SEARCH STATE ---
  const [search, setSearch] = useState("");
  const [activeTech, setActiveTech] = useState<string | null>(null);

  // Get all unique techs for filter buttons
  const allTechs = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((t) => techSet.add(t)));
    return Array.from(techSet).sort();
  }, []);

  // Fuse.js setup for fuzzy search
  const fuse = useMemo(() => new Fuse(projects, { keys: ["title"], threshold: 0.4 }), []);
  const filteredProjects = useMemo(() => {
    let filtered = projects;
    if (activeTech) {
      filtered = filtered.filter((p) => p.technologies.includes(activeTech));
    }
    if (search.trim()) {
      filtered = fuse.search(search).map((r) => r.item);
    }
    return filtered;
  }, [search, activeTech, fuse]);

  return (
    <section id="projects" className="py-20 bg-dark bg-pattern">
      <div className="container mx-auto px-4">
        {/* --- HEADER --- */}
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

        {/* --- SEARCH BAR & FILTER BUTTONS --- */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
          <Input
            type="text"
            placeholder="Search projects by title..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="md:w-1/3 w-full bg-dark-lighter text-black placeholder:text-gray-400"
          />
          <div className="flex flex-wrap gap-2 overflow-x-auto">
            <Button
              variant={!activeTech ? "secondary" : "outline"}
              size="sm"
              onClick={() => setActiveTech(null)}
            >
              All
            </Button>
            {allTechs.map((tech) => (
              <Button
                key={tech}
                variant={activeTech === tech ? "secondary" : "outline"}
                size="sm"
                onClick={() => setActiveTech(tech)}
              >
                {tech}
              </Button>
            ))}
          </div>
        </div>

        {/* --- PROJECTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center text-gray-400 py-10 text-lg">
              No projects found.
            </div>
          )}
          {filteredProjects.map((project, index) => (
            <Tilt
              key={project.id}
              glareEnable={true}
              glareMaxOpacity={0.15}
              scale={1.04}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={1200}
              className="h-full"
            >
              <motion.div 
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
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
