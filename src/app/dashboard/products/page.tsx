import { ProductCart } from "@/components/products/product-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Page",
  description: "Product Page",
};

export default function ProductPage() {
  return (
    <div>
      <ProductCart />
    </div>
  );
}
