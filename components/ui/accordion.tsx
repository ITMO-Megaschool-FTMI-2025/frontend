"use client";

import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { ChevronDownIcon } from "@astraicons/react/linear";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const accordionVariants = cva(
  "overflow-hidden rounded-2xl disabled:pointer-events-none disabled:opacity-50 transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-grayscale-surface border-1.5 border-transparent hover:border-grayscale-border",
        outline:
          "border-1.5 border-grayscale-border hover:border-grayscale-border-hover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> &
  VariantProps<typeof accordionVariants>
>(({ variant, className, ...props }, ref) => {
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(accordionVariants({ variant }), className)}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

const accordionTriggerVariants = cva(
  "text-grayscale-textIcon-title flex flex-1 items-center justify-between transition-all [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      size: {
        sm: "text-sm p-3",
        md: "text-base p-4",
        lg: "text-lg p-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> &
  VariantProps<typeof accordionTriggerVariants>
>(({ size, className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(accordionTriggerVariants({ size }), className)}
        {...props}
      >
        {children}
        <ChevronDownIcon className="size-6 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const accordionContentVariants = cva("text-grayscale-textIcon-caption ", {
  variants: {
    size: {
      sm: "pb-3 px-3 pt-0",
      md: "pb-4 px-4 pt-0",
      lg: "pb-5 px-5 pt-0",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> &
  VariantProps<typeof accordionContentVariants>
>(({ size, className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn(accordionContentVariants({ size }), className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
});

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
