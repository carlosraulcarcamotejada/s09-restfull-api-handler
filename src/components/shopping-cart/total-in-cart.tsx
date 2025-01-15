import { getCookieCart } from "@/actions/shopping-cart/action-shopping-cart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CookieCartProps,
  getProductsInCart,
  getTotalToPay,
} from "@/helpers/shopping-cart/shopping-cart";
import { ProductCartProps } from "@/components/shopping-cart/product-cart";

interface TotalInCartProps {
  tax: number;
}

const TotalInCart = async ({ tax }: TotalInCartProps) => {
  const cart: CookieCartProps = await getCookieCart();

  const productsInCart: ProductCartProps[] = getProductsInCart(cart);

  const totalToPay: number = getTotalToPay(productsInCart) * (1 + tax / 100);

  return (
    <Card className="w-full">
      <CardHeader className="border-b border-foreground-300">
        <CardTitle className="text-center">Total a pagar</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center w-full border# gap-y-2 mt-6">
        <span className="text-2xl font-bold text-center borde# w-full">
          {`$${totalToPay.toFixed(2)}`}
        </span>
        <span className="font-semibold text-center">
          {`Impuestos ${tax}%: ${(totalToPay * (tax / 100)).toFixed(2)}`}
        </span>
      </CardContent>
    </Card>
  );
};

export { TotalInCart };
