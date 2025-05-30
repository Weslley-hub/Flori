import {
  ArrowBigUpDash,
  HelpCircle,
  Home,
  PersonStandingIcon,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: <Home size={20} />,
  },
  {
    title: "Visualizar Meus Dados",
    url: "/datas",
    icon: <ArrowBigUpDash size={20} />,
  },
  {
    title: "Ajuda",
    url: "/help",
    icon: <HelpCircle size={20} />,
  },
  {
    title: "Pefil",
    url: "/profile",
    icon: <PersonStandingIcon size={20} />,
  },
  {
    title: "Ajustes",
    url: "/settings",
    icon: <Settings size={20} />,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-64 bg-[#0b1d25] text-white">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-3xl items-center text-amber-50 p-4 m-4">
            FLORI TECH
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="pl-5 flex flex-col gap-2 ">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      {item.icon}
                      <span className="text-base text-white">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
