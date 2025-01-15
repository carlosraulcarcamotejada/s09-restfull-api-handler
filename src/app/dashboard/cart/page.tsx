import { Metadata } from "next";
import {
  CookieCartProps,
  getCookieCart,
} from "@/actions/shopping-cart/action-shopping-cart";
import {
  ProductCart,
  ProductCartProps,
} from "@/components/shopping-cart/product-cart";
import { getProductsInCart } from "@/helpers/shopping-cart/shopping-cart";
import { ShoppingCartIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Carrito de compras",
  description: "Carrito de compras",
};

export default async function CartPage() {
  const cart: CookieCartProps = await getCookieCart();

  const productsInCart: ProductCartProps[] = getProductsInCart(cart);

  return (
    <div className="flex flex-col gap-y-8 pb-60">
      <h1 className="text-2xl font-semibold leading-none tracking-tight flex gap-x-2">
        Productos en el carrito
        <ShoppingCartIcon />
      </h1>
      <div className="flex gap-x-4">
        <div className="flex flex-col gap-y-6 w-1/2 lg:w-3/4">
          {productsInCart.map((productCart) => (
            <ProductCart key={productCart.product.id} {...productCart} />
          ))}
        </div>
        <div className="border w-1/2 lg:w-2/4 rounded-md">

        </div>
      </div>
    </div>
  );
}
