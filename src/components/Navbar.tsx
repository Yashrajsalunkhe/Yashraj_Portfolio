import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Achievements", href: "#achievements" },
    { name: "Blog", href: "/blog", isRoute: true },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`glass fixed w-full z-40 top-0 ${scrolled ? "py-2" : "py-3"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="#home" className="text-xl font-bold text-white">
            <img 
              src="/src/img/generated-icon.png" 
              alt="Logo" 
              className="h-8 w-8 object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              item.isRoute ? (
                <a
                  key={index}
                  href={item.href}
                  className="text-white hover:text-primary transition-colors duration-300 relative animated-border"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = item.href;
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="text-white hover:text-primary transition-colors duration-300 relative animated-border"
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== "/") {
                      window.location.href = "/" + item.href;
                    } else {
                      const element = document.querySelector(item.href);
                      if (element) {
                        const offsetTop = element.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({
                          top: offsetTop - 80, // Adjust for fixed header height
                          behavior: "smooth",
                        });
                      }
                    }
                  }}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="/resume"
            className="hidden md:block bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-300 shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/resume";
            }}
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                item.isRoute ? (
                  <a
                    key={index}
                    href={item.href}
                    className="text-white hover:text-primary transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      closeMenu();
                      window.location.href = item.href;
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    className="text-white hover:text-primary transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      closeMenu();
                      const element = document.querySelector(item.href);
                      if (element) {
                        window.scrollTo({
                          top: element.getBoundingClientRect().top + window.scrollY - 80,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a
                href="/resume"
                className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-300 shadow-lg text-center"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/resume";
                }}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
