import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  //   NavbarItem,
} from "@nextui-org/navbar";
import { SearchIcon } from "lucide-react";
// import Link from "next/link";
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

interface TopbarProps {
  links?: any;
}

export function Topbar({ children }: { children?: React.ReactNode }) {
  return (
    <Navbar isBordered className="">
      <div>{children}</div>
      <NavbarContent justify="start" className="bg-lime-300@">
        <NavbarBrand className="mr-4 flex items-center gap-2 lg:mr-6">
          <ShadCnLogo className="size-6" />
          <span className="hidden font-bold lg:inline-block">shadcn/ui</span>
          {/* <p className="hidden sm:block font-bold text-inherit">ACME</p> */}
        </NavbarBrand>
        {/* <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page" color="secondary" href="#">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent> */}
      </NavbarContent>

      <NavbarContent
        as="div"
        className="items-center bg-sky-400#"
        justify="end"
      >
        {/* Input */}
        <Input
          //   classNames={{
          //     base: "max-w-full sm:max-w-[10rem] h-10",
          //     mainWrapper: "h-full",
          //     input: "text-small",
          //     inputWrapper:
          //       "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          //   }}
          placeholder="Type to search..."
          //   size="sm"
          //   startContent={}
          type="search"
        />
        <SearchIcon size={18} />

        {/* Dropdown Menu */}
        <DropdownMenu
        // placement="bottom-end"
        >
          <DropdownMenuTrigger>
            <Avatar
              // isBordered
              // as="button"
              // name="Jason Hughes"
              // size="sm"
              // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              className="transition-transform "
              color="secondary"
            >
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
      </NavbarContent>
    </Navbar>
  );
}
