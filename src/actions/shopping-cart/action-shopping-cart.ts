"use server";
import { cookies } from "next/headers";
import { CookieCartProps } from "@/helpers/shopping-cart/shopping-cart";

export const getCookieCart = async (): Promise<CookieCartProps> => {
  const cookiesStore = await cookies();

  if (cookiesStore.has("teslo-cart")) {
    const cart: CookieCartProps = JSON.parse(
      cookiesStore.get("teslo-cart")?.value ?? "{}"
    ) as CookieCartProps;
    return cart;
  }

  return {};
};
