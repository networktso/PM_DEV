import { GanttChart } from 'lucide-react'

export const ProjectTimeline = () => {
  const milestones = [
    { id: '1', name: 'Project Kickoff', start: '2023-11-01', end: '2023-11-05', progress: 100 },
    { id: '2', name: 'Design Phase', start: '2023-11-06', end: '2023-11-20', progress: 75 },
    { id: '3', name: 'Development', start: '2023-11-21', end: '2023-12-10', progress: 30 },
    { id: '4', name: 'Testing', start: '2023-12-11', end: '2023-12-15', progress: 0 },
    { id: '5', name: 'Launch', start: '2023-12-16', end: '2023-12-18', progress: 0 }
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center mb-6">
        <GanttChart className="text-indigo-600 mr-2" />
        <h2 className="text-lg font-semibold">Project Timeline</h2>
      </div>

      <div className="space-y-6">
        {milestones.map(milestone => (
          <div key={milestone.id}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{milestone.name}</span>
              <span className="text-sm text-gray-500">
                {milestone.start} - {milestone.end}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full" 
                style={{ width: `${milestone.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
