import { useState } from 'react'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from './ThemeProvider'

interface Event {
  id: string
  title: string
  date: Date
  color: string
}

export function CalendarView() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const { theme } = useTheme()

  const events: Event[] = [
    {
      id: '1',
      title: 'Team Meeting',
      date: new Date(new Date().setDate(new Date().getDate() + 2)),
      color: 'bg-blue-500'
    },
    {
      id: '2',
      title: 'Project Deadline',
      date: new Date(new Date().setDate(new Date().getDate() + 5)),
      color: 'bg-red-500'
    },
    {
      id: '3',
      title: 'Client Call',
      date: new Date(new Date().setDate(new Date().getDate() + 10)),
      color: 'bg-green-500'
    }
  ]

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))

  const getEventsForDay = (day: Date) => {
    return events.filter(event => isSameDay(event.date, day))
  }

  return (
    <div className={`rounded-lg border ${theme === 'dark' ? 'dark:border-gray-700' : 'border-gray-200'} p-4 ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={prevMonth}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={nextMonth}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-medium text-sm py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {daysInMonth.map(day => {
          const dayEvents = getEventsForDay(day)
          const isCurrentMonth = isSameMonth(day, currentMonth)
          
          return (
            <div
              key={day.toString()}
              className={`min-h-24 p-1 border rounded ${isCurrentMonth ? (theme === 'dark' ? 'dark:border-gray-600' : 'border-gray-200') : (theme === 'dark' ? 'dark:border-gray-800 text-gray-500' : 'border-gray-100 text-gray-400')} ${theme === 'dark' ? 'dark:hover:bg-gray-700' : 'hover:bg-gray-50'}`}
            >
              <div className="text-right text-sm mb-1">
                {format(day, 'd')}
              </div>
              <div className="space-y-1">
                {dayEvents.map(event => (
                  <div
                    key={event.id}
                    className={`text-xs p-1 rounded truncate ${event.color} text-white`}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
