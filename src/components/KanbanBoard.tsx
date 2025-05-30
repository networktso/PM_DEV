import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { FiPlus } from 'react-icons/fi'
import { TaskCard } from './TaskCard'

const initialColumns = {
  backlog: {
    id: 'backlog',
    title: 'Backlog',
    tasks: [
      {
        id: '1',
        title: 'Design homepage mockups',
        description: 'Create wireframes for the homepage layout',
        priority: 'high',
        assignee: {
          name: 'Alex Johnson',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        dueDate: '2023-12-15'
      },
      {
        id: '2',
        title: 'Set up database schema',
        description: 'Define tables and relationships',
        priority: 'medium',
        assignee: {
          name: 'Sarah Miller',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        dueDate: '2023-12-18'
      }
    ]
  },
  inProgress: {
    id: 'inProgress',
    title: 'In Progress',
    tasks: [
      {
        id: '3',
        title: 'Implement authentication',
        description: 'Set up JWT auth flow',
        priority: 'high',
        assignee: {
          name: 'Michael Chen',
          avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
        },
        dueDate: '2023-12-10'
      }
    ]
  },
  review: {
    id: 'review',
    title: 'Review',
    tasks: []
  },
  done: {
    id: 'done',
    title: 'Done',
    tasks: [
      {
        id: '4',
        title: 'Project setup',
        description: 'Initialize repo and basic structure',
        priority: 'low',
        assignee: {
          name: 'Emma Wilson',
          avatar: 'https://randomuser.me/api/portraits/women/33.jpg'
        },
        dueDate: '2023-12-05'
      }
    ]
  }
}

export const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialColumns)
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result

    if (!destination) return

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return
    }

    const start = columns[source.droppableId]
    const finish = columns[destination.droppableId]

    if (start === finish) {
      const newTasks = Array.from(start.tasks)
      const [removed] = newTasks.splice(source.index, 1)
      newTasks.splice(destination.index, 0, removed)

      const newColumn = {
        ...start,
        tasks: newTasks
      }

      setColumns({
        ...columns,
        [newColumn.id]: newColumn
      })
      return
    }

    const startTasks = Array.from(start.tasks)
    const [removed] = startTasks.splice(source.index, 1)
    const newStart = {
      ...start,
      tasks: startTasks
    }

    const finishTasks = Array.from(finish.tasks)
    finishTasks.splice(destination.index, 0, removed)
    const newFinish = {
      ...finish,
      tasks: finishTasks
    }

    setColumns({
      ...columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish
    })
  }

  const addTask = (columnId) => {
    if (!newTaskTitle.trim()) return

    const newTask = {
      id: `task-${Date.now()}`,
      title: newTaskTitle,
      description: '',
      priority: 'medium',
      assignee: null,
      dueDate: null
    }

    setColumns(prev => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        tasks: [...prev[columnId].tasks, newTask]
      }
    }))
    setNewTaskTitle('')
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Project Tasks</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="New task title..."
            className="px-3 py-2 border rounded-md text-sm"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <button
            className="px-3 py-2 bg-indigo-600 text-white rounded-md text-sm"
            onClick={() => addTask('backlog')}
          >
            <FiPlus className="inline mr-1" />
            Add Task
          </button>
        </div>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.values(columns).map((column) => (
            <Droppable droppableId={column.id} key={column.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <h3 className="font-medium mb-4">{column.title}</h3>
                  <div className="space-y-3">
                    {column.tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TaskCard task={task} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}
