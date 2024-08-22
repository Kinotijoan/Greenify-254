// app/wasteless_app/layout.tsx console.log("User logged in", user);

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const user = await validateRequest();

  if (!user) {
   // You must return null or a valid React component after a redirect
    redirect("/login");
    return null;
  }
   return (
      
      <div className="flex bg-greenbg h-screen">
      <Sidebar user={user} />
    
      <div className="flex-grow bg-white rounded-lg p-4 m-1 md:ml-0">
        {children}
      </div>
    </div>
    
    );

}
