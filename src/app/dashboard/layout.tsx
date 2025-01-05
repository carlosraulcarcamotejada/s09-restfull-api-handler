import {
  AppSidebar,
  AppSidebarLinksProps,
} from "@/components/common/app-sidebar";
import { NavUserProps } from "@/components/common/nav-user";
import { Topbar } from "@/components/common/top-bar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
  Calculator,
  HeartIcon,
  LayoutDashboard,
  PocketKnifeIcon,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Menu items.
  const appSidebarLinks: AppSidebarLinksProps[] = [
    {
      icon: LayoutDashboard,
      id: 1,
      title: "Dashboard",
      url: "/dashboard/main",
    },
    {
      icon: Calculator,
      id: 2,
      title: "Counter",
      url: "/dashboard/counter",
    },
    {
      icon: PocketKnifeIcon,
      id: 3,
      title: "Pokemons",
      url: "/dashboard/pokemons",
    },
    {
      icon: HeartIcon,
      id: 4,
      title: "Favorites",
      url: "/dashboard/favorites",
    },
  ];

  const navUser: NavUserProps = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://avatars.githubusercontent.com/u/38920540?v=4",
  };

  return (
    <SidebarProvider>
      <AppSidebar appSidebarProps={{ appSidebarLinks, navUser }} />
      <main className="w-full">
        {/* Topbar */}
        <Topbar>
          <SidebarTrigger />
        </Topbar>

        {/* Content */}
        <div className="p-2 lg:p-4 min-h-screen bg-slate-100">{children}</div>
      </main>
    </SidebarProvider>
  );
}
