import { useParams } from 'react-router-dom'
import { useTheme } from '../components/ThemeProvider'

export function ProjectPage() {
  const { id } = useParams()
  const { theme } = useTheme()

  return (
    <div className={`space-y-6 ${theme === 'dark' ? 'dark:text-white' : ''}`}>
      <h1 className="text-2xl font-bold">Project {id}</h1>
      <div className={`p-6 rounded-xl shadow-sm ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
        <p>Project details and tasks will be displayed here.</p>
      </div>
    </div>
  )
}
