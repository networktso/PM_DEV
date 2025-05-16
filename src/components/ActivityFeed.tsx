import { Activity, Clock, MessageSquare } from 'lucide-react'

export function ActivityFeed() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <div className="flex items-center justify-center rounded-full bg-gray-100 p-2">
          <Activity className="h-4 w-4" />
        </div>
        <div>
          <p className="text-sm font-medium">Project created</p>
          <p className="text-xs text-gray-500">2 hours ago</p>
        </div>
      </div>
    </div>
  )
}
