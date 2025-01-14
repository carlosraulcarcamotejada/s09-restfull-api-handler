import { getCookie, hasCookie, setCookie } from "cookies-next";

interface CookieCartProps {
  [id: string]: number;
}

export const getCookieCart = (): CookieCartProps => {
  if (hasCookie("teslo-cart")) {
    const cookieCart: CookieCartProps = JSON.parse(
      (getCookie("teslo-cart") as string) ?? "{}"
    );
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

export type { CookieCartProps };
