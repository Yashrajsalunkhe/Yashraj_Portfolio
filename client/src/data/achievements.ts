export interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: string;
  color: string;
}

export const achievements: Achievement[] = [
  {
    title: "SIH Participation",
    description: "Participated in Smart India Hackathon, competing at the national level to solve real-world problems with innovative technological solutions.",
    year: "2022",
    icon: "fas fa-trophy",
    color: "primary"
  },
  {
    title: "KPIT Sparkle Finalist",
    description: "Reached the finals of KPIT Sparkle, a national innovation competition, with the Gesture-Based Smart Automation System project.",
    year: "2023",
    icon: "fas fa-award",
    color: "secondary"
  },
  {
    title: "Neuroverse Website UI Developer",
    description: "Led the UI/UX design and frontend development for Neuroverse, creating an intuitive and engaging user interface.",
    year: "2023",
    icon: "fas fa-laptop-code",
    color: "accent"
  }
];
