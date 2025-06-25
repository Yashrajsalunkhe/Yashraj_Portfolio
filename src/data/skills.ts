export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  [key: string]: Skill[];
}

export const skills: SkillCategory = {
  "Languages": [
    { name: "JavaScript", percentage: 90 },
    { name: "Python", percentage: 85 },
    { name: "C/C++", percentage: 80 },
    { name: "PHP", percentage: 75 }
  ],
  "Frameworks": [
    { name: "React", percentage: 90 },
    { name: "Node.js", percentage: 85 },
    { name: "Flask", percentage: 80 },
    { name: "FastAPI", percentage: 75 }
  ],
  "DevOps": [
    { name: "Docker", percentage: 80 },
    { name: "Kubernetes", percentage: 70 },
    { name: "Git", percentage: 90 },
    { name: "Google Cloud", percentage: 85 }
  ],
  "Others": [
    { name: "IoT", percentage: 90 },
    { name: "Linux", percentage: 85 },
    { name: "REST APIs", percentage: 90 },
    { name: "Agile", percentage: 80 }
  ],
  "Database": [
    { name: "MySQL", percentage: 85 },
    { name: "PostgreSQL", percentage: 80 },
    { name: "MongoDB", percentage: 75 },
    { name: "SQLite", percentage: 70 }
  ]
};
