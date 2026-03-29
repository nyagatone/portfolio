import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface BrutalBoxProps extends HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const BrutalBox = forwardRef<HTMLDivElement, BrutalBoxProps>(
  ({ className, hoverEffect = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "border-[2px] border-black bg-white shadow-[4px_4px_0px_0px_#000000] transition-all duration-200",
          hoverEffect && "hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
BrutalBox.displayName = "BrutalBox";
