// app/wasteless_app/layout.tsx
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const  user = await validateRequest();

  if (!user) {
   // You must return null or a valid React component after a redirect
    return (
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-row h-full">
          <Sidebar user={user} />
  
          <div className="flex-1">{children}</div>
        </div>
      </div>
    );
  }

  console.log("User logged in", user);

}
