"use client";
import { Button } from "@/components/ui/button";
import { addProductToCart } from "@/helpers/shopping-cart/shopping-cart";
import { PlusCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AddToCartButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const onAddToCart = () => {
    addProductToCart(id);
    toast(`Agregado al carrito`, {
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
    router.refresh();
  };

  return (
    <Button onClick={onAddToCart} size={"icon"} variant={"default"}>
      <PlusCircleIcon size={25} />
    </Button>
  );
};

export { AddToCartButton };
