import { useTheme } from './ThemeProvider'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export const ProjectTeam = () => {
  const { theme } = useTheme()
  const team = [
    { id: '1', name: 'Alex Johnson', role: 'Designer', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' },
    { id: '2', name: 'Sarah Miller', role: 'Developer', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
    { id: '3', name: 'Michael Chen', role: 'Product Manager', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg' },
    { id: '4', name: 'Emma Wilson', role: 'Developer', avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg' },
    { id: '5', name: 'David Kim', role: 'QA Engineer', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' }
  ]

  return (
    <div className={`rounded-lg border ${theme === 'dark' ? 'dark:border-gray-700' : 'border-gray-200'} p-6 ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-lg font-semibold mb-6">Team Members</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map(member => (
          <div key={member.id} className={`flex items-center p-3 border ${theme === 'dark' ? 'dark:border-gray-700' : 'border-gray-200'} rounded-lg ${theme === 'dark' ? 'dark:bg-gray-700' : 'bg-white'}`}>
            <Avatar className="mr-3">
              <AvatarImage src={member.avatar} />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{member.name}</h3>
              <p className={`text-sm ${theme === 'dark' ? 'dark:text-gray-400' : 'text-gray-500'}`}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
