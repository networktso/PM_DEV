import { useTheme } from '../components/ThemeProvider'

export function TasksPage() {
  const { theme } = useTheme()

  return (
    <div className={`space-y-6 ${theme === 'dark' ? 'dark:text-white' : ''}`}>
      <h1 className="text-2xl font-bold">Tasks</h1>
      <div className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
        <p>Your assigned tasks will be displayed here.</p>
      </div>
    </div>
  )
}
