import { Clock, CheckCircle, PlusCircle, MessageSquare } from 'react-icons/lucide-react'

interface ActivityItem {
  id: number
  user: string
  action: string
  project: string
  time: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export function ActivityFeed() {
  const activities: ActivityItem[] = [
    {
      id: 1,
      user: 'Alex Johnson',
      action: 'completed task',
      project: 'Website Redesign',
      time: '10 min ago',
      icon: CheckCircle,
      color: 'text-green-500'
    },
    {
      id: 2,
      user: 'Sarah Miller',
      action: 'added new task',
      project: 'Mobile App',
      time: '25 min ago',
      icon: PlusCircle,
      color: 'text-blue-500'
    },
    {
      id: 3,
      user: 'Michael Chen',
      action: 'commented on',
      project: 'Dashboard UI',
      time: '1 hour ago',
      icon: MessageSquare,
      color: 'text-purple-500'
    },
    {
      id: 4,
      user: 'Emma Wilson',
      action: 'started working on',
      project: 'API Integration',
      time: '2 hours ago',
      icon: Clock,
      color: 'text-yellow-500'
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map(activity => (
          <div key={activity.id} className="flex items-start">
            <div className={`p-2 rounded-lg mr-3 ${activity.color} bg-opacity-20`}>
              <activity.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm dark:text-gray-300">
                <span className="font-medium dark:text-white">{activity.user}</span> {activity.action} <span className="font-medium dark:text-white">{activity.project}</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
