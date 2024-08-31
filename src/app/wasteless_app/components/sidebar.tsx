"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { User } from "lucia";
import UserDialog from "../posts/_components/UserDialog";
import PostsDialog from "../posts/_components/PostsDialog";
import { createContext, useContext } from "react";
import {
  BookText,
  Calendar,
  House,
  Package2,
  Menu,
  X,
  Building2,
  LogOut,
  MapPinned
} from "lucide-react";
import axios from "axios";

// interface SidebarProps {
//   user: any;
// }

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
export const RecycledProductFormContext =
  createContext<RecycledProductFormContextType>({
    showRecycledProductForm: false,
    setShowRecycledProductForm: () => {},
  });

// const Sidebar = ({ user }: SidebarProps) => {
const Sidebar = () => {
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
        // handle response here
        if (res.status === 200) {
          router.push("/login");
        }
      })
      .catch((error) => {
        // handle error here
        setError(error.response?.data.message);
      });
  };

  return (
    <EventFormContext.Provider value={{ showEventForm, setShowEventForm }}>
      <RecycledProductFormContext.Provider
        value={{ showRecycledProductForm, setShowRecycledProductForm }}
      >
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
              className="my-5"
              onClick={() => handleHomeClick()}
            />

            <button
              className={`flex text-white items-center gap-4 py-2 px-8 rounded-lg ${
                selectedSection === "home"
                  ? "font-bold underline "
                  : "hover:border hover:border-1 transition-all duration-300"
              }`}
              onClick={() => handleHomeClick()}
            >
              <House />
              Home
            </button>
            <button
              className={`flex text-white items-center gap-4 py-2 px-8 rounded-lg ${
                selectedSection === "education"
                  ? "font-bold underline"
                  : "hover:border hover:border-1 transition-all duration-300"
              }`}
              onClick={() => handleSectionClick("education")}
            >
              <BookText />
              Education
            </button>
            <button
              className={`flex text-white items-center gap-4 py-2 px-8 rounded-lg ${
                selectedSection === "companies"
                  ? "font-bold underline"
                  : "hover:border hover:border-1 transition-all duration-300"
              }`}
              onClick={() => handleSectionClick("companies")}
            >
              <Building2 />
              Recyclers
            </button>
            <button
              className={`flex text-white items-center gap-4 py-2 px-8 rounded-lg ${
                selectedSection === "products"
                  ? "font-bold underline"
                  : "hover:border hover:border-1 transition-all duration-300"
              }`}
              onClick={() => handleSectionClick("products")}
            >
              <Package2 />
              Products
            </button>
            <button
              className={`flex text-white items-center gap-4 py-2 px-8 rounded-lg ${
                selectedSection === "events"
                  ? "font-bold underline"
                  : "hover:border hover:border-1 transition-all duration-300"
              }`}
              onClick={() => handleSectionClick("events")}
            >
              <Calendar />
              Events
            </button>
            <button
              className={`flex text-white items-center gap-4 py-2 px-8 rounded-lg ${
                selectedSection === "map"
                  ? "font-bold underline"
                  : "hover:border hover:border-1 transition-all duration-300"
              }`}
              onClick={() => handleSectionClick("map")}
            >
              <MapPinned />
              Map
            </button>
          </div>
          {/* Overlay for mobile view */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
          {/* <div className="flex justify-center items-center">
            {!user ? <UserDialog /> : <PostsDialog />}
          </div> */}
          <div
            className="flex justify-center items-center absolute bottom-10 left-10 border-2 rounded-lg text-white "
            onClick={() => {
              handleLogout();
            }}
          >
            <button className="p-2 text-white">log out</button>
            <LogOut className="text-white w-20" />
          </div>
        </div>
      </RecycledProductFormContext.Provider>
    </EventFormContext.Provider>
  );
};

export default Sidebar;
