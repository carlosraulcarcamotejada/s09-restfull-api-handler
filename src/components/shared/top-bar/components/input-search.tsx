import { Input } from "@/components/ui/input";

const InputSearch = () => {
  return (
    <Input
      placeholder="Type to search..."
      type="search"
      className="hidden border border-foreground-100/50 dark:border-foreground-100/50 hover:bg-accent hover:text-accent-foreground relative bg-foreground-100/50 dark:bg-foreground-300/50 shadow-none md:w-40 lg:w-56 xl:w-64  lg:block "
    />
  );
};

export { InputSearch };
