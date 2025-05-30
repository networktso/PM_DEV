import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectDetails } from '../components/ProjectDetails'
import { ProjectForm } from '../components/ProjectForm'
import { ProjectActivity } from '../components/ProjectActivity'
import { ProjectMilestones } from '../components/ProjectMilestones'
import { Button } from '../components/Button'
import { Tabs } from '../components/Tabs'

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'tasks', label: 'Tasks' },
  { id: 'team', label: 'Team' },
  { id: 'files', label: 'Files' },
  { id: 'settings', label: 'Settings' }
]

export const ProjectDetailPage = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)
  const [project, setProject] = useState({
    id: id || '',
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
    ]
  })

  const [milestones, setMilestones] = useState([
    { id: '1', name: 'Design Approval', date: 'Oct 15, 2023', completed: true, description: 'Client approved final designs' },
    { id: '2', name: 'Development Complete', date: 'Nov 30, 2023', completed: false, description: 'All features implemented' },
    { id: '3', name: 'Client Review', date: 'Dec 5, 2023', completed: false, description: 'Final review before launch' }
  ])

  const [activities, setActivities] = useState([
    { 
      id: '1', 
      type: 'status', 
      user: { name: 'Michael Chen', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
      action: 'Changed project status to In Progress',
      timestamp: '2 hours ago'
    },
    { 
      id: '2', 
      type: 'task', 
      user: { name: 'Sarah Miller', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
      action: 'Completed task "Homepage design"',
      timestamp: '1 day ago',
      details: 'All design assets approved and uploaded'
    },
    { 
      id: '3', 
      type: 'risk', 
      user: { name: 'Alex Johnson', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      action: 'Identified new risk "Content delays"',
      timestamp: '3 days ago',
      details: 'Client content team is behind schedule'
    }
  ])

  const handleSaveProject = (updatedProject: any) => {
    setProject(prev => ({ ...prev, ...updatedProject }))
    setIsEditing(false)
  }

  const handleToggleMilestone = (milestoneId: string) => {
    setMilestones(prev => 
      prev.map(m => 
        m.id === milestoneId ? { ...m, completed: !m.completed } : m
      )
    )
  }

  return (
    <div className="space-y-6">
      {isEditing ? (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <ProjectForm 
            initialData={project}
            onSubmit={handleSaveProject}
            onCancel={() => setIsEditing(false)}
          />
        </div>
      ) : (
        <ProjectDetails 
          project={project} 
          onEdit={() => setIsEditing(true)}
        />
      )}

      <div className="bg-white rounded-lg shadow-sm p-6">
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        <div className="mt-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ProjectActivity activities={activities} />
              <ProjectMilestones 
                milestones={milestones} 
                onToggleComplete={handleToggleMilestone}
              />
            </div>
          )}
          {activeTab === 'tasks' && (
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-gray-500">Tasks will be displayed here</p>
            </div>
          )}
          {activeTab === 'team' && (
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-gray-500">Team members will be displayed here</p>
            </div>
          )}
          {activeTab === 'files' && (
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-gray-500">Project files will be displayed here</p>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-gray-500">Project settings will be displayed here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
