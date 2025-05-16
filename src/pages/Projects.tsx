import { useState } from 'react'
import { Button } from '../components/Button'
import { SearchInput } from '../components/SearchInput'
import { KanbanBoard } from '../components/KanbanBoard'
import { ProjectTimeline } from '../components/ProjectTimeline'
import { ProjectTeam } from '../components/ProjectTeam'
import { ProjectFiles } from '../components/ProjectFiles'
import { ProjectDiscussion } from '../components/ProjectDiscussion'
import { ProjectSettings } from '../components/ProjectSettings'
import { Tabs } from '../components/Tabs'
import { ProjectOverview } from '../components/ProjectOverview'
import { FiPlus } from 'react-icons/fi'

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'kanban', label: 'Tasks' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'team', label: 'Team' },
  { id: 'files', label: 'Files' },
  { id: 'discussion', label: 'Discussion' },
  { id: 'settings', label: 'Settings' }
]

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [projects, setProjects] = useState([
    {
      id: '1',
      name: 'Website Redesign',
      client: 'Acme Corp',
      status: 'in-progress',
      progress: 75,
      dueDate: 'Dec 15, 2023',
      startDate: 'Oct 1, 2023',
      description: 'Complete redesign of corporate website with new branding and improved UX',
      budget: '$15,000',
      spent: '$11,250',
      risks: 3,
      documents: 12,
      team: [
        { id: '1', name: 'Alex Johnson', role: 'Designer', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
        { id: '2', name: 'Sarah Miller', role: 'Developer', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
        { id: '3', name: 'Michael Chen', role: 'PM', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' }
      ],
      milestones: [
        { id: '1', name: 'Design Approval', date: 'Oct 15, 2023', completed: true },
        { id: '2', name: 'Development Complete', date: 'Nov 30, 2023', completed: false },
        { id: '3', name: 'Client Review', date: 'Dec 5, 2023', completed: false }
      ]
    },
    {
      id: '2',
      name: 'Mobile App Development',
      client: 'Startup XYZ',
      status: 'planning',
      progress: 20,
      dueDate: 'Feb 28, 2024',
      startDate: 'Jan 5, 2024',
      description: 'Build cross-platform mobile application for product management with offline support',
      budget: '$25,000',
      spent: '$2,500',
      risks: 5,
      documents: 8,
      team: [
        { id: '4', name: 'Emma Wilson', role: 'Developer', avatar: 'https://randomuser.me/api/portraits/women/33.jpg' },
        { id: '5', name: 'David Kim', role: 'Designer', avatar: 'https://randomuser.me/api/portraits/men/41.jpg' }
      ],
      milestones: [
        { id: '4', name: 'Requirements Finalized', date: 'Jan 20, 2024', completed: false },
        { id: '5', name: 'Prototype Ready', date: 'Feb 5, 2024', completed: false }
      ]
    },
    {
      id: '3',
      name: 'Marketing Campaign',
      client: 'Global Brands Inc',
      status: 'on-hold',
      progress: 40,
      dueDate: 'Mar 15, 2024',
      startDate: 'Nov 1, 2023',
      description: 'Q1 marketing campaign with social media and influencer partnerships',
      budget: '$50,000',
      spent: '$22,000',
      risks: 2,
      documents: 15,
      team: [
        { id: '6', name: 'Lisa Wong', role: 'Marketing', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
        { id: '7', name: 'James Smith', role: 'Content', avatar: 'https://randomuser.me/api/portraits/men/75.jpg' }
      ],
      milestones: [
        { id: '6', name: 'Creative Approved', date: 'Nov 15, 2023', completed: true },
        { id: '7', name: 'First Wave Launch', date: 'Jan 10, 2024', completed: false }
      ]
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.client.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="ml-0 md:ml-64 p-4 md:p-8 transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Projects</h1>
          <p className="text-gray-500 mt-1">Manage all your active projects</p>
        </div>
        <Button variant="primary" size="md" icon={<FiPlus className="mr-2" />}>
          New Project
        </Button>
      </div>

      <div className="mb-6">
        <SearchInput 
          placeholder="Search projects by name or client..." 
          className="w-full max-w-xl"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        <div className="mt-6">
          {activeTab === 'overview' && <ProjectOverview projects={filteredProjects} />}
          {activeTab === 'kanban' && <KanbanBoard />}
          {activeTab === 'timeline' && <ProjectTimeline />}
          {activeTab === 'team' && <ProjectTeam />}
          {activeTab === 'files' && <ProjectFiles />}
          {activeTab === 'discussion' && <ProjectDiscussion />}
          {activeTab === 'settings' && <ProjectSettings />}
        </div>
      </div>
    </main>
  )
}
