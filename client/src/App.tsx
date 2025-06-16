import { useEffect, useState } from "react";
import { Route, Switch } from "wouter";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ProjectModal from "@/components/ProjectModal";
import Resume from "./pages/Resume";

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = (id: number) => {
    setSelectedProject(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLoadingFinish = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <LoadingScreen onFinish={handleLoadingFinish} />}
      <div className={loading ? "hidden" : "dark bg-dark"}>
        <Navbar />
        
        <Switch>
          <Route path="/">
            <main>
              <Hero />
              <About />
              <Projects onProjectClick={handleProjectClick} />
              <Skills />
              <Certifications />
              <Achievements />
              <Contact />
            </main>
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
        
        <Footer />
        <BackToTop />
        <ProjectModal 
          projectId={selectedProject} 
          isOpen={showModal} 
          onClose={closeModal} 
        />
      </div>
    </>
  );
}

export default App;
