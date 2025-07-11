import { motion } from "framer-motion";
import { Project, projects as staticProjects } from "../data/projects";
import Tilt from 'react-parallax-tilt';
import { useState, useMemo } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Fuse from "../lib/fuse";

interface ProjectsProps {
  onProjectClick: (id: number) => void;
  projects?: Project[]; // Optional prop for live preview
}

const Projects = ({ onProjectClick, projects: projectsProp }: ProjectsProps) => {
  // --- FILTER & SEARCH STATE ---
  const [search, setSearch] = useState("");
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  // Use prop if provided, else static data (do not check for length)
  const projects = Array.isArray(projectsProp)
    ? projectsProp
    : staticProjects;

  // Get all unique techs for filter buttons
  const allTechs = useMemo(() => {
    const techSet = new Set<string>();
    if (Array.isArray(projects)) {
      projects.forEach((p) => {
        if (p && Array.isArray(p.technologies)) {
          p.technologies.forEach((t) => techSet.add(t));
        }
      });
    }
    return Array.from(techSet).sort();
  }, [projects]);

  // Fuse.js setup for fuzzy search
  const fuse = useMemo(() => new Fuse(projects, { keys: ["title"], threshold: 0.4 }), [projects]);
  const filteredProjects = useMemo(() => {
    let filtered = projects;
    if (activeTech) {
      filtered = filtered.filter((p) => p.technologies.includes(activeTech));
    }
    if (search.trim()) {
      filtered = fuse.search(search).map((r) => r.item);
    }
    return filtered;
  }, [search, activeTech, fuse, projects]);

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
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 bg-white/90 dark:bg-zinc-900/90 rounded-xl border border-primary/20 shadow-md">
            <Input
              type="text"
              placeholder="Search projects by title..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="md:w-1/3 w-full bg-white dark:bg-zinc-800 border border-primary/30 text-black dark:text-white placeholder:text-gray-400 focus:ring-2 focus:ring-primary"
            />
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0 items-center" style={{overflowX: 'hidden'}}>
              <Button
                variant={!activeTech ? "secondary" : "outline"}
                size="sm"
                className={`rounded-full px-4 py-1 font-semibold border ${!activeTech ? 'bg-primary text-white border-primary' : 'bg-zinc-100 dark:bg-zinc-800 text-primary border-primary/30'}`}
                onClick={() => setActiveTech(null)}
              >
                All
              </Button>
              {allTechs.length === 0 ? (
                <Button disabled variant="outline" size="sm" className="rounded-full px-4 py-1 font-semibold border bg-zinc-100 dark:bg-zinc-800 text-zinc-400 border-primary/30 cursor-not-allowed">
                  No technologies found
                </Button>
              ) : (
                <>
                  {allTechs.slice(0, 4).map((tech) => (
                    <Button
                      key={tech}
                      variant={activeTech === tech ? "secondary" : "outline"}
                      size="sm"
                      className={`rounded-full px-4 py-1 font-semibold border ${activeTech === tech ? 'bg-primary text-white border-primary' : 'bg-zinc-100 dark:bg-zinc-800 text-primary border-primary/30'}`}
                      onClick={() => setActiveTech(tech)}
                    >
                      {tech}
                    </Button>
                  ))}
                  {allTechs.length > 4 && (
                    <div className="relative">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full px-4 py-1 font-semibold border bg-zinc-100 dark:bg-zinc-800 text-primary border-primary/30 flex items-center gap-1"
                        onClick={() => setShowMore(prev => !prev)}
                        type="button"
                      >
                        More
                        <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </Button>
                      {showMore && (
                        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40" onClick={() => setShowMore(false)}>
                          <div className="bg-white dark:bg-zinc-900 border border-primary/20 rounded-xl shadow-2xl p-6 min-w-[220px] max-w-xs w-full relative" onClick={e => e.stopPropagation()}>
                            <div className="flex flex-col gap-2">
                              {allTechs.slice(4).map((tech) => (
                                <Button
                                  key={tech}
                                  variant={activeTech === tech ? "secondary" : "ghost"}
                                  size="sm"
                                  className={`rounded-full px-4 py-1 font-semibold text-left w-full ${activeTech === tech ? 'bg-primary text-white' : 'text-primary'}`}
                                  onClick={() => { setActiveTech(tech); setShowMore(false); }}
                                >
                                  {tech}
                                </Button>
                              ))}
                            </div>
                            <button className="absolute top-2 right-2 text-zinc-400 hover:text-primary text-xl" onClick={() => setShowMore(false)} aria-label="Close more filters">&times;</button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
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
                    src={project.image || "/placeholder.jpg"} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" 
                    onError={e => { (e.currentTarget as HTMLImageElement).src = "/placeholder.jpg"; }}
                  />
                  <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {Array.isArray(project.technologies) && project.technologies.length > 0 ? (
                      project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-dark-lighter text-xs font-medium px-2.5 py-1 rounded">
                          {tech}
                        </span>
                      ))
                    ) : (
                      <span className="text-zinc-400 text-xs">No technologies listed</span>
                    )}
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
