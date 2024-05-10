import * as React from "react"

import { cn } from "@/lib/utils"

import { LucideIcon } from "lucide-react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: LucideIcon
  endIcon?: LucideIcon
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    const StartIcon = startIcon
    const EndIcon = endIcon
    return (
      <div
        className={cn(
          "flex items-center rounded-md border border-input bg-background ring-offset-background px-2",
          className
        )}
      >
        {StartIcon && <StartIcon className="text-muted-foreground" size={18} />}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && <EndIcon className="text-muted-foreground" size={18} />}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
