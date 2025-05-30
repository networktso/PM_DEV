import { useTheme } from './ThemeProvider'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = ({ label, error, className = '', ...props }: TextareaProps) => {
  const { theme } = useTheme()

  return (
    <div className="w-full">
      {label && (
        <label className={`block text-sm font-medium mb-1 ${
          theme === 'dark' ? 'dark:text-gray-300' : 'text-gray-700'
        }`}>
          {label}
          {props.required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <textarea
        className={`w-full px-3 py-2 rounded-md border ${
          theme === 'dark'
            ? 'dark:bg-gray-700 dark:border-gray-600 dark:text-white'
            : 'border-gray-300 bg-white text-gray-900'
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}
