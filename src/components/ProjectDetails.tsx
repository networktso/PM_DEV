import { ProjectStatusBadge } from './ProjectStatusBadge'
import { Button } from './Button'
import { FiCalendar, FiDollarSign, FiUsers, FiFileText, FiAlertCircle } from 'react-icons/fi'

interface ProjectDetailsProps {
  project: {
    id: string
    name: string
    client: string
    status: 'planning' | 'in-progress' | 'on-hold' | 'completed' | 'cancelled'
    progress: number
    dueDate: string
    startDate: string
    description: string
    budget: string
    spent: string
    risks: number
    documents: number
    team: Array<{
      id: string
      name: string
      role: string
      avatar: string
    }>
  }
  onEdit: () => void
}

export const ProjectDetails = ({ project, onEdit }: ProjectDetailsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-lg">{project.name}</h3>
            <p className="text-sm text-gray-500">{project.client}</p>
          </div>
          <ProjectStatusBadge status={project.status} />
        </div>

        <p className="text-sm text-gray-600 mb-4">{project.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray-500">Start Date</p>
            <p className="text-sm font-medium">{project.startDate}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Due Date</p>
            <p className="text-sm font-medium">{project.dueDate}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Budget</p>
            <p className="text-sm font-medium">{project.budget}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Spent</p>
            <p className="text-sm font-medium">{project.spent}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FiUsers className="text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">
                {project.team.length} members
              </span>
            </div>
            <div className="flex items-center">
              <FiAlertCircle className="text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">
                {project.risks} risks
              </span>
            </div>
            <div className="flex items-center">
              <FiFileText className="text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">
                {project.documents} documents
              </span>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={onEdit}>
            Edit Project
          </Button>
        </div>
      </div>

      <div className="border-t border-gray-100 px-6 py-3 bg-gray-50">
        <div className="flex justify-between items-center">
          <div className="flex -space-x-2">
            {project.team.slice(0, 5).map(member => (
              <img
                key={member.id}
                src={member.avatar}
                alt={member.name}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}
          </div>
          {project.team.length > 5 && (
            <span className="text-xs text-gray-500">
              +{project.team.length - 5} more
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
