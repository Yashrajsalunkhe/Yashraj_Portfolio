import React, { useState } from "react";
import Navbar from "../components/Navbar";
import VisitorWidget from "../components/admin/VisitorWidget";
import GeoLocationWidget from "../components/admin/GeoLocationWidget";
import DevicePieChart from "../components/admin/DevicePieChart";
import SessionDurationWidget from "../components/admin/ResumeDownloadWidget";
import ResumeDownloadWidget from "../components/admin/ResumeDownloadWidget";
import ErrorLogWidget from "../components/admin/ErrorLogWidget";
import ContactTable from "../components/admin/ContactTable";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { skills as staticSkills } from "../data/skills";
import { achievements as staticAchievements } from "../data/achievements";
import { timeline as staticTimeline } from "../data/timeline";
import { projects as staticProjects } from "../data/projects";
import AdminAnalyticsSection from "../components/admin/AdminAnalyticsSection";
import AdminProjectsSection from "../components/admin/AdminProjectsSection";
import AdminSkillsSection from "../components/admin/AdminSkillsSection";
import AdminAchievementsSection from "../components/admin/AdminAchievementsSection";
import AdminAboutSection from "../components/admin/AdminAboutSection";
import AdminRolesSection from "../components/admin/AdminRolesSection";
import AdminBlogSection from "../components/admin/AdminBlogSection";
import AdminSectionWrapper from "../components/admin/AdminSectionWrapper";

const AdminDashboard: React.FC = () => {
  // --- Skills State ---
  const SKILLS_KEY = "admin-skills";
  const getSkills = () => {
    const data = localStorage.getItem(SKILLS_KEY);
    return data ? JSON.parse(data) : staticSkills;
  };
  const setSkills = (skills: any) => {
    localStorage.setItem(SKILLS_KEY, JSON.stringify(skills));
    setSkillsState(skills);
  };
  const [skills, setSkillsState] = useState(getSkills());
  const [skillsDraft, setSkillsDraft] = useState(skills);

  // --- Achievements State ---
  const ACHIEVEMENTS_KEY = "admin-achievements";
  const getAchievements = () => {
    const data = localStorage.getItem(ACHIEVEMENTS_KEY);
    return data ? JSON.parse(data) : staticAchievements;
  };
  const setAchievements = (achievements: any) => {
    localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(achievements));
    setAchievementsState(achievements);
  };
  const [achievements, setAchievementsState] = useState(getAchievements());
  const [achievementsDraft, setAchievementsDraft] = useState(achievements);

  // --- About State ---
  const ABOUT_KEY = "admin-about";
  const getAbout = () => {
    const data = localStorage.getItem(ABOUT_KEY);
    // If no admin data, use staticTimeline as timeline array and a default aboutMe
    if (!data) return {
      timeline: staticTimeline.map(item => ({
        period: item.period || '',
        title: item.title || '',
        subtitle: item.subtitle || '',
        description: item.description || ''
      })),
      aboutMe: `I'm a passionate full-stack developer with strong problem-solving skills, currently pursuing a degree in Artificial Intelligence and Data Science at ADCET with a CGPA of 8.45. My journey in tech is driven by a desire to create innovative solutions that merge cutting-edge technologies with practical applications.`,
      imageUrl: ''
    };
    try {
      const parsed = JSON.parse(data);
      // If timeline is not an array or is empty, use staticTimeline
      if (!Array.isArray(parsed.timeline) || parsed.timeline.length === 0) {
        parsed.timeline = staticTimeline.map(item => ({
          period: item.period || '',
          title: item.title || '',
          subtitle: item.subtitle || '',
          description: item.description || ''
        }));
      } else {
        // Ensure all timeline items have all required fields
        parsed.timeline = parsed.timeline.map((item: any) => ({
          period: item.period || '',
          title: item.title || '',
          subtitle: item.subtitle || '',
          description: item.description || ''
        }));
      }
      // If aboutMe is missing or empty, set the default
      if (!parsed.aboutMe || parsed.aboutMe.trim() === "") {
        parsed.aboutMe = `I'm a passionate full-stack developer with strong problem-solving skills, currently pursuing a degree in Artificial Intelligence and Data Science at ADCET with a CGPA of 8.45. My journey in tech is driven by a desire to create innovative solutions that merge cutting-edge technologies with practical applications.`;
      }
      return parsed;
    } catch {
      return {
        timeline: staticTimeline.map(item => ({
          period: item.period || '',
          title: item.title || '',
          subtitle: item.subtitle || '',
          description: item.description || ''
        })),
        aboutMe: `I'm a passionate full-stack developer with strong problem-solving skills, currently pursuing a degree in Artificial Intelligence and Data Science at ADCET with a CGPA of 8.45. My journey in tech is driven by a desire to create innovative solutions that merge cutting-edge technologies with practical applications.`,
        imageUrl: ''
      };
    }
  };
  const setAbout = (about: any) => {
    localStorage.setItem(ABOUT_KEY, JSON.stringify(about));
    setAboutState(about);
  };
  const [about, setAboutState] = useState(getAbout());
  const [aboutDraft, setAboutDraft] = useState(about);

  // --- Roles State ---
  const ROLES_KEY = "admin-roles";
  const getRoles = () => {
    const data = localStorage.getItem(ROLES_KEY);
    return data ? JSON.parse(data) : ["Developer", "Designer", "Engineer"];
  };
  const setRoles = (roles: any) => {
    localStorage.setItem(ROLES_KEY, JSON.stringify(roles));
    setRolesState(roles);
  };
  const [roles, setRolesState] = useState(getRoles());
  const [rolesDraft, setRolesDraft] = useState(roles);

  // --- Projects State ---
  const PROJECTS_KEY = "admin-projects";
  const getProjects = () => {
    const data = localStorage.getItem(PROJECTS_KEY);
    return data ? JSON.parse(data) : staticProjects;
  };
  const setProjects = (projects: any) => {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
    setProjectsState(projects);
  };
  const [projects, setProjectsState] = useState(getProjects());
  const [projectsDraft, setProjectsDraft] = useState(projects);
  const [projectPreviewIdx, setProjectPreviewIdx] = useState<number | null>(null);
  const [projectPreviewOnly, setProjectPreviewOnly] = useState(false);

  // --- Blog State ---
  const BLOG_KEY = "admin-blog";
  const getBlog = () => {
    const data = localStorage.getItem(BLOG_KEY);
    return data ? JSON.parse(data) : [];
  };
  const setBlog = (blog: any) => {
    localStorage.setItem(BLOG_KEY, JSON.stringify(blog));
    setBlogState(blog);
  };
  const [blog, setBlogState] = useState(getBlog());
  const [blogDraft, setBlogDraft] = useState(blog);

  // --- Sync drafts when main state changes ---
  React.useEffect(() => { setSkillsDraft(skills); }, [skills]);
  React.useEffect(() => { setAchievementsDraft(achievements); }, [achievements]);
  React.useEffect(() => { setAboutDraft(about); }, [about]);
  React.useEffect(() => { setRolesDraft(roles); }, [roles]);
  React.useEffect(() => { setProjectsDraft(projects); }, [projects]);
  React.useEffect(() => { setBlogDraft(blog); }, [blog]);

  // --- Sync localStorage on change ---
  React.useEffect(() => { setSkills(skills); }, [skills]);
  React.useEffect(() => { setAchievements(achievements); }, [achievements]);
  React.useEffect(() => { setAbout(about); }, [about]);
  React.useEffect(() => { setRoles(roles); }, [roles]);
  React.useEffect(() => { setProjects(projects); }, [projects]);
  React.useEffect(() => { setBlog(blog); }, [blog]);

  // --- Preview State ---
  const [aboutPreviewIdx, setAboutPreviewIdx] = useState<number | null>(null);
  const [skillsPreview, setSkillsPreview] = useState<{category: string, idx: number} | null>(null);
  const [achievementsPreviewIdx, setAchievementsPreviewIdx] = useState<number | null>(null);
  const [skillsPreviewOnly, setSkillsPreviewOnly] = useState(false);
  const [achievementsPreviewOnly, setAchievementsPreviewOnly] = useState(false);
  const [aboutPreviewOnly, setAboutPreviewOnly] = useState(false);

  // --- Popup state for save feedback ---
  const [showSavePopup, setShowSavePopup] = useState(false);

  // --- Helper to show popup on save ---
  const handleSaveWithPopup = (saveFn: () => void) => {
    saveFn();
    setShowSavePopup(true);
    setTimeout(() => setShowSavePopup(false), 1800);
  };

  // --- Section Navigation ---
  const SECTIONS = [
    { key: "analytics", label: "Analytics" },
    { key: "projects", label: "Projects" },
    { key: "skills", label: "Skills" },
    { key: "achievements", label: "Achievements" },
    { key: "about", label: "About" },
    { key: "roles", label: "Roles" },
    { key: "blog", label: "Blog" },
  ];
  const [section, setSection] = useState(SECTIONS[0].key);

  // --- Save Handlers ---
  const setSkillsStateAndSync = (draft: any) => {
    setSkillsState(draft);
    setSkills(draft);
  };
  const setAchievementsStateAndSync = (draft: any) => {
    setAchievementsState(draft);
    setAchievements(draft);
  };
  const setAboutStateAndSync = (draft: any) => {
    setAboutState(draft);
    setAbout(draft);
  };
  const setRolesStateAndSync = (draft: any) => {
    setRolesState(draft);
    setRoles(draft);
  };
  const setProjectsStateAndSync = (draft: any) => {
    setProjectsState(draft);
    setProjects(draft);
  };
  const setBlogStateAndSync = (draft: any) => {
    setBlogState(draft);
    setBlog(draft);
  };

  // --- Global Preview State ---
  const [globalPreviewOpen, setGlobalPreviewOpen] = useState(false);

  // Helper to render preview content for the current section
  const renderSectionPreview = () => {
    switch (section) {
      case "skills":
        return <Skills skills={skillsDraft} />;
      case "achievements":
        return <Achievements achievements={achievementsDraft} />;
      case "about":
        return <About timeline={aboutDraft} aboutMe={aboutDraft.aboutMe} imageUrl={aboutDraft.imageUrl} />;
      case "projects":
        return <Projects projects={projectsDraft} onProjectClick={() => {}} />;
      case "roles":
        return <Hero roles={rolesDraft} />;
      case "blog":
        // Use the same layout as Blog.tsx, but with blogDraft
        return (
          <div className="min-h-[300px] flex flex-col items-center w-full">
            <section className="max-w-2xl w-full py-6 px-2">
              <h1 className="text-3xl font-bold mb-2 text-center">Blog</h1>
              <p className="text-base text-gray-600 mb-6 text-center">
                Live preview of your blog posts. This preview does not render markdown, but shows the current draft content.
              </p>
              <ul className="space-y-6">
                {blogDraft.length === 0 && (
                  <li className="text-zinc-400 text-center">No blog posts to preview.</li>
                )}
                {blogDraft.map((post: any, idx: number) => (
                  <li key={idx} className="border-b pb-4">
                    <div className="text-2xl font-semibold text-primary mb-1">{post.title}</div>
                    <div className="text-gray-500 text-sm mb-1">{post.date}</div>
                    {post.imageUrl && <img src={post.imageUrl} alt="Blog" className="w-full max-w-xs mb-2 rounded" />}
                    <div className="text-gray-700 whitespace-pre-line">{post.content}</div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        );
      default:
        return <div className="text-zinc-400 text-center">No preview available for this section.</div>;
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 via-white to-gray-200 dark:from-[#18181b] dark:via-[#23232a] dark:to-[#18181b]">
      {/* Sidebar */}
      <aside className="w-56 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col py-8 px-4 gap-2 fixed left-0 top-0 h-full z-40">
        <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Admin</h2>
        {SECTIONS.map((s) => (
          <button
            key={s.key}
            className={`text-left px-4 py-2 rounded-lg font-medium transition-colors ${section === s.key ? "bg-primary text-white" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"}`}
            onClick={() => setSection(s.key)}
          >
            {s.label}
          </button>
        ))}
        <button
          className="mt-auto bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition"
          onClick={() => {
            localStorage.removeItem("admin-auth");
            window.location.href = "/admin-login";
          }}
        >
          Logout
        </button>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-2 md:p-6 min-h-screen" style={{ marginLeft: '14rem' }}>
        <AdminSectionWrapper>
          {/* Global Preview Modal */}
          {globalPreviewOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-primary/20 p-8 max-w-4xl w-full relative max-h-[90vh] overflow-y-auto">
                <button
                  className="absolute top-4 right-4 px-4 py-2 rounded bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold shadow-lg"
                  onClick={() => setGlobalPreviewOpen(false)}
                >Close Preview</button>
                {renderSectionPreview()}
              </div>
            </div>
          )}
          {/* Save Success Popup */}
          {showSavePopup && (
            <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
              <div className="bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg font-semibold flex items-center gap-2 animate-fade-in">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Changes saved!
              </div>
            </div>
          )}
          {/* Section Content */}
          {section === "analytics" && (
            <AdminAnalyticsSection />
          )}
          {section === "projects" && (
            <AdminProjectsSection
              projectsDraft={projectsDraft}
              setProjectsDraft={setProjectsDraft}
              setGlobalPreviewOpen={setGlobalPreviewOpen}
              handleSaveWithPopup={handleSaveWithPopup}
              setProjectsState={setProjectsState}
              projects={projects}
            />
          )}
          {section === "skills" && (
            <AdminSkillsSection
              skillsDraft={skillsDraft}
              setSkillsDraft={setSkillsDraft}
              setGlobalPreviewOpen={setGlobalPreviewOpen}
              handleSaveWithPopup={handleSaveWithPopup}
              setSkillsState={setSkillsState}
              skills={skills}
            />
          )}
          {section === "achievements" && (
            <AdminAchievementsSection
              achievementsDraft={achievementsDraft}
              setAchievementsDraft={setAchievementsDraft}
              setGlobalPreviewOpen={setGlobalPreviewOpen}
              handleSaveWithPopup={handleSaveWithPopup}
              setAchievementsState={setAchievementsState}
              achievements={achievements}
            />
          )}
          {section === "about" && (
            <AdminAboutSection
              aboutDraft={aboutDraft}
              setAboutDraft={setAboutDraft}
              setGlobalPreviewOpen={setGlobalPreviewOpen}
              handleSaveWithPopup={handleSaveWithPopup}
              setAboutState={setAboutState}
              about={about}
            />
          )}
          {section === "roles" && (
            <AdminRolesSection
              rolesDraft={rolesDraft}
              setRolesDraft={setRolesDraft}
              setGlobalPreviewOpen={setGlobalPreviewOpen}
              handleSaveWithPopup={handleSaveWithPopup}
              setRolesState={setRolesState}
              roles={roles}
            />
          )}
          {section === "blog" && (
            <AdminBlogSection
              blogDraft={blogDraft}
              setBlogDraft={setBlogDraft}
              setGlobalPreviewOpen={setGlobalPreviewOpen}
              handleSaveWithPopup={handleSaveWithPopup}
              setBlogState={setBlogState}
              blog={blog}
            />
          )}
        </AdminSectionWrapper>
      </main>
    </div>
  );
};

export default AdminDashboard;
