"use client";

import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "glass";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = false, children, ...props }, ref) => {
    const variants = {
      default: "bg-white border border-gray-100",
      elevated: "bg-white shadow-lg shadow-gray-900/5",
      outlined: "bg-white border-2 border-gray-200",
      glass: "bg-white/80 backdrop-blur-xl border border-white/20",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl p-6",
          variants[variant],
          hover && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
