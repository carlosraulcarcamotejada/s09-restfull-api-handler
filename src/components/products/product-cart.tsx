import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StarFilledIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlusCircleIcon, TrashIcon } from "lucide-react";

const ProductCart = () => {
  return (
    <Card className="w-80">
      {/* Product Image */}
      <CardHeader>
        <Image
          width={500}
          height={500}
          className="rounded"
          src="/images/products/1623735-00-A_0_2000.jpg"
          alt="product image"
        />
      </CardHeader>
      {/* Title */}
      <CardHeader>
        <CardTitle>
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="flex items-center gap-x-2 mt-2.5 mb-5">
        {/* Stars */}
        <StarFilledIcon className="size-5 text-yellow-300" />
        <StarFilledIcon className="size-5 text-yellow-300" />
        <StarFilledIcon className="size-5 text-yellow-300" />
        <StarFilledIcon className="size-5 text-yellow-300" />
        <StarFilledIcon className="size-5 text-yellow-300" />

        {/* Rating Number */}
        <Badge variant={"default"}> 5.0</Badge>
      </CardContent>
      {/* Price and Add to Cart */}
      <CardFooter className="flex items-center justify-between">
        <span className="text-3xl font-bold">{`$599`}</span>
        <div className="flex gap-x-4">
          <Button size={"icon"} variant={"default"}>
            <PlusCircleIcon size={25} />
          </Button>
          <Button size={"icon"} variant={"destructive"}>
            <TrashIcon size={20} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export { ProductCart };
