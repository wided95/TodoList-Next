import React, { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
const statusVariants = cva(
  "flex items-center text-white font-inter text-l font-bold  rounded-full px-5 py-1",

  {
    variants: {
      variant: {
        active: "bg-custom3 text-white text-base font-medium",
        pending: "bg-custm4 text-white text-base font-medium",
        closed: "bg-custom5 text-white text-base font-medium",
      },
      children: {
        pending: "Pending",
        active: "Active",
        
        closed: "Closed",
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
    VariantProps<typeof statusVariants> {}

const StatusTaskLabel: React.FC<StatusTaskLabelProps> = ({
  className,

  variant,
  children,
  ...props
}) => {
  return (
    <label {...props} className={cn(statusVariants({ variant, className }))}>
      {children}
    </label>
  );
};

export default StatusTaskLabel;
