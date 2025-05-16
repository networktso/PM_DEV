import { Button } from '../components/Button'
import { ProjectCard } from '../components/ProjectCard'
import { FeedbackCard } from '../components/FeedbackCard'

const client = {
  id: '1',
  name: 'Acme Corporation',
  email: 'contact@acme.com',
  phone: '(555) 123-4567',
  website: 'acme.com',
  projects: 3,
  lastActive: '2 days ago',
  avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200',
  description: 'Leading manufacturer of innovative products since 1985',
  teamMembers: [
    { name: 'John Smith', role: 'CEO', email: 'john@acme.com' },
    { name: 'Sarah Johnson', role: 'Marketing Director', email: 'sarah@acme.com' }
  ]
}

const projects = [
  { title: 'Website Redesign', progress: 75, dueDate: 'in 5 days', members: 3 },
  { title: 'Product Packaging', progress: 30, dueDate: 'in 2 weeks', members: 2 }
]

const feedbackItems = [
  { title: 'Homepage Design', type: 'Website', previewUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166', comments: 12, status: 'pending' },
  { title: 'Product Video', type: 'Video', previewUrl: 'https://images.unsplash.com/photo-1574717024453-3545edf62f93', comments: 5, status: 'approved' }
]

export const ClientProfile = () => {
  return (
    <div className="p-8">
      <div className="flex items-start mb-8">
        <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden mr-6">
          <img src={client.avatar} alt={client.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{client.name}</h1>
          <p className="text-gray-600 mb-4">{client.description}</p>
          <div className="flex space-x-4">
            <Button size="sm">Edit Profile</Button>
            <Button variant="outline" size="sm">Message Team</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
            <div className="grid grid-cols-1 gap-4">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} client={client.name} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Recent Feedback</h2>
            <div className="grid grid-cols-1 gap-4">
              {feedbackItems.map((item, index) => (
                <FeedbackCard key={index} {...item} />
              ))}
            </div>
          </section>
        </div>

        <div>
          <section className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <p className="text-sm"><span className="font-medium">Email:</span> {client.email}</p>
              <p className="text-sm"><span className="font-medium">Phone:</span> {client.phone}</p>
              <p className="text-sm"><span className="font-medium">Website:</span> {client.website}</p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">Team Members</h3>
            <div className="space-y-4">
              {client.teamMembers.map((member, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
