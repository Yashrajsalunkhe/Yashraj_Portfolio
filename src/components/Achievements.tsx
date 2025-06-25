import { motion } from "framer-motion";
import { achievements as staticAchievements, Achievement } from "../data/achievements";

interface AchievementsProps {
  achievements?: Achievement[];
}

const Achievements = ({ achievements: achievementsProp }: AchievementsProps) => {
  const achievements = achievementsProp || staticAchievements;

  const stats = [
    { number: "2+", title: "Years of Experience", subtitle: "Building innovative solutions" },
    { number: "10+", title: "Projects Completed", subtitle: "Across various domains" },
    { number: "5+", title: "Certifications", subtitle: "In emerging technologies" }
  ];

  return (
    <section id="achievements" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Achievements</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Recognitions and milestones that reflect my commitment to excellence and innovation.</p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="glass-card rounded-xl p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-full bg-${achievement.color}/20 flex items-center justify-center mb-4`}>
                  <i className={`${achievement.icon} text-${achievement.color} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-gray-300 mb-4">
                  {achievement.description}
                </p>
                <div className="flex items-center text-gray-400 text-sm">
                  <i className="far fa-calendar-alt mr-2"></i>
                  <span>{achievement.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="md:w-1/3 text-center mb-6 md:mb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <motion.div 
                    className="inline-block rounded-full p-6 bg-gradient-to-br from-primary/20 to-secondary/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-5xl font-bold text-gradient">{stat.number}</div>
                  </motion.div>
                  <h4 className="text-xl font-bold mt-4">{stat.title}</h4>
                  <p className="text-gray-400">{stat.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
