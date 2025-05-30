import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar'

interface TeamMember {
  id: number
  name: string
  role: string
  avatar: string
  status: 'online' | 'offline' | 'busy'
  tasks: number
}

export function TeamMembers() {
  const members: TeamMember[] = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Frontend Developer',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'online',
      tasks: 12
    },
    {
      id: 2,
      name: 'Sarah Miller',
      role: 'UI Designer',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'busy',
      tasks: 8
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Backend Developer',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'online',
      tasks: 15
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'Project Manager',
      avatar: 'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'offline',
      tasks: 5
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500'
      case 'busy': return 'bg-yellow-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Team Members</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {members.map(member => (
          <div key={member.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="relative">
              <Avatar>
                <AvatarImage src={member.avatar} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${getStatusColor(member.status)}`}></div>
            </div>
            <div>
              <p className="font-medium dark:text-white">{member.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{member.tasks} tasks</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
