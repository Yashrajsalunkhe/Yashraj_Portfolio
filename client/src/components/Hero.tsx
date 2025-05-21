import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "./ui/particle-background";

const Hero = () => {
  const [jobTitle, setJobTitle] = useState("AI Engineer");
  const jobTitles = ["AI Engineer", "Full-Stack Developer", "Innovator"];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setJobTitle("");
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % jobTitles.length);
        setJobTitle(jobTitles[(titleIndex + 1) % jobTitles.length]);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [titleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-pattern relative overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-accent mb-2 tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              HELLO THERE, I'M
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="block">Yashraj</span>
              <span className="text-gradient">Salunkhe</span>
            </motion.h1>
            
            <motion.div 
              className="h-8 md:h-12 mb-6 text-xl md:text-2xl font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="typing-text">
                <span className="text-white font-light">{jobTitle}</span>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Building innovative solutions at the intersection of AI and web development. 
              Transforming ideas into impactful tech products.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <a 
                href="/resume.pdf" 
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
              <a 
                href="#projects" 
                className="bg-transparent border border-white text-white hover:bg-white hover:text-dark px-8 py-3 rounded-full transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                onClick={(e) => {
                  e.preventDefault();
                  const projects = document.querySelector("#projects");
                  if (projects) {
                    window.scrollTo({
                      top: projects.getBoundingClientRect().top + window.scrollY - 80,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Explore Projects
              </a>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex justify-center md:justify-start space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <a 
                href="mailto:yashrajsalunkhe6@gmail.com" 
                className="text-white hover:text-accent transition-colors duration-300" 
                aria-label="Email"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
              <a 
                href="tel:+917020070701" 
                className="text-white hover:text-accent transition-colors duration-300" 
                aria-label="Phone"
              >
                <i className="fas fa-phone text-2xl"></i>
              </a>
              <a 
                href="https://linkedin.com/in/yashraj-salunkhe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-accent transition-colors duration-300" 
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a 
                href="https://github.com/Yashrajsalunkhe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-accent transition-colors duration-300" 
                aria-label="GitHub"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-full blur-2xl opacity-30"></div>
              <div className="glass-card rounded-full w-full h-full flex items-center justify-center overflow-hidden relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-20"></div>
                <div className="text-8xl font-bold text-gradient">YS</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
