import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ShadCnLogo } from "../icon/shad-cn-logo-icon";
import { Button } from "../ui/button";
import { MoonIcon } from "lucide-react";

export function Topbar({ children }: { children?: React.ReactNode }) {
  return (
    <Navbar isBordered className="">
      <div>{children}</div>
      <NavbarContent justify="start" className="bg-lime-300@">
        <NavbarBrand className="items-center gap-2 lg:mr-6 hidden lg:flex">
          <ShadCnLogo className="size-6" />
          <span className="font-bold">shadcn/ui</span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        as="div"
        className="items-center bg-sky-400#"
        justify="end"
      >
        {/* Input */}
        <Input placeholder="Type to search..." type="search" className="hidden border border-input hover:bg-accent hover:text-accent-foreground relative  bg-foreground-100/50 shadow-none md:w-40 lg:w-56 xl:w-64  lg:block " />
        {/* <SearchIcon size={18} /> */}

        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="transition-transform " color="secondary">
              <AvatarImage
                src={"https://i.pravatar.cc/150?u=a042581f4e29026704d"}
                alt={"Jason Hughes"}
              />
              <AvatarFallback>{"ZW"}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>{"zoey@example.com"}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant={"ghost"} size={"icon"} className="size-12">
          <MoonIcon className="size-12"  />
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
