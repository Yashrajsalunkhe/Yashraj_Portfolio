import React from "react";
import Navbar from "../components/Navbar";

const Resume = () => {
  return (
    <>
      <Navbar />
      <div id="home" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4 relative z-10 pt-16">
        <h1 className="text-2xl font-bold text-white mb-4">My Resume</h1>
        <div className="w-full max-w-4xl h-[85vh] shadow-lg border border-gray-700 rounded-lg overflow-hidden bg-gray-800">
          <iframe
            src="/src/img/Resume.pdf"
            className="w-full h-full"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Resume;