import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[55px] w-full rounded-md border border-input border-[[#1c242e]] placeholder-shown:text-[#1c242e] bg-background px-3 py-2 text-l ring-offset-background file:border-0 file:bg-transparent file:text-l file:font-medium file:text-foreground  focus-visible:outline-none  focus-visible:ring-offset-2 focus-visible:lg focus-visible: shadow-teal-500/50  disabled:cursor-not-allowed disabled:opacity-50 md:text-l",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
