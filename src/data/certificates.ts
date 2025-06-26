// filepath: src/data/certificates.ts
export interface Certificate {
  title: string;
  icon: string;
  color: string;
  description: string;
  year?: string;
  link?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Google Cloud Skills Boost",
    icon: "fas fa-certificate",
    color: "accent",
    description:
      "Comprehensive certification covering advanced Google Cloud technologies, artificial intelligence, machine learning, and modern cloud computing practices. Skills Covered: AI & ML, GenAI, Cloud Functions, API Gateway, Vision API, Pub/Sub, Cloud Storage, BigQuery, Kubernetes.",
    year: "December 2023",
    link: "https://www.credly.com/users/yashraj-salunkhe"
  },
  {
    title: "Web Development",
    icon: "fas fa-code",
    color: "primary",
    description: "Modern full-stack development with React, Node.js, and responsive design principles.",
    year: "2023"
  },
  {
    title: "Machine Learning",
    icon: "fas fa-brain",
    color: "secondary",
    description: "Applied machine learning focusing on computer vision, NLP, and predictive analytics.",
    year: "2023"
  },
  {
    title: "IoT Specialization",
    icon: "fas fa-microchip",
    color: "accent",
    description: "Building connected systems with microcontrollers, sensors, and cloud integration.",
    year: "2022"
  }
];
