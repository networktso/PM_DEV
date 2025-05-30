import { useTheme } from '../ThemeProvider'

const activities = [
  {
    id: 1,
    user: 'Alex Johnson',
    action: 'completed',
    task: 'Dashboard UI Design',
    time: '2 hours ago',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  },
  {
    id: 2,
    user: 'Sarah Miller',
    action: 'commented on',
    task: 'Project Roadmap',
    time: '4 hours ago',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
  },
  {
    id: 3,
    user: 'Michael Chen',
    action: 'started',
    task: 'API Integration',
    time: '6 hours ago',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
  },
  {
    id: 4,
    user: 'Emma Wilson',
    action: 'updated',
    task: 'Team Schedule',
    time: '1 day ago',
    avatar: 'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg'
  }
]

export function ActivityFeed() {
  const { theme } = useTheme()

  return (
    <div className={`rounded-xl p-6 shadow-sm h-full ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start">
            <img 
              src={activity.avatar} 
              alt={activity.user} 
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className={`text-sm ${theme === 'dark' ? 'dark:text-gray-300' : 'text-gray-700'}`}>
                <span className="font-medium">{activity.user}</span> {activity.action} <span className="font-medium">{activity.task}</span>
              </p>
              <p className={`text-xs ${theme === 'dark' ? 'dark:text-gray-400' : 'text-gray-500'}`}>{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
