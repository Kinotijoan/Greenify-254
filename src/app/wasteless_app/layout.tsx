import Sidebar from "./_components/sidebar";
import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const result = await validateRequest();

  if (!result) {
    redirect("/login");
    return null; // No JSX returned since the redirect will handle navigation.
  }

  const { user } = result; // Uncomment if user data is needed

  if(!user) {
    redirect("/login");
  }

  return (
    <div className="flex bg-greenbg h-screen overflow-hidden">
      {/* Pass user to Sidebar if needed: <Sidebar user={user} /> */}
      <Sidebar  user={user}/>

      <div className="flex-grow bg-white rounded-lg p-4 m-1 md:ml-0 overscroll-contain overflow-auto">
        {children}
      </div>
    </div>
  );
}
