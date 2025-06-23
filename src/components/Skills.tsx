import { motion } from "framer-motion";
import { skills } from "../data/skills";
import SkillBar from "./ui/skill-bar";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">A diverse toolkit that enables me to build comprehensive solutions from concept to deployment.</p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div 
              key={category}
              className="glass-card rounded-xl p-6 h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                {category === "Languages" && (
                  <i className="fas fa-code text-accent text-2xl mr-3"></i>
                )}
                {category === "Frameworks" && (
                  <i className="fas fa-layer-group text-accent text-2xl mr-3"></i>
                )}
                {category === "DevOps" && (
                  <i className="fas fa-server text-accent text-2xl mr-3"></i>
                )}
                {category === "Others" && (
                  <i className="fas fa-tools text-accent text-2xl mr-3"></i>
                )}
                <h3 className="text-xl font-bold">{category}</h3>
              </div>
              
              <div className="space-y-4">
                {skillList.map((skill, index) => (
                  <SkillBar 
                    key={index}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Database Skills */}
        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-6 text-center">Databases</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "MongoDB", icon: "fas fa-database" },
              { name: "SQL", icon: "fas fa-table" },
              { name: "Firebase", icon: "fas fa-fire" },
              { name: "Redis", icon: "fas fa-network-wired" }
            ].map((db, index) => (
              <motion.div 
                key={index}
                className="skill-icon-container text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="glass-card w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-2 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <i className={`${db.icon} text-3xl text-primary`}></i>
                </div>
                <span>{db.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
