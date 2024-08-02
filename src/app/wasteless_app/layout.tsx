import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "../page";

const Layout: React.FC = ({}) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-row h-full">
        <Sidebar />
        <div className="flex-1">{}</div>
      </div>
    </div>
  );
};

export default Layout;