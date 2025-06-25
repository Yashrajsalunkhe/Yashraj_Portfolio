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
    image: "/public/placeholder.jpg",
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
      github: "https://github.com/Yashrajsalunkhe/smart-doorbell"
    }
  },
  {
    id: 2,
    title: "Gesture-Based Smart Automation System",
    description: "KPIT Sparkle finalist project enabling gesture control for smart appliances and devices.",
    longDescription: "This innovative gesture recognition system allows users to control various smart home devices using simple hand gestures. The project leverages computer vision techniques and machine learning to interpret hand movements and translate them into commands for connected devices. This system is particularly useful for elderly and disabled individuals who may have difficulty using traditional interfaces.",
    image: "/public/placeholder.jpg",
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
      github: "https://github.com/Yashrajsalunkhe/gesture-automation"
    }
  },
  {
    id: 3,
    title: "Object Detection Website (YOLOv5)",
    description: "Web application for real-time object detection using YOLOv5 with a user-friendly interface.",
    longDescription: "This web application provides real-time object detection capabilities using the YOLOv5 model. Users can upload images or use their webcam to detect and identify objects in real-time. The system highlights detected objects with bounding boxes and provides confidence scores for each detection. It's built with a responsive interface that works across different devices.",
    image: "/public/placeholder.jpg",
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
      github: "https://github.com/Yashrajsalunkhe/yolov5-object-detection",
      demo: "https://yolov5-object-detection.herokuapp.com/"
    }
  },
  {
    id: 4,
    title: "GPS Bus Tracking System",
    description: "Real-time bus tracking system with location updates and ETA predictions for passengers.",
    longDescription: "This GPS tracking system provides real-time updates on bus locations, helping passengers plan their commute more efficiently. The system calculates estimated arrival times based on current location, route, and traffic conditions. Passengers can access this information through a mobile app or web interface, receiving notifications as their bus approaches their stop.",
    image: "/public/placeholder.jpg",
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
      github: "https://github.com/Yashrajsalunkhe/gps-bus-tracker"
    }
  },
  {
    id: 5,
    title: "Smart Home Automation (Google Assistant)",
    description: "Voice-controlled home automation system integrated with Google Assistant for seamless control.",
    longDescription: "This smart home system allows users to control various home appliances and devices using voice commands through Google Assistant. The system connects to different IoT devices throughout the home, enabling voice control of lights, fans, air conditioners, and other appliances. It can also create routines and schedules for automated control based on time or other triggers.",
    image: "/public/placeholder.jpg",
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
      github: "https://github.com/Yashrajsalunkhe/smart-home-automation"
    }
  }
];
