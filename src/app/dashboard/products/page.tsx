import { ProductCart } from "@/components/products/product-cart";
import { products } from "@/data/products/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Page",
  description: "Product Page",
};

export default function ProductPage() {
  return (
    <div className="flex flex-wrap gap-8 pb-60">
      {products.map((product) => (
        <ProductCart key={product.id} {...product} />
      ))}
    </div>
  );
}
