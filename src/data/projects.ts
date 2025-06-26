export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string;
  technologies: string[];
  features?: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Doorbell with Face Recognition",
    description: "A security system that uses facial recognition to identify visitors and notify homeowners via a mobile app.",
    longDescription: "This smart doorbell system combines facial recognition with IoT technology to provide enhanced home security. When a visitor approaches, the system captures their image, runs it through a facial recognition algorithm, and if recognized, can automatically notify the homeowner or grant access. For unknown visitors, a notification is sent to the homeowner's mobile app allowing real-time interaction.",
    image: "/smart-doorbell.jpg", // Smart Doorbell
    category: "AI / IoT",
    technologies: ["Python", "OpenCV", "Raspberry Pi", "TensorFlow", "React Native"],
    features: [
      "Real-time facial recognition using TensorFlow",
      "Mobile notifications when visitors arrive",
      "Two-way communication capability",
      "Image and video capture and storage",
      "Integration with home automation systems"
    ],
    links: {
      github: "https://github.com/Yashrajsalunkhe/Smart_door"
    }
  },
  {
    id: 2,
    title: "Gesture-Based Smart Automation System",
    description: "KPIT Sparkle finalist project enabling gesture control for smart appliances and devices.",
    longDescription: "This innovative gesture recognition system allows users to control various smart home devices using simple hand gestures. The project leverages computer vision techniques and machine learning to interpret hand movements and translate them into commands for connected devices. This system is particularly useful for elderly and disabled individuals who may have difficulty using traditional interfaces.",
    image: "https://imgs.search.brave.com/6tXxdRVUY6MTRl7j5kliyzXrARbSWj5B-nUppoDCrVk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEyLzk4Lzg2LzA3/LzM2MF9GXzEyOTg4/NjA3MTRfWHVTT0lo/MUtLNlpOR09xMFlN/ZWhzYXdxVzBRMVh4/ZG0uanBn", // Gesture Automation
    category: "Computer Vision",
    technologies: ["Python", "MediaPipe", "IoT", "Computer Vision"],
    features: [
      "Real-time hand gesture recognition",
      "Multiple device control with different gestures",
      "Low latency response system",
      "Adaptable to different lighting conditions",
      "Customizable gesture-command mapping"
    ],
    links: {
      github: ""
    }
  },
  {
    id: 3,
    title: "Object Detection Website (YOLOv5)",
    description: "Web application for real-time object detection using YOLOv5 with a user-friendly interface.",
    longDescription: "This web application provides real-time object detection capabilities using the YOLOv5 model. Users can upload images or use their webcam to detect and identify objects in real-time. The system highlights detected objects with bounding boxes and provides confidence scores for each detection. It's built with a responsive interface that works across different devices.",
    image: "https://imgs.search.brave.com/ynkTUXu3zozgNRh0yxewSAVfUYrL6BFULDd7RuUdNvg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aXNv/LmFpL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzAxL3NtYWxs/LW9iamVjdC1kZXRl/Y3Rpb24teW9sb3Y1/LXZlaGljbGUtY2Fy/cy10cnVja3MuanBn", // YOLOv5 Object Detection
    category: "Computer Vision",
    technologies: ["Python", "Flask", "YOLOv5", "JavaScript", "WebRTC"],
    features: [
      "Real-time object detection through webcam",
      "Image upload and processing",
      "Multiple object class recognition",
      "Adjustable confidence thresholds",
      "Detection results export"
    ],
    links: {
      github: "https://github.com/Yashrajsalunkhe/Object-Detection-Image",
      demo: "https://yolov5-object-detection.herokuapp.com/"
    }
  },
  {
    id: 4,
    title: "GPS Bus Tracking System",
    description: "Real-time bus tracking system with location updates and ETA predictions for passengers.",
    longDescription: "This GPS tracking system provides real-time updates on bus locations, helping passengers plan their commute more efficiently. The system calculates estimated arrival times based on current location, route, and traffic conditions. Passengers can access this information through a mobile app or web interface, receiving notifications as their bus approaches their stop.",
    image: "https://imgs.search.brave.com/xL7V32bbSfiJjraklt2srO5aBaS6icwcSYIq1Ma-WFc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcG90/YnVzLnVzL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzA1L1Nj/aG9vbEJ1cy01ODh4/NDQwLmpwZw", // GPS Bus Tracking
    category: "IoT / Web",
    technologies: ["Node.js", "React", "MongoDB", "GPS", "Google Maps API"],
    features: [
      "Real-time bus location tracking",
      "ETA calculation for each stop",
      "Route visualization on map",
      "Push notifications for bus arrivals",
      "Historical data analysis for route optimization"
    ],
    links: {
      github: "https://github.com/Yashrajsalunkhe/GPS-BUS-TRAKING"
    }
  },
  {
    id: 5,
    title: "Smart Home Automation (Google Assistant)",
    description: "Voice-controlled home automation system integrated with Google Assistant for seamless control.",
    longDescription: "This smart home system allows users to control various home appliances and devices using voice commands through Google Assistant. The system connects to different IoT devices throughout the home, enabling voice control of lights, fans, air conditioners, and other appliances. It can also create routines and schedules for automated control based on time or other triggers.",
    image: "https://imgs.search.brave.com/3oHiPUoOZGPecT2Dfv-nZjXEnJ29fe-dPOQtguXm278/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zbWFydC1ob21l/LWF1dG9tYXRpb24t/c3lzdGVtLXRoYXQt/YWxsb3dzLXlvdS1j/b250cm9sLXlvdXIt/aG9tZS13aXRoLXRv/dWNoLWJ1dHRvbi1h/ci0xNjktam9iLWlk/LWZjMGI2ZTgxNjgx/ZTRlODJhOTBjNmE0/YjY5NTlhNTM4XzEx/MzQ5MDEtNTc4MTgu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA", // Smart Home Automation
    category: "IoT",
    technologies: ["NodeMCU", "IFTTT", "Google Assistant API", "Arduino"],
    features: [
      "Voice command recognition and processing",
      "Integration with multiple home appliances",
      "Custom command creation",
      "Scheduled automation routines",
      "Remote control via mobile app"
    ],
    links: {
      github: ""
    }
  },
  {
    id: 6,
    title: "RAG Chatbot using LangChain and HuggingFace",
    description: "A Retrieval-Augmented Generation (RAG) chatbot that answers questions contextually using your custom dataset.",
    longDescription: "A Retrieval-Augmented Generation (RAG) based chatbot built with Python, LangChain, HuggingFace, and FAISS. This chatbot can answer questions contextually using your custom dataset. It loads data from a .txt file (faq.txt), uses LangChain's RAG pipeline for intelligent responses, performs vector similarity search using FAISS, and leverages embeddings from sentence-transformers/all-MiniLM-L6-v2. Powered by HuggingFace's flan-t5-base model (no OpenAI key required). Resource caching is implemented with Streamlit's @st.cache_resource for faster loading. Handles file paths dynamically for portability and is optionally deployable on Streamlit.",
    image: "https://imgs.search.brave.com/Y2KV-eNxPMNYxpvEeu4-4BOrE0WeslqdcIn2cNa7tD8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMWM3/M2JmNDNvenA5dS5j/bG91ZGZyb250Lm5l/dC9jaGF0Ym90L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzEx/LzI4MTEzMTEwL1JB/Ry1jaGF0Ym90Lmpw/Zw",
    category: "AI / NLP",
    technologies: [
      "Python",
      "LangChain",
      "HuggingFace Transformers",
      "FAISS",
      "sentence-transformers",
      "Streamlit"
    ],
    features: [
      "Loads data from .txt file (faq.txt)",
      "LangChain's RAG pipeline for intelligent responses",
      "Vector similarity search using FAISS",
      "Embeddings from sentence-transformers/all-MiniLM-L6-v2",
      "Powered by HuggingFace's flan-t5-base model (no OpenAI key required)",
      "Resource caching with Streamlit's @st.cache_resource",
      "Handles file paths dynamically for portability",
      "Optional: Deployable on Streamlit"
    ],
    links: {
      github: "https://github.com/Yashrajsalunkhe/rag-chatbot"
    }
  }
];
