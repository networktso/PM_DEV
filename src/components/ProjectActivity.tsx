import { FiClock, FiCheckCircle, FiAlertCircle, FiMessageSquare } from 'react-icons/fi'

interface ActivityItem {
  id: string
  type: 'status' | 'task' | 'risk' | 'comment'
  user: {
    name: string
    avatar: string
  }
  action: string
  timestamp: string
  details?: string
}

interface ProjectActivityProps {
  activities: ActivityItem[]
}

const activityIcons = {
  status: <FiCheckCircle className="text-blue-500" />,
  task: <FiCheckCircle className="text-green-500" />,
  risk: <FiAlertCircle className="text-red-500" />,
  comment: <FiMessageSquare className="text-purple-500" />
}

export const ProjectActivity = ({ activities }: ProjectActivityProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map(activity => (
          <div key={activity.id} className="border-b border-gray-100 pb-4 last:border-0">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3 mt-1">
                {activityIcons[activity.type]}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img 
                      src={activity.user.avatar} 
                      alt={activity.user.name}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="font-medium">{activity.user.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    <FiClock className="inline mr-1" />
                    {activity.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{activity.action}</p>
                {activity.details && (
                  <p className="text-sm text-gray-500 mt-1">{activity.details}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
