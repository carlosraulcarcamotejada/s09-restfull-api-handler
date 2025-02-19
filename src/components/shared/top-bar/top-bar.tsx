import { Navbar, NavbarBrand, NavbarContent } from "@heroui/navbar";
import { ShadCnLogo } from "@/components/icon/shad-cn-logo-icon";
import { ThemeButton } from "@/components/shared/top-bar/components/theme-button";
import { ShoppingCart } from "@/components/shopping-cart/shopping-cart";
import { InputSearch } from "@/components/shared/top-bar/components/input-search";

export function Topbar({ children }: { children?: React.ReactNode }) {
  return (
    <Navbar isBordered>
      <div>{children}</div>
      <NavbarContent justify="start" className="bg-lime-300@">
        <NavbarBrand className="items-center gap-2 lg:mr-6 hidden lg:flex">
          <ShadCnLogo className="size-6" />
          <span className="font-bold">shadcn/ui</span>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <InputSearch />

        {/* <AvatarDropdownMenu /> */}

        <ShoppingCart />

        <ThemeButton />
      </NavbarContent>
    </Navbar>
  );
}
