import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface Certificate {
  title: string;
  icon: string;
  color: string;
  description: string;
  year?: string;
  link?: string;
}

interface CertificationsProps {
  certificates?: Certificate[];
}

const defaultCertSkills = [
  "AI & ML", "GenAI", "Cloud Functions", "API Gateway", "Vision API", 
  "Pub/Sub", "Cloud Storage", "BigQuery", "Kubernetes"
];

const defaultOtherCerts: Certificate[] = [
  {
    title: "Web Development",
    icon: "fas fa-code",
    color: "primary",
    description: "Modern full-stack development with React, Node.js, and responsive design principles."
  },
  {
    title: "Machine Learning",
    icon: "fas fa-brain",
    color: "secondary",
    description: "Applied machine learning focusing on computer vision, NLP, and predictive analytics."
  },
  {
    title: "IoT Specialization",
    icon: "fas fa-microchip",
    color: "accent",
    description: "Building connected systems with microcontrollers, sensors, and cloud integration."
  },
  {
    title: "NPTEL Cloud Computing",
    icon: "fas fa-cloud",
    color: "primary",
    description: "Successfully completed the NPTEL Cloud Computing course, covering cloud models, virtualization, and cloud service management.",
    year: "2025",
    link: "https://internalapp.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS11S105630017904257937"
  }
];

// Add your badge image URLs here
const badgeImages = [
  "https://cdn.qwiklabs.com/HGh8OpsJmf3kRhKbLlDBTvJWkBtWGKItyoVQ7PPGnq4%3D", // Replace with your real badge URLs
  "https://cdn.qwiklabs.com/5Km4VEbYh%2FozGbpwTH8qut6cjJ%2F3NIynIP143rOPOUE%3D",
  "https://cdn.qwiklabs.com/kvJk32JsyICfy4g1ioCI6Z5j6H7yJirWKQWiLTzgyFc%3D",
  "https://cdn.qwiklabs.com/gKmq6yHaB6FrhdMvrN50%2BaQ%2Fn%2FhoN2MWxXg9OkOA4RA%3D"
];

const Certifications = ({ certificates }: CertificationsProps) => {
  const certSkills = defaultCertSkills;
  const otherCerts = certificates && certificates.length > 0 ? certificates : defaultOtherCerts;
  const [currentBadge, setCurrentBadge] = useState(0);
  const [fade, setFade] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const badgeCount = badgeImages.length;

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      handleNext();
    }, 2500);
    return () => clearInterval(interval);
  }, [currentBadge, autoPlay]);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentBadge((prev) => (prev - 1 + badgeCount) % badgeCount);
      setFade(true);
    }, 200);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentBadge((prev) => (prev + 1) % badgeCount);
      setFade(true);
    }, 200);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 5000);
  };

  return (
    <section id="certifications" className="py-20 bg-dark bg-pattern">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-gradient">Certifications</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Continuous learning and skill development are core to my professional growth.</p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded mx-auto mt-4"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card rounded-xl p-8 h-full">
              <div className="flex items-center mb-6">
                <i className="fas fa-certificate text-accent text-3xl mr-4"></i>
                <h3 className="text-2xl font-bold">Google Cloud Skills Boost</h3>
              </div>
              
              <h4 className="text-xl font-semibold mb-4 text-primary">AI, ML, and Cloud Computing Specialization</h4>
              
              <p className="text-gray-300 mb-6">
                Comprehensive certification covering advanced Google Cloud technologies, artificial intelligence, machine learning, and modern cloud computing practices.
              </p>
              
              <div className="glass p-4 rounded-lg mb-6">
                <h5 className="font-semibold mb-2">Skills Covered:</h5>
                <div className="flex flex-wrap gap-2">
                  {certSkills.map((skill, index) => (
                    <motion.span 
                      key={index}
                      className="bg-dark-lighter text-xs font-medium px-2.5 py-1 rounded"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Issued: December 2023</span>
                <a href="https://www.credly.com/users/yashraj-salunkhe" className="text-accent hover:text-white transition-colors duration-300 flex items-center">
                  <span>View Certificate</span>
                  <i className="fas fa-external-link-alt ml-2"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card rounded-xl overflow-hidden h-full flex items-center justify-center p-4 relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={badgeImages[currentBadge]}
                  src={badgeImages[currentBadge]}
                  alt={`Google Cloud Skills Boost Badge ${currentBadge + 1}`}
                  className="rounded-lg w-full h-auto shadow-lg absolute"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{ position: 'absolute' }}
                />
              </AnimatePresence>
              {/* Centered navigation buttons below the image, styled to match theme */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                <button
                  className="bg-gradient-to-r from-primary to-secondary text-white rounded-full p-4 shadow-lg border-2 border-primary hover:from-secondary hover:to-primary hover:border-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  onClick={handlePrev}
                  aria-label="Previous badge"
                  type="button"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  className="bg-gradient-to-r from-primary to-secondary text-white rounded-full p-4 shadow-lg border-2 border-primary hover:from-secondary hover:to-primary hover:border-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  onClick={handleNext}
                  aria-label="Next badge"
                  type="button"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherCerts.map((cert, index) => (
            <motion.div 
              key={index}
              className="glass-card rounded-xl p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`w-16 h-16 rounded-full bg-${cert.color}/20 flex items-center justify-center mb-4`}>
                <i className={`${cert.icon} text-${cert.color} text-2xl`}></i>
              </div>
              <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
              <p className="text-gray-300 text-sm">{cert.description}</p>
              {cert.year && <span className="text-gray-400 text-xs mt-2">{cert.year}</span>}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-white transition-colors duration-300 flex items-center mt-2 text-sm"
                >
                  <span>View Certificate</span>
                  <i className="fas fa-external-link-alt ml-2"></i>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
