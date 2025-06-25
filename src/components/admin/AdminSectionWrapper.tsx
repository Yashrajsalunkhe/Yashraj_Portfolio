import React from "react";

interface AdminSectionWrapperProps {
  children: React.ReactNode;
}

const AdminSectionWrapper: React.FC<AdminSectionWrapperProps> = ({ children }) => (
  <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-2 md:px-8">
    {children}
  </div>
);

export default AdminSectionWrapper;
