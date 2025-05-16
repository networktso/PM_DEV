import { useTheme } from './ThemeProvider'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

const data = [
  { name: 'Admin', value: 2 },
  { name: 'Developer', value: 5 },
  { name: 'Designer', value: 3 },
  { name: 'Manager', value: 1 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export function TeamRoles() {
  const { theme } = useTheme()

  return (
    <div className={`rounded-lg border ${theme === 'dark' ? 'dark:border-gray-700' : 'border-gray-200'} ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'} p-4`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Team Roles</h3>
        <Button variant="outline" size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Role
        </Button>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
