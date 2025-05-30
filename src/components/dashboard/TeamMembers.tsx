import { useTheme } from '../ThemeProvider'

const members = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'UI Designer',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  },
  {
    id: 2,
    name: 'Sarah Miller',
    role: 'Frontend Developer',
    status: 'active',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Backend Developer',
    status: 'busy',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
  },
  {
    id: 4,
    name: 'Emma Wilson',
    role: 'Project Manager',
    status: 'meeting',
    avatar: 'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg'
  }
]

export function TeamMembers() {
  const { theme } = useTheme()

  const statusColors = {
    active: 'bg-green-500',
    busy: 'bg-yellow-500',
    meeting: 'bg-blue-500'
  }

  return (
    <div className={`rounded-xl p-6 shadow-sm ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-lg font-semibold mb-4">Team Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {members.map((member) => (
          <div key={member.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="relative">
              <img 
                src={member.avatar} 
                alt={member.name} 
                className="w-12 h-12 rounded-full"
              />
              <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 ${theme === 'dark' ? 'dark:border-gray-800' : 'border-white'} ${statusColors[member.status]}`}></span>
            </div>
            <div>
              <p className="font-medium">{member.name}</p>
              <p className={`text-sm ${theme === 'dark' ? 'dark:text-gray-400' : 'text-gray-500'}`}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
