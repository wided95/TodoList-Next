import React, { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
//allows for easy styling of the label based on its different states.
const statusVariants = cva(
  "flex items-center justify-center text-white text-base font-inter font-medium rounded-full  py-1 w-24",

  {
    variants: {
      variant: {
        active: "bg-custom3",
        pending: "bg-custm4",
        closed: "bg-custom5",
      },
      children: {
        pending: "pending",
        active: "active",
        closed: "closed",
      },
    },
    defaultVariants: {
      variant: "pending",
      children: "pending",
    },
  }
);
export interface StatusTaskLabelProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "children">,
    VariantProps<typeof statusVariants> {
  variant?: "active" | "pending" | "closed";
  children?: 'active' | 'pending' | 'closed';
}

const StatusTaskLabel: React.FC<StatusTaskLabelProps> = ({
  className,

  variant,
  children,
  ...props
}) => {
  return (
    <label
      {...props}
      className={cn(statusVariants({ variant, className }))}
    >
      {children}
    </label>
  );
};

export default StatusTaskLabel;
