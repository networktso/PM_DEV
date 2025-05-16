import { useState } from 'react'
import { MoreVertical, Plus } from 'lucide-react'

const statuses = ['Backlog', 'To Do', 'In Progress', 'Review', 'Done']

export const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Design homepage mockup', status: 'In Progress', priority: 'High', assignee: 'Alex Johnson' },
    { id: '2', title: 'Implement authentication', status: 'To Do', priority: 'High', assignee: 'Sarah Miller' },
    { id: '3', title: 'Create database schema', status: 'Done', priority: 'Medium', assignee: 'Michael Chen' },
    { id: '4', title: 'Write API documentation', status: 'Review', priority: 'Low', assignee: 'Emma Wilson' },
    { id: '5', title: 'Set up CI/CD pipeline', status: 'Backlog', priority: 'Medium', assignee: 'Alex Johnson' }
  ])

  const onDragStart = (e: React.DragEvent, taskId: string) => {
    e.dataTransfer.setData('taskId', taskId)
  }

  const onDrop = (e: React.DragEvent, status: string) => {
    e.preventDefault()
    const taskId = e.dataTransfer.getData('taskId')
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status } : task
    ))
  }

  const allowDrop = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      {statuses.map(status => (
        <div 
          key={status}
          className="bg-gray-50 rounded-lg p-4"
          onDrop={(e) => onDrop(e, status)}
          onDragOver={allowDrop}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">{status}</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={16} />
            </button>
          </div>
          
          <div className="space-y-3">
            {tasks
              .filter(task => task.status === status)
              .map(task => (
                <div
                  key={task.id}
                  className="bg-white p-3 rounded shadow-sm border border-gray-200"
                  draggable
                  onDragStart={(e) => onDragStart(e, task.id)}
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{task.title}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded ${
                      task.priority === 'High' ? 'bg-red-100 text-red-800' :
                      task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">{task.assignee}</div>
                </div>
              ))}
          </div>

          <button className="mt-3 flex items-center text-sm text-gray-500 hover:text-gray-700">
            <Plus size={14} className="mr-1" />
            Add Task
          </button>
        </div>
      ))}
    </div>
  )
}
