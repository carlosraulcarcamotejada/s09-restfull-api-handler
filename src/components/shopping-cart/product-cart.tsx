import Image from "next/image";
import { Product } from "@/data/products/products";
import { Card } from "@/components/ui/card";
import { AddToCartButton } from "@/components/shopping-cart/add-to-cart-button";
import { SubtractToCartButton } from "@/components/shopping-cart/subtract-to-cart-button";

interface ProductCartProps {
  product: Product;
  quantity: number;
}

const ProductCart = ({ product, quantity }: ProductCartProps) => {
  const { id, image, name, price } = product;

  const total: number = quantity * price;

  return (
    <Card className="flex flex-col md:flex-row gap-x-4 items-center justify-between w-full md:h-32 md:p-4">
      {/* Image */}
      <div className="flex flex-col md:flex-row gap-y-2 items-center md:gap-x-4 bg-sky-400#">
        <Image
          height={100}
          width={100}
          src={image}
          className="rounded-md size-40 h-40 md:size-28"
          alt={"product-image-cart"}
        />
        {/* Name - Price - Quantity - Total */}
        <div className="flex flex-col">
          <span className="text-xl font-bold">{`${name}`}</span>
          <span>{`$${price.toFixed(2)}`}</span>
          <span>{`Cantidad: ${quantity}`}</span>
          <span>{`Total: $${total.toFixed(2)}`}</span>
        </div>
      </div>
      {/* Actions: - Add - Quantity - Remove */}
      <div className="flex gap-x-4 items-center justify-center bg-yellow-300# h-32">
        <AddToCartButton id={id} />
        <span className="font-semibold"> {quantity}</span>
        {/* <RemoveToCartButton id={id} /> */}
        <SubtractToCartButton id={id} />
      </div>
    </Card>
  );
};

export type { ProductCartProps };
export { ProductCart };
