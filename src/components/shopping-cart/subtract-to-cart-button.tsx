"use client";
import { useRouter } from "next/navigation";
import { removeSingleItemFromCart } from "@/helpers/shopping-cart/shopping-cart";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { MinusCircleIcon } from "lucide-react";

const SubtractToCartButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const onAddToCart = () => {
    removeSingleItemFromCart(id);
    toast(`Eliminado del carrito`, {
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
    router.refresh();
  };

  return (
    <Button onClick={onAddToCart} size={"icon"} variant={"destructive"}>
      <MinusCircleIcon size={25} />
    </Button>
  );
};

export { SubtractToCartButton };
