import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const inputVariants = cva(
  "w-full leading-5 outline-none px-4 py-1 text-sm text-grayscale-textIcon-body placeholder:text-grayscale-textIcon-body disabled:pointer-events-none disabled:opacity-50 transition-all",
  {
    variants: {
      variant: {
        default:
          "rounded-2xl border border-transparent bg-grayscale-surface hover:border-grayscale-border-hover",
        underlined:
          "border-b-2 border-grayscale-border bg-transparent hover:border-grayscale-border-hover",
        outline:
          "rounded-2xl border border-grayscale-border hover:border-grayscale-border-hover bg-transparent",
        square:
          "rounded-none border border-grayscale-border bg-grayscale-surface hover:border-grayscale-border-hover",
        pill: "rounded-full border border-grayscale-border bg-transparent hover:border-grayscale-border-hover",
      },
      status: {
        default: "",
        success: "border-success-border hover:border-success-border",
        error: "border-error-border hover:border-error-border",
      },
      size: {
        sm: "h-12",
        md: "h-14",
        lg: "h-16",
      },
    },
    defaultVariants: {
      variant: "default",
      status: "default",
      size: "md",
    },
  }
);

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
  VariantProps<typeof inputVariants> {
  size?: "sm" | "md" | "lg";
  countries?: { code: string }[];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      variant,
      size,
      placeholder,
      status,
      className,
      countries,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {type === "phoneNumber" ? (
          <div className="flex items-center justify-center w-full">
            <select className="absolute bg-[transparent] cursor-pointer">
              {countries?.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.code}
                </option>
              ))}
            </select>
            <input
              ref={ref}
              type={type}
              placeholder={placeholder}
              className={cn(
                inputVariants({ variant, size, status }),
                className
              )}
              {...props}
            />
          </div>
        ) : (
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={cn(inputVariants({ variant, size, status }), className)}
            {...props}
          />
        )}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
