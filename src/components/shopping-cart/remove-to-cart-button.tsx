"use client";
import { Button } from "@/components/ui/button";
import { removeProductFromCart } from "@/helpers/shopping-cart/shopping-cart";
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const RemoveToCartButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const onRemoveToCart = () => {
    removeProductFromCart(id);
    toast(`Elminado del carrito`, {
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
    router.refresh();
  };

  return (
    <Button onClick={onRemoveToCart} size={"icon"} variant={"destructive"}>
      <Trash2Icon size={20} />
    </Button>
  );
};

export { RemoveToCartButton };
