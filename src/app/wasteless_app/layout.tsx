import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-row h-full">
        <Sidebar />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;