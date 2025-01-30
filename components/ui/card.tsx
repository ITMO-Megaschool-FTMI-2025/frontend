import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";


export interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      className={cn(
        "flex flex-col gap-y-4 rounded-[1.25rem] cursor-pointer w-fit",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

Card.displayName = "Card";

const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "border";
    src?: string;
  }
>(({ className, variant = "default", ...props }, ref) => (
  <div
    className={cn(
      "w-full rounded-[1.25rem] overflow-clip",
      variant === "border"
        ? "outline-[3px] outline outline-white/40 -outline-offset-[3px]"
        : "",
      className
    )}
    ref={ref}
    {...props}
  ></div>
));

CardImage.displayName = "CardImage";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("px-1", className)} ref={ref} {...props} />
));

CardContent.displayName = "CardContent";

const CardTitleContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("flex justify-between", className)} ref={ref} {...props} />
));

CardTitleContent.displayName = "CardTitleContent";

const cardTitleVariants = cva(
  "w-full text-grayscale-textIcon-title font-medium",
  {
    variants: {
      size: {
        sm: "text-sm leading-[1.375rem]",
        md: "text-base leading-[1.625rem]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof cardTitleVariants>
>(({ size, className, ...props }, ref) => (
  <h3
    className={cn(cardTitleVariants({ size }), className)}
    ref={ref}
    {...props}
  />
));

CardTitle.displayName = "CardTitle";

const cardDescriptionVariants = cva(
  "text-grayscale-textIcon-body line-clamp-2 overflow-hidden text-ellipsis font-medium",
  {
    variants: {
      size: {
        sm: "text-xs leading-[1.125rem]",
        md: "text-sm leading-[1.5rem]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof cardDescriptionVariants>
>(({ size, className, ...props }, ref) => (
  <p
    className={cn(
      cardDescriptionVariants({ size }),
      "text-grayscale-textIcon-body font-medium",
      className
    )}
    ref={ref}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

const CardTags = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn("flex flex-wrap gap-2 mt-2", className)}
    ref={ref}
    {...props}
  />
));

CardTags.displayName = "CardTags";

const CardSubContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "flex gap-x-2 mt-4 text-sm font-medium leading-6 text-grayscale-textIcon-subtitle",
      className
    )}
    ref={ref}
    {...props}
  />
));

CardSubContent.displayName = "CardSubContent";

export {
  Card,
  CardContent,
  CardDescription,
  CardImage,
  CardSubContent,
  CardTags,
  CardTitle,
  CardTitleContent,
};
