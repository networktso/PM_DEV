import { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FiCalendar, FiCheckCircle, FiClock, FiAlertTriangle } from 'react-icons/fi'

const timelineEvents = [
  {
    id: '1',
    title: 'Project Kickoff',
    date: 'Oct 1, 2023',
    description: 'Initial meeting with client to discuss project requirements',
    status: 'completed',
    icon: <FiCheckCircle />
  },
  {
    id: '2',
    title: 'Design Phase',
    date: 'Oct 15, 2023',
    description: 'Wireframes and mockups approval',
    status: 'completed',
    icon: <FiCheckCircle />
  },
  {
    id: '3',
    title: 'Development Start',
    date: 'Nov 1, 2023',
    description: 'Frontend and backend development begins',
    status: 'in-progress',
    icon: <FiClock />
  },
  {
    id: '4',
    title: 'Client Review',
    date: 'Dec 5, 2023',
    description: 'First client demo and feedback session',
    status: 'upcoming',
    icon: <FiCalendar />
  },
  {
    id: '5',
    title: 'Potential Risk',
    date: 'Dec 10, 2023',
    description: 'Content delivery delay from client',
    status: 'risk',
    icon: <FiAlertTriangle />
  },
  {
    id: '6',
    title: 'Project Delivery',
    date: 'Dec 15, 2023',
    description: 'Final deployment and handover',
    status: 'upcoming',
    icon: <FiCalendar />
  }
]

export const ProjectTimeline = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredEvents = timelineEvents.filter(event => {
    if (activeFilter === 'all') return true
    return event.status === activeFilter
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Project Timeline</h2>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 text-sm rounded-full ${activeFilter === 'all' ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100'}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-full ${activeFilter === 'completed' ? 'bg-green-100 text-green-800' : 'bg-gray-100'}`}
            onClick={() => setActiveFilter('completed')}
          >
            Completed
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-full ${activeFilter === 'in-progress' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}
            onClick={() => setActiveFilter('in-progress')}
          >
            In Progress
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-full ${activeFilter === 'upcoming' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100'}`}
            onClick={() => setActiveFilter('upcoming')}
          >
            Upcoming
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-full ${activeFilter === 'risk' ? 'bg-red-100 text-red-800' : 'bg-gray-100'}`}
            onClick={() => setActiveFilter('risk')}
          >
            Risks
          </button>
        </div>
      </div>

      <VerticalTimeline layout="1-column-left">
        {filteredEvents.map((event) => (
          <VerticalTimelineElement
            key={event.id}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              border: '1px solid #e5e7eb'
            }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            date={event.date}
            iconStyle={{
              background: 
                event.status === 'completed' ? '#10b981' :
                event.status === 'in-progress' ? '#3b82f6' :
                event.status === 'risk' ? '#ef4444' : '#f59e0b',
              color: '#fff'
            }}
            icon={event.icon}
          >
            <h3 className="vertical-timeline-element-title font-semibold">
              {event.title}
            </h3>
            <p className="vertical-timeline-element-subtitle text-gray-500 text-sm">
              {event.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}
