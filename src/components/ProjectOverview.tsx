import { ProjectCard } from './ProjectCard'
import { ProgressBar } from './ProgressBar'
import { Button } from './Button'
import { FiCalendar, FiDollarSign, FiUsers, FiFileText, FiAlertCircle, FiEdit2, FiTrash2 } from 'react-icons/fi'
import { ProjectStatusBadge } from './ProjectStatusBadge'

interface Project {
  id: string
  name: string
  client: string
  status: 'planning' | 'in-progress' | 'on-hold' | 'completed' | 'cancelled'
  progress: number
  dueDate: string
  description: string
  budget: string
  spent: string
  startDate: string
  risks: number
  documents: number
  team: Array<{
    id: string
    name: string
    role: string
    avatar: string
  }>
  milestones: Array<{
    id: string
    name: string
    date: string
    completed: boolean
  }>
}

interface ProjectOverviewProps {
  projects: Project[]
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

export const ProjectOverview = ({ projects, onEdit, onDelete }: ProjectOverviewProps) => {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-indigo-50 dark:bg-indigo-900 mr-4">
              <FiCalendar className="text-indigo-600 dark:text-indigo-300 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-300">Active Projects</p>
              <p className="text-2xl font-semibold dark:text-white">{projects.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-50 dark:bg-green-900 mr-4">
              <FiDollarSign className="text-green-600 dark:text-green-300 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-300">Total Budget</p>
              <p className="text-2xl font-semibold dark:text-white">
                ${projects.reduce((sum, p) => sum + Number(p.budget.replace(/\D/g, '')) / 1000, 0)}k
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-50 dark:bg-yellow-900 mr-4">
              <FiAlertCircle className="text-yellow-600 dark:text-yellow-300 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-300">Open Risks</p>
              <p className="text-2xl font-semibold dark:text-white">
                {projects.reduce((sum, p) => sum + p.risks, 0)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-50 dark:bg-purple-900 mr-4">
              <FiFileText className="text-purple-600 dark:text-purple-300 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-300">Documents</p>
              <p className="text-2xl font-semibold dark:text-white">
                {projects.reduce((sum, p) => sum + p.documents, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg dark:text-white">{project.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{project.client}</p>
                </div>
                <ProjectStatusBadge status={project.status} />
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="dark:text-gray-300">Progress</span>
                  <span className="dark:text-white">{project.progress}%</span>
                </div>
                <ProgressBar value={project.progress} />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Start Date</p>
                  <p className="text-sm font-medium dark:text-white">{project.startDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Due Date</p>
                  <p className="text-sm font-medium dark:text-white">{project.dueDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Budget</p>
                  <p className="text-sm font-medium dark:text-white">{project.budget}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Spent</p>
                  <p className="text-sm font-medium dark:text-white">{project.spent}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiUsers className="text-gray-400 dark:text-gray-300 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {project.team.length} members
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    icon={<FiEdit2 className="w-4 h-4" />}
                    onClick={() => onEdit(project.id)}
                  />
                  <Button 
                    variant="outline" 
                    size="sm" 
                    icon={<FiTrash2 className="w-4 h-4 text-red-500" />}
                    onClick={() => onDelete(project.id)}
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 dark:border-gray-600 px-6 py-3 bg-gray-50 dark:bg-gray-600">
              <div className="flex justify-between items-center">
                <div className="flex -space-x-2">
                  {project.team.slice(0, 5).map(member => (
                    <img
                      key={member.id}
                      src={member.avatar}
                      alt={member.name}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-700"
                    />
                  ))}
                </div>
                {project.team.length > 5 && (
                  <span className="text-xs text-gray-500 dark:text-gray-300">
                    +{project.team.length - 5} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity & Milestones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Recent Activity</h2>
          <div className="space-y-4">
            {projects.slice(0, 3).map(project => (
              <div key={project.id} className="border-b border-gray-100 dark:border-gray-600 pb-4 last:border-0">
                <div className="flex justify-between">
                  <h3 className="font-medium dark:text-white">{project.name}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.dueDate}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{project.description}</p>
                <div className="flex items-center mt-2">
                  <div className="flex -space-x-2 mr-3">
                    {project.team.slice(0, 3).map(member => (
                      <img 
                        key={member.id}
                        src={member.avatar}
                        alt={member.name}
                        className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-700"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {project.team.length > 3 ? `+${project.team.length - 3} more` : ''}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Upcoming Milestones</h2>
          <div className="space-y-4">
            {projects.flatMap(p => p.milestones)
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .slice(0, 4)
              .map(milestone => (
                <div key={milestone.id} className="border-b border-gray-100 dark:border-gray-600 pb-4 last:border-0">
                  <div className="flex items-start">
                    <div className={`w-3 h-3 rounded-full mt-1 mr-3 ${milestone.completed ? 'bg-green-500' : 'bg-indigo-500'}`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium dark:text-white">{milestone.name}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{milestone.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {milestone.completed ? 'Completed' : 'Pending'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
