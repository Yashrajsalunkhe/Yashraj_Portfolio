import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const year = new Date().getFullYear();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading for 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className={`bg-dark-surface py-10 ${isLoading ? 'blur-sm opacity-50' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-2xl font-bold text-white">
              <motion.img 
                src="/src/img/generated-icon.png" 
                alt="generated-icon.pngLogo" 
                className="h-8 w-8 object-cover inline-block"
                initial={{ scale: 0 }}
                animate={{ scale: isLoading ? 0 : 1 }}
                transition={{ duration: 0.8 }}
              />
              <span className="ml-2">Yashraj Salunkhe</span>
            </div>
            <p className="text-gray-400 mt-2">Full-Stack Developer & AI Engineer</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a 
              href="mailto:yashrajsalunkhe6@gmail.com" 
              className="text-white hover:text-accent transition-colors duration-300" 
              aria-label="Email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a 
              href="tel:+917020070701" 
              className="text-white hover:text-accent transition-colors duration-300" 
              aria-label="Phone"
            >
              <i className="fas fa-phone text-xl"></i>
            </a>
            <a 
              href="https://linkedin.com/in/yashraj-salunkhe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-accent transition-colors duration-300" 
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="https://github.com/Yashrajsalunkhe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-accent transition-colors duration-300" 
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {year} Yashraj Salunkhe. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
