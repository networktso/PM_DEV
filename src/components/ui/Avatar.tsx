import { cn } from '../../lib/utils'

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  children?: React.ReactNode
}

export function Avatar({ className, src, alt, children }: AvatarProps) {
  return (
    <div className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}>
      {src && <img className="aspect-square h-full w-full" src={src} alt={alt} />}
      {children}
    </div>
  )
}

interface AvatarFallbackProps {
  className?: string
  children: React.ReactNode
}

export function AvatarFallback({ className, children }: AvatarFallbackProps) {
  return (
    <div className={cn('flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700', className)}>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{children}</span>
    </div>
  )
}
