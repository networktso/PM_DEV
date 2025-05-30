import { FiEdit2, FiTrash2 } from 'react-icons/fi'

interface Task {
  id: string
  title: string
  description: string
  priority: string
  assignee: {
    name: string
    avatar: string
  } | null
  dueDate: string | null
}

interface TaskCardProps {
  task: Task
}

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
      <div className="flex justify-between items-start">
        <h3 className="font-medium">{task.title}</h3>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-gray-600">
            <FiEdit2 size={16} />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <FiTrash2 size={16} />
          </button>
        </div>
      </div>
      {task.description && (
        <p className="text-sm text-gray-500 mt-2">{task.description}</p>
      )}
      {task.assignee && (
        <div className="flex items-center mt-3">
          <img 
            src={task.assignee.avatar} 
            alt={task.assignee.name}
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-sm text-gray-600">{task.assignee.name}</span>
        </div>
      )}
      {task.dueDate && (
        <div className="mt-3 text-xs text-gray-500">
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </div>
      )}
    </div>
  )
}
