import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { useTheme } from '../ThemeProvider'

const data = [
  { name: 'Jan', progress: 45 },
  { name: 'Feb', progress: 60 },
  { name: 'Mar', progress: 75 },
  { name: 'Apr', progress: 90 },
  { name: 'May', progress: 65 },
  { name: 'Jun', progress: 85 },
]

export function ProjectProgress() {
  const { theme } = useTheme()

  return (
    <div className={`rounded-xl p-6 shadow-sm h-full ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-lg font-semibold mb-4">Project Progress</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'} 
            />
            <YAxis 
              stroke={theme === 'dark' ? '#9CA3AF' : '#6B7280'} 
            />
            <Bar 
              dataKey="progress" 
              fill={theme === 'dark' ? '#818CF8' : '#4F46E5'} 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
