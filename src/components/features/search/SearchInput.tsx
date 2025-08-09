import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  className?: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        className={cn(
          "placeholder:text-muted-foreground/60 h-12 flex-1 border-none bg-transparent px-2 py-2 text-lg outline-none sm:h-14 sm:text-xl md:text-xl",
          className,
        )}
        style={{
          fontSize: "clamp(18px, 4vw, 28px)",
          lineHeight: "1.2",
        }}
        {...props}
      />
    );
  },
);

SearchInput.displayName = "SearchInput";

export { SearchInput };
