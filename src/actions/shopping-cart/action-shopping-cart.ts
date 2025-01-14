"use server";

import { hasCookie } from "cookies-next";
import { cookies } from "next/headers";

// interface CookieCart {
//   [id: string]: number;
// }

// export const getCookieCart = async (): Promise<CookieCart> => {
//   if (hasCookie("teslo-cart")) {
//     const cookieStore = await cookies();
//     const cookieCart: CookieCart = JSON.parse(
//       (cookieStore.get("teslo-cart")?.value as string) ?? "{}"
//     );
//     console.log(cookieCart);
//     return cookieCart;
//   }

//   return {};
// };

// export const addProductToCart = async (id: string) => {
//   const cookieCart: CookieCart = await getCookieCart();

//   if (cookieCart[id]) {
//     cookieCart[id] = +1;
//   } else {
//     cookieCart[id] = 1;
//   }


// };
