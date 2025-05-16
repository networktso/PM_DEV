import * as React from 'react'
import { CheckIcon } from 'lucide-react'
import { cn } from '../../lib/utils'

const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        className={cn(
          'peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
      <CheckIcon className="absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
    </div>
  )
})
Checkbox.displayName = 'Checkbox'

export { Checkbox }
