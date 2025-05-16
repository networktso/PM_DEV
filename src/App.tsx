import { Navigation } from './components/Navigation'
import { ProjectCard } from './components/ProjectCard'
import { FeedbackCard } from './components/FeedbackCard'
import { Clients } from './pages/Clients'
import { ClientProfile } from './pages/ClientProfile'
import { Route, Routes } from 'react-router-dom'
import { Projects } from './pages/Projects'
import { Documents } from './pages/Documents'
import { DesignFeedback } from './pages/DesignFeedback'
import { VideoReviews } from './pages/VideoReviews'
import { TeamChat } from './pages/TeamChat'
import { Settings } from './pages/Settings'

function App() {
  const projects = [
    { title: 'Website Redesign', client: 'Acme Corp', progress: 75, dueDate: 'in 5 days', members: 3 },
    { title: 'Mobile App UI', client: 'Startup XYZ', progress: 30, dueDate: 'in 2 weeks', members: 5 },
    { title: 'Brand Identity', client: 'Fresh Co', progress: 90, dueDate: 'tomorrow', members: 2 }
  ]

  const feedbackItems = [
    { title: 'Homepage Design', type: 'Website', previewUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166', comments: 12, status: 'pending' },
    { title: 'Product Video', type: 'Video', previewUrl: 'https://images.unsplash.com/photo-1574717024453-3545edf62f93', comments: 5, status: 'approved' },
    { title: 'Brochure Layout', type: 'PDF', previewUrl: 'https://images.unsplash.com/photo-1548213238-0da7521bd6e0', comments: 8, status: 'rejected' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <Routes>
        <Route path="/" element={
          <main className="ml-64 p-8">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
              <p className="text-gray-500 mt-1">Welcome back! Here's what's happening with your projects.</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <section className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-medium text-gray-800 mb-4">Active Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-medium text-gray-800 mb-4">Recent Feedback</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {feedbackItems.map((item, index) => (
                    <FeedbackCard key={index} {...item} />
                  ))}
                </div>
              </section>
            </div>
          </main>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/:id" element={<ClientProfile />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/design-feedback" element={<DesignFeedback />} />
        <Route path="/video-reviews" element={<VideoReviews />} />
        <Route path="/team-chat" element={<TeamChat />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}

export default App
