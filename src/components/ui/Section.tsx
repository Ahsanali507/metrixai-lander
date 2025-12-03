import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: "white" | "gray" | "gradient" | "dark";
  spacing?: "sm" | "md" | "lg" | "xl";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      background = "white",
      spacing = "lg",
      children,
      ...props
    },
    ref
  ) => {
    const backgrounds = {
      white: "bg-white",
      gray: "bg-gray-50",
      gradient: "bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50",
      dark: "bg-gray-900 text-white",
    };

    const spacings = {
      sm: "py-12 sm:py-16",
      md: "py-16 sm:py-20",
      lg: "py-16 sm:py-20 lg:py-24",
      xl: "py-20 sm:py-24 lg:py-32",
    };

    return (
      <section
        ref={ref}
        className={cn(backgrounds[background], spacings[spacing], className)}
        {...props}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
