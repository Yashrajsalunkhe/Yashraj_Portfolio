import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ProjectModal from "./components/ProjectModal";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminRoute from "./pages/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import NotFound from "./pages/not-found";
import { skills as staticSkills } from "./data/skills";
import { achievements as staticAchievements } from "./data/achievements";
import { timeline as staticTimeline } from "./data/timeline";
import { projects as staticProjects } from "./data/projects";

function getLocalOrStatic(key: string, fallback: any) {
  try {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);
  } catch {}
  return fallback;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  // --- Admin-editable data state ---
  const [skills, setSkills] = useState(getLocalOrStatic('admin-skills', staticSkills));
  const [achievements, setAchievements] = useState(getLocalOrStatic('admin-achievements', staticAchievements));
  const [about, setAbout] = useState(getLocalOrStatic('admin-about', staticTimeline));
  const [roles, setRoles] = useState(getLocalOrStatic('admin-roles', ["Full-Stack Developer", "AI Engineer"]));
  const [projects, setProjects] = useState(getLocalOrStatic('admin-projects', staticProjects));

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Sync on localStorage change (e.g. admin edits in another tab)
  useEffect(() => {
    const sync = () => {
      setSkills(getLocalOrStatic('admin-skills', staticSkills));
      setAchievements(getLocalOrStatic('admin-achievements', staticAchievements));
      setAbout(getLocalOrStatic('admin-about', staticTimeline));
      setRoles(getLocalOrStatic('admin-roles', ["Full-Stack Developer", "AI Engineer"]));
      setProjects(getLocalOrStatic('admin-projects', staticProjects));
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
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
    <BrowserRouter>
      {loading && <LoadingScreen onFinish={handleLoadingFinish} />}
      <div className={loading ? "hidden" : "dark bg-dark"}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero roles={roles} />
              <About timeline={about} />
              <Projects onProjectClick={handleProjectClick} projects={projects} />
              <Skills skills={skills} />
              <Certifications />
              <Achievements achievements={achievements} />
              <Contact />
            </main>
          } />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin" element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          } />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Only show Footer if not on /admin or /admin-login */}
        {!(window.location.pathname.startsWith('/admin')) && <Footer />}
        <BackToTop />
        <ProjectModal 
          projectId={selectedProject} 
          isOpen={showModal} 
          onClose={closeModal} 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
