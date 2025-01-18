import { Metadata } from "next";
import { getCookieCart } from "@/actions/shopping-cart/action-shopping-cart";
import {
  ProductCart,
  ProductCartProps,
} from "@/components/shopping-cart/product-cart";
import {
  CookieCartProps,
  getProductsInCart,
} from "@/helpers/shopping-cart/shopping-cart";
import { TotalInCart } from "@/components/shopping-cart/total-in-cart";
import { ShoppingCartIcon } from "lucide-react";
import { TitlePage } from "@/helpers/common/title-page";

export const metadata: Metadata = {
  title: "Carrito de compras",
  description: "Carrito de compras",
};

export default async function CartPage() {
  const cart: CookieCartProps = await getCookieCart();

  const productsInCart: ProductCartProps[] = getProductsInCart(cart);

  const tax: number = 15;

  return (
    <div className="flex flex-col gap-y-8 pb-60">
      <TitlePage title=" Productos en el carrito" />

      <div className="flex gap-2 md:gap-x-4">
        <div className="flex flex-col gap-y-6 w-1/2 lg:w-3/4">
          {productsInCart.map((productCart) => (
            <ProductCart key={productCart.product.id} {...productCart} />
          ))}
        </div>
        <div className="w-1/2 md:w-1/4">
          <TotalInCart tax={tax} />
        </div>
      </div>
    </div>
  );
}
