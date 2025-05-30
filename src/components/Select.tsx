import { useTheme } from './ThemeProvider'

interface SelectProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: Array<{ value: string; label: string }>
  className?: string
}

export const Select = ({
  label,
  name,
  value,
  onChange,
  options,
  className = ''
}: SelectProps) => {
  const { theme } = useTheme()

  return (
    <div className={`space-y-1 ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`block w-full rounded-md border py-2 px-3 text-sm shadow-sm focus:outline-none focus:ring-1 ${
          theme === 'dark'
            ? 'dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500'
            : 'border-gray-300 bg-white text-gray-900 focus:border-indigo-500 focus:ring-indigo-500'
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
