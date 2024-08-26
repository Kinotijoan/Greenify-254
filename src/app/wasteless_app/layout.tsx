import Sidebar from "./components/sidebar";
import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const user = await validateRequest();

  if (!user) {
    // redirect("/login");
    return (
      <div className="flex bg-greenbg h-screen overflow-hidden">
        <Sidebar user={user} />

        <div className="flex-grow bg-white rounded-lg p-4 m-1 md:ml-0 overscroll-contain overflow-auto">
          {children}
        </div>
      </div>
    );
  }
  //  return (
  //    <div className="flex bg-greenbg h-screen overflow-hidden">
  //      <Sidebar user={user} />

  //      <div className="flex-grow bg-white rounded-lg p-4 m-1 md:ml-0 overscroll-contain overflow-auto">
  //        {children}
  //      </div>
  //    </div>
  //  );

}
