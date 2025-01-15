import { Metadata } from "next";
import { ProductCard } from "@/components/products/product-card";
import { products } from "@/data/products/products";
import { TitlePage } from "@/helpers/common/title-page";

export const metadata: Metadata = {
  title: "Product Page",
  description: "Product Page",
};

export default function ProductPage() {
  return (
    <div className="flex flex-col gap-y-8">
      <TitlePage title="Productos" />
      <div className="flex flex-wrap gap-8 pb-60">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
