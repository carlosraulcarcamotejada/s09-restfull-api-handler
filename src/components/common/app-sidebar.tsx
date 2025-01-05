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
import { NavUser, NavUserProps } from "@/components/common/nav-user";
import { TeamSwitcher } from "@/components/common/team-switcher";

interface AppSidebarLinksProps {
  id:number;
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

interface AppSidebarProps {
  appSidebarLinks: AppSidebarLinksProps[];
  navUser: NavUserProps;
}

export function AppSidebar({ appSidebarProps  } : { appSidebarProps: AppSidebarProps }) {


  const { appSidebarLinks, navUser } = appSidebarProps;

  return (
    <Sidebar>
      <SidebarHeader />

      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup />

        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {appSidebarLinks.map(({id,icon:Icon,title,url}) => (
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
        <NavUser user={navUser} />
      </SidebarFooter>
    </Sidebar>
  );
}

export type { AppSidebarProps };
export type { AppSidebarLinksProps };
