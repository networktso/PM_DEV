import { Button } from './ui/button'
import { Star, MoreVertical, Settings, Users, Share2 } from 'lucide-react'
import { useTheme } from './ThemeProvider'

interface ProjectHeaderProps {
  projectId: string
}

export function ProjectHeader({ projectId }: ProjectHeaderProps) {
  const { theme } = useTheme()

  return (
    <div className={`flex items-center justify-between ${theme === 'dark' ? 'dark:text-white' : ''}`}>
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold">Project {projectId}</h2>
        <button className={`p-1 rounded-full ${theme === 'dark' ? 'dark:hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
          <Star className="w-5 h-5" />
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
        <Button variant="outline" size="sm">
          <Users className="w-4 h-4 mr-2" />
          Members
        </Button>
        <Button variant="outline" size="sm">
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
        <button className={`p-2 rounded-full ${theme === 'dark' ? 'dark:hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
