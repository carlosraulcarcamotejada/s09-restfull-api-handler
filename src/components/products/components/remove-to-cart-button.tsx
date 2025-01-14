"use client";
import { Button } from "@/components/ui/button";
import { removeProductFromCart } from "@/helpers/shopping-cart/shopping-cart";
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const RemoveToCartButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const onRemoveToCart = () => {
    removeProductFromCart(id);
    toast(`Elminado del shopping cart`, {
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
    router.refresh();
  };

  return (
    <Button onClick={onRemoveToCart} size={"icon"} variant={"destructive"}>
      <TrashIcon size={20} />
    </Button>
  );
};

export { RemoveToCartButton };
