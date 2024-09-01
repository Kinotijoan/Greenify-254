"use client";
import React, { useState, createContext, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { User } from "lucia";
import UserDialog from "../posts/_components/UserDialog";
import PostsDialog from "../posts/_components/PostsDialog";
import {
  BookText,
  Calendar,
  House,
  Package2,
  Menu,
  X,
  Building2,
  LogOut,
  MapPinned,
} from "lucide-react";
import axios from "axios";

interface SidebarProps {
  user: User;
}

interface EventFormContextType {
  showEventForm: boolean;
  setShowEventForm: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RecycledProductFormContextType {
  showRecycledProductForm: boolean;
  setShowRecycledProductForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EventFormContext = createContext<EventFormContextType>({
  showEventForm: false,
  setShowEventForm: () => {},
});

export const RecycledProductFormContext = createContext<RecycledProductFormContextType>({
  showRecycledProductForm: false,
  setShowRecycledProductForm: () => {},
});

const Sidebar = ({ user }: SidebarProps) => {
  const [showEventForm, setShowEventForm] = useState(false);
  const [showRecycledProductForm, setShowRecycledProductForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const [selectedSection, setSelectedSection] = useState("home");

  const handleSectionClick = (section: string) => {
    setSelectedSection(section);
    setIsSidebarOpen(false); // Close sidebar after selecting an item
    router.push(`/wasteless_app/${section}`);
  };

  const handleHomeClick = () => {
    setSelectedSection("home");
    setIsSidebarOpen(false); // Close sidebar after selecting Home
    router.push(`/wasteless_app/`);
  };

  const handleLogout = () => {
    axios
      .post("http://localhost:3000/api/logout")
      .then((res) => {
        if (res.status === 200) {
          router.push("/login");
        }
      })
      .catch((error) => {
        setError("Logout failed. Please try again.");
      });
  };

  return (
    <EventFormContext.Provider value={{ showEventForm, setShowEventForm }}>
      <RecycledProductFormContext.Provider value={{ showRecycledProductForm, setShowRecycledProductForm }}>
        <div>
          {/* Mobile Toggle Button */}
          <button
            className="text-white lg:hidden p-2"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Sidebar Menu */}
          <div
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-greenbg p-5 flex flex-col gap-3 text-xl transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Image
              src="/logo.png"
              alt="greenify-254"
              width={300}
              height={40}
              className="my-5 cursor-pointer"
              onClick={handleHomeClick}
            />

            {[
              { name: "home", icon: <House />, label: "Home" },
              { name: "education", icon: <BookText />, label: "Education" },
              { name: "companies", icon: <Building2 />, label: "Recyclers" },
              { name: "products", icon: <Package2 />, label: "Products" },
              { name: "events", icon: <Calendar />, label: "Events" },
              { name: "map", icon: <MapPinned />, label: "Map" },
            ].map(({ name, icon, label }) => (
              <button
                key={name}
                className={`flex text-white items-center gap-4 py-2 px-8 rounded-lg ${
                  selectedSection === name
                    ? "font-bold underline"
                    : "hover:border hover:border-1 transition-all duration-300"
                }`}
                onClick={() => handleSectionClick(name)}
              >
                {icon}
                {label}
              </button>
            ))}

          </div>

          {/* Overlay for mobile view */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* User Dialog */}
          <div className="flex justify-center items-center">
            {user.role === "INDIVIDUAL" ? <UserDialog /> : <PostsDialog />}
          </div>

          {/* Logout Button */}
          <div
            className="flex justify-center items-center fixed bottom-4 left-4 lg:bottom-10 lg:left-10 bg-white text-black border-2 rounded-lg p-2 cursor-pointer shadow-lg hover:bg-gray-100 transition-all duration-300"
            onClick={handleLogout}
          >
            <button className="flex items-center gap-2 text-lg font-semibold">
              <LogOut className="w-6 h-6" />
              Log Out
            </button>
          </div>

          {/* Display error message if there's an error */}
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
      </RecycledProductFormContext.Provider>
    </EventFormContext.Provider>
  );
};

export default Sidebar;
