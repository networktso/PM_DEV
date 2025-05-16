interface ProgressBarProps {
  value: number
  className?: string
}

export const ProgressBar = ({ value, className = '' }: ProgressBarProps) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <div 
        className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
        style={{ width: `${value}%` }}
      ></div>
    </div>
  )
}
