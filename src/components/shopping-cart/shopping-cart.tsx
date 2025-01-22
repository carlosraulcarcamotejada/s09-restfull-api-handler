import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CookieCartProps,
  getCookieCart,
} from "@/actions/shopping-cart/shopping-cart-actions";
import { ShoppingBasket } from "lucide-react";

const ShoppingCart = async () => {
  const cart: CookieCartProps = await getCookieCart();

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
