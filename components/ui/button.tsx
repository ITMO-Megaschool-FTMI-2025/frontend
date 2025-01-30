import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 box-border font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-blue-300 focus-visible:ring-2 focus-visible:outline-none",
  {
    variants: {
      variant: {
        primary:
          "bg-button-surface hover:bg-button-surface-hover text-grayscale-textIcon-textButton border-1.5 border-button-border hover:border-button-border-hover",
        secondary:
          "bg-grayscale-surface hover:bg-grayscale-surface-hover text-grayscale-textIcon-body border-1.5 border-grayscale-border hover:border-grayscale-border-hover",
        outline:
          "bg-transparent text-grayscale-textIcon-body border-1.5 border-grayscale-border hover:border-grayscale-border-hover",
        ghost:
          "bg-transparent text-grayscale-textIcon-body hover:bg-grayscale-surface",
        link: "underline underline-offset-4 text-grayscale-textIcon-body hover:text-grayscale-textIcon-title",
        radial:
          "hover:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(15,234,182,50.00)_0%,rgba(15,234,182,0.00)_100%)] transition duration-300 md:text-xl rounded-full",
        danger:
          "bg-error-surface hover:bg-error-surface-hover text-shape-white border-1.5 border-error-border hover:border-error-border-hover",
      },
      size: {
        xs: "px-5 py-2 text-xs leading-[1.5] rounded-2xl",
        sm: "p-5 py-3 text-xs leading-[1.5] rounded-2xl",
        md: "p-5 py-4 text-sm leading-[1.5] rounded-2xl",
        lg: "p-6 py-5 text-base leading-[1.5] rounded-2.5xl",
        xl: "p-6 py-6 text-base leading-[1.5] rounded-3xl",
      },
      pill: {
        true: "rounded-full",
      },
      sharp: {
        true: "rounded-none",
      },
      icon: {
        true: "gap-0 h-fit w-fit",
      },
    },
    compoundVariants: [
      {
        icon: true,
        size: "xs",
        className: "px-2 py-2",
      },
      {
        icon: true,
        size: "sm",
        className: "px-3 py-3",
      },
      {
        icon: true,
        size: "md",
        className: "px-4 py-4",
      },
      {
        icon: true,
        size: "lg",
        className: "px-5 py-5",
      },
      {
        icon: true,
        size: "xl",
        className: "px-6 py-6",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "variant">,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size, pill, sharp, icon, className, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, pill, sharp, icon }),
          className
        )}
        ref={ref}
        {...props}
        type="submit"
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

