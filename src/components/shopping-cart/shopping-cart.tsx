import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";
import { CookieCartProps } from "@/helpers/shopping-cart/shopping-cart";
import Link from "next/link";

const ShoppingCart = async () => {
  const cookiesStore = await cookies();
  const cart: CookieCartProps = JSON.parse(
    cookiesStore.get("teslo-cart")?.value ?? "{}"
  ) as CookieCartProps;

  const items: number = Object.values(cart).reduce(
    (total, item: number) => total + item,
    0
  );

  return (
    <Link href={"/dashboard/cart"}>
      <Button variant={"secondary"}>
        {items > 0 && <span className="font-semibold">{items}</span>}
        <ShoppingBasket className="size-5" />
      </Button>
    </Link>
  );
};

export { ShoppingCart };
