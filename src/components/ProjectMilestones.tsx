import { FiCheck, FiCircle } from 'react-icons/fi'

interface Milestone {
  id: string
  name: string
  date: string
  completed: boolean
  description?: string
}

interface ProjectMilestonesProps {
  milestones: Milestone[]
  onToggleComplete: (id: string) => void
}

export const ProjectMilestones = ({ milestones, onToggleComplete }: ProjectMilestonesProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Milestones</h2>
      <div className="space-y-4">
        {milestones.map(milestone => (
          <div key={milestone.id} className="border-b border-gray-100 pb-4 last:border-0">
            <div className="flex items-start">
              <button
                onClick={() => onToggleComplete(milestone.id)}
                className="flex-shrink-0 mr-3 mt-1"
              >
                {milestone.completed ? (
                  <FiCheck className="text-green-500 w-5 h-5" />
                ) : (
                  <FiCircle className="text-gray-300 w-5 h-5" />
                )}
              </button>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium">{milestone.name}</h3>
                  <span className="text-sm text-gray-500">{milestone.date}</span>
                </div>
                {milestone.description && (
                  <p className="text-sm text-gray-600 mt-1">{milestone.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
