import { ProductCartProps } from "@/components/shopping-cart/product-cart";
import { products } from "@/data/products/products";
import { getCookie, hasCookie, setCookie } from "cookies-next";

interface CookieCartProps {
  [id: string]: number;
}

export const getCookieCart = (): CookieCartProps => {
  if (hasCookie("teslo-cart")) {
    const cookieCart: CookieCartProps = JSON.parse(
      (getCookie("teslo-cart") as string) ?? "{}"
    ) as CookieCartProps;
    return cookieCart;
  }

  return {};
};

export const addProductToCart = (id: string) => {
  const cookieCart: CookieCartProps = getCookieCart();

  if (cookieCart[id]) {
    cookieCart[id] += 1;
  } else {
    cookieCart[id] = 1;
  }

  setCookie("teslo-cart", JSON.stringify(cookieCart));
};

export const removeProductFromCart = (id: string) => {
  const cookieCart: CookieCartProps = getCookieCart();

  delete cookieCart[id];

  setCookie("teslo-cart", JSON.stringify(cookieCart));
};

export const removeSingleItemFromCart = (id: string) => {
  const cookieCart: CookieCartProps = getCookieCart();

  if (!cookieCart[id]) return;

  cookieCart[id] -= 1;

  if (cookieCart[id] <= 0) delete cookieCart[id];

  setCookie("teslo-cart", JSON.stringify(cookieCart));
};

export const getProductsInCart = (
  cart: CookieCartProps
): ProductCartProps[] => {
  const productsInCart: ProductCartProps[] = Object.keys(cart).reduce(
    (acc, id) => {
      const product = products.find((product) => product.id === id);
      if (product) {
        acc.push({ product, quantity: cart[id] });
      }
      return acc;
    },
    [] as ProductCartProps[]
  );

  return productsInCart;
};

export const getTotalToPay = (productsInCart: ProductCartProps[]): number => {
  const totalToPay: number = productsInCart.reduce(
    (acc, cur) => cur.product.price * cur.quantity + acc,
    0
  );

  return totalToPay;
};

export type { CookieCartProps };
