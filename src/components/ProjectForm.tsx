import { useState } from 'react'
import { Input } from './Input'
import { Select } from './Select'
import { Textarea } from './Textarea'
import { DatePicker } from './DatePicker'
import { FiX } from 'react-icons/fi'
import { useTheme } from './ThemeProvider'

interface ProjectFormProps {
  onClose: () => void
  onSubmit: (data: {
    name: string
    description: string
    status: string
    dueDate: string
  }) => void
}

export const ProjectForm = ({ onClose, onSubmit }: ProjectFormProps) => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'not_started',
    dueDate: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${
      theme === 'dark' ? 'dark:bg-black/50' : 'bg-black/50'
    }`}>
      <div className={`relative rounded-lg p-6 w-full max-w-md ${
        theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'
      }`}>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-1 rounded-full ${
            theme === 'dark' ? 'dark:hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <FiX />
        </button>
        <h2 className="text-xl font-bold mb-4">Create New Project</h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="Project Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mb-4"
          />
          <Textarea
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mb-4"
          />
          <Select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            options={[
              { value: 'not_started', label: 'Not Started' },
              { value: 'in_progress', label: 'In Progress' },
              { value: 'completed', label: 'Completed' }
            ]}
            className="mb-4"
          />
          <DatePicker
            label="Due Date"
            name="dueDate"
            value={formData.dueDate}
            onChange={(date) => setFormData(prev => ({ ...prev, dueDate: date }))}
            className="mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Create Project
          </button>
        </form>
      </div>
    </div>
  )
}
