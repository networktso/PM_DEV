import { useState } from 'react'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'
import { Plus, Filter, ArrowUpDown, MoreHorizontal } from 'lucide-react'
import { Input } from './ui/input'
import { useTheme } from './ThemeProvider'

interface Todo {
  id: string
  title: string
  assignee: string
  priority: 'low' | 'medium' | 'high'
  dueDate: string
  completed: boolean
}

export function TodoList({ projectId }: { projectId: string }) {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      title: 'Design homepage mockup',
      assignee: 'Alex Johnson',
      priority: 'high',
      dueDate: '2023-11-15',
      completed: false
    },
    {
      id: '2',
      title: 'Implement authentication',
      assignee: 'Sarah Miller',
      priority: 'high',
      dueDate: '2023-11-18',
      completed: false
    },
    {
      id: '3',
      title: 'Create database schema',
      assignee: 'Michael Chen',
      priority: 'medium',
      dueDate: '2023-11-12',
      completed: true
    },
    {
      id: '4',
      title: 'Write API documentation',
      assignee: 'Emma Wilson',
      priority: 'low',
      dueDate: '2023-11-20',
      completed: false
    }
  ])
  const [newTodo, setNewTodo] = useState('')
  const { theme } = useTheme()

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          title: newTodo,
          assignee: 'Unassigned',
          priority: 'medium',
          dueDate: '2023-11-30',
          completed: false
        }
      ])
      setNewTodo('')
    }
  }

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div className={`space-y-4 ${theme === 'dark' ? 'dark:text-white' : ''}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">To-dos</h3>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <ArrowUpDown className="w-4 h-4 mr-2" />
            Sort
          </Button>
        </div>
      </div>

      <div className="flex space-x-2">
        <Input
          placeholder="Add a new task..."
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && addTodo()}
          className="flex-1"
        />
        <Button onClick={addTodo}>
          <Plus className="w-4 h-4 mr-2" />
          Add
        </Button>
      </div>

      <div className="space-y-2">
        {todos.map(todo => (
          <div
            key={todo.id}
            className={`flex items-center p-3 rounded-lg ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'dark:border-gray-700' : 'border-gray-200'}`}
          >
            <Checkbox
              checked={todo.completed}
              onCheckedChange={() => toggleTodo(todo.id)}
              className="mr-3"
            />
            <div className="flex-1">
              <p className={`font-medium ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                {todo.title}
              </p>
              <div className="flex items-center space-x-4 mt-1">
                <span className="text-sm text-gray-500">{todo.assignee}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    todo.priority === 'high'
                      ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                      : todo.priority === 'medium'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                  }`}
                >
                  {todo.priority}
                </span>
                <span className="text-sm text-gray-500">{todo.dueDate}</span>
              </div>
            </div>
            <button className={`p-1 rounded-full ${theme === 'dark' ? 'dark:hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
