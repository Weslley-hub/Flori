import { Menu } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "./app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-w-full h-screen bg-[#f0eded]">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="h-16 bg-[#0b1d25] text-white flex items-center justify-between px-4 shadow z-10">
            <SidebarTrigger>
              <button className="p-2 ">
                <Menu size={24} />
              </button>
            </SidebarTrigger>
            <button className="text-sm font-medium">Sair</button>
          </header>
          <div className="flex-1 p-6 bg-[#f0eded] overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
