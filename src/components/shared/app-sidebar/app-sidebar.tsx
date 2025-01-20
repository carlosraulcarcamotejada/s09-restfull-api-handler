import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LucideProps } from "lucide-react";
import { NavUser } from "@/components/shared/app-sidebar/components/nav-user";
import { TeamSwitcher } from "@/components/shared/app-sidebar/components/team-switcher";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface AppSidebarLinksProps {
  id: number;
  title: string;
  url: string;
  icon:
    | ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >
    | ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

interface AppSidebarProps {
  appSidebarLinks: AppSidebarLinksProps[];
}

export async function AppSidebar({
  appSidebarProps,
}: {
  appSidebarProps: AppSidebarProps;
}) {
  const { appSidebarLinks } = appSidebarProps;

  const session = await getServerSession(authOptions);

  !session && redirect("/api/auth/signin");

  return (
    <Sidebar>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup />

        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {appSidebarLinks.map(({ id, icon: Icon, title, url }) => (
              <SidebarMenuItem key={id} isActive>
                <SidebarMenuButton asChild>
                  <Link href={url}>
                    <Icon />
                    <span>{title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={session?.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

export type { AppSidebarProps };
export type { AppSidebarLinksProps };
