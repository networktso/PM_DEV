import { useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { Select } from './Select'
import { Textarea } from './Textarea'
import { DatePicker } from './DatePicker'
import { FiX } from 'react-icons/fi'
import { useTheme } from './ThemeProvider'

interface ProjectFormProps {
  initialData?: {
    id?: string
    name: string
    client: string
    description: string
    status: string
    startDate: string
    dueDate: string
    budget: string
  }
  onCancel: () => void
  onSubmit: (data: any) => void
}

const statusOptions = [
  { value: 'planning', label: 'Planning' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'on-hold', label: 'On Hold' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' }
]

export const ProjectForm = ({ initialData, onCancel, onSubmit }: ProjectFormProps) => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState(initialData || {
    name: '',
    client: '',
    description: '',
    status: 'planning',
    startDate: new Date().toISOString().split('T')[0],
    dueDate: '',
    budget: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (name: string, date: string) => {
    setFormData(prev => ({ ...prev, [name]: date }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className={`relative rounded-lg shadow-xl p-6 w-full max-w-2xl ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
        <button 
          onClick={onCancel}
          className={`absolute top-4 right-4 p-1 rounded-full ${theme === 'dark' ? 'dark:hover:bg-gray-700' : 'hover:bg-gray-100'}`}
        >
          <FiX className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-6">
          {initialData?.id ? 'Edit Project' : 'Create New Project'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Project Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Input
              label="Client"
              name="client"
              value={formData.client}
              onChange={handleChange}
              required
            />
          </div>

          <Textarea
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={statusOptions}
            />

            <DatePicker
              label="Start Date"
              value={formData.startDate}
              onChange={(date) => handleDateChange('startDate', date)}
            />

            <DatePicker
              label="Due Date"
              value={formData.dueDate}
              onChange={(date) => handleDateChange('dueDate', date)}
              minDate={formData.startDate}
              required
            />
          </div>

          <Input
            label="Budget ($)"
            name="budget"
            type="number"
            value={formData.budget}
            onChange={handleChange}
            prefix="$"
          />

          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {initialData?.id ? 'Update Project' : 'Create Project'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
