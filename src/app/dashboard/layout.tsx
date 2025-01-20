import {
  AppSidebar,
  AppSidebarLinksProps,
} from "@/components/shared/app-sidebar/app-sidebar";
import { Footer } from "@/components/shared/footer";
import { NavUserProps } from "@/components/shared/app-sidebar/components/nav-user";
import { Topbar } from "@/components/shared/top-bar/top-bar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CheckboxIcon } from "@radix-ui/react-icons";
import {
  CookieIcon,
  LayoutDashboard,
  ListPlusIcon,
  ShoppingBagIcon,
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
      url: "/dashboard",
    },
    {
      icon: CheckboxIcon,
      id: 2,
      title: "REST Todo's",
      url: "/dashboard/rest-todos",
    },
    {
      icon: ListPlusIcon,
      id: 3,
      title: "Server Actions",
      url: "/dashboard/server-action-todos",
    },

    {
      icon: CookieIcon,
      id: 4,
      title: "Cookies",
      url: "/dashboard/cookies",
    },

    {
      icon: ShoppingBagIcon,
      id: 5,
      title: "Products",
      url: "/dashboard/products",
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
        <div className="p-2 lg:p-4 min-h-screen bg-background">{children}</div>

        {/* Footer */}
        <Footer />
      </main>
    </SidebarProvider>
  );
}
