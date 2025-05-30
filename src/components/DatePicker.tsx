import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { Input } from './Input'
import { format } from 'date-fns'

interface DatePickerProps {
  label: string
  value: string
  onChange: (date: string) => void
  minDate?: string
  required?: boolean
  className?: string
  name?: string
}

export const DatePicker = ({
  label,
  value,
  onChange,
  minDate,
  required = false,
  className = '',
  name
}: DatePickerProps) => {
  const { theme } = useTheme()
  const [showPicker, setShowPicker] = useState(false)

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
    setShowPicker(false)
  }

  const formattedDate = value ? format(new Date(value), 'MMM dd, yyyy') : ''

  return (
    <div className={`relative ${className}`}>
      <Input
        label={label}
        value={formattedDate}
        readOnly
        onClick={() => setShowPicker(true)}
        required={required}
        name={name}
        className="cursor-pointer"
      />
      {showPicker && (
        <div 
          className="fixed inset-0 z-50"
          onClick={() => setShowPicker(false)}
        />
      )}
      {showPicker && (
        <div className={`absolute top-full left-0 z-50 mt-1 rounded-md shadow-lg ${
          theme === 'dark' ? 'dark:bg-gray-700' : 'bg-white'
        }`}>
          <input
            type="date"
            value={value}
            onChange={handleDateChange}
            min={minDate}
            className={`block w-full p-2 text-sm rounded-md border ${
              theme === 'dark'
                ? 'dark:bg-gray-700 dark:border-gray-600 dark:text-white'
                : 'border-gray-300 bg-white text-gray-900'
            }`}
          />
        </div>
      )}
    </div>
  )
}
