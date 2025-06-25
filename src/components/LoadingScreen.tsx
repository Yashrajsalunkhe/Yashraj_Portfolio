import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 2000); // Show loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
      <motion.img
        src="/generated-icon.png"
        alt="Logo"
        className="h-20 w-20"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default LoadingScreen;
