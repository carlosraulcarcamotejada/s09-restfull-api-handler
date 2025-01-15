import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products/products";
import { AddToCartButton } from "@/components/shopping-cart/add-to-cart-button";
import { RemoveToCartButton } from "@/components/shopping-cart/remove-to-cart-button";
import { StarIcon } from "lucide-react";
import { StarFilledIcon } from "@radix-ui/react-icons";

const ProductCard = (product: Product) => {
  const { id, image, name, price, rating } = product;

  return (
    <Card className="w-80">
      {/* Product Image */}
      <CardHeader>
        <Image
          width={500}
          height={500}
          className="rounded"
          src={image}
          alt="product image"
        />
      </CardHeader>
      {/* Title */}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="flex items-center justify-between mt-2.5 mb-5">
        {/* Stars */}
        <div className="flex gap-x-2">
          {Array.from({ length: 5 }, (_, index) =>
            index < rating ? (
              <StarFilledIcon key={index} className="size-5 text-yellow-300" />
            ) : (
              <StarIcon key={index} className="size-5 text-yellow-300" />
            )
          )}
        </div>

        {/* Rating Number */}
        <Badge variant={"default"}>{rating.toFixed(2)}</Badge>
      </CardContent>
      {/* Price and Add to Cart */}
      <CardFooter className="flex items-center justify-between">
        <span className="text-2xl font-bold">{`$${price.toFixed(2)}`}</span>
        <div className="flex gap-x-4">
          <AddToCartButton id={id} />
          <RemoveToCartButton id={id} />
        </div>
      </CardFooter>
    </Card>
  );
};

export { ProductCard };
