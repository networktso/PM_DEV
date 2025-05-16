import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  MessageSquare, 
  KanbanSquare, 
  FileImage, 
  FileVideo,
  ChevronRight
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">ProjectFlow</h1>
      </div>
      <div className="mt-4">
        <NavItem to="/" icon={<LayoutDashboard size={18} />} text="Dashboard" />
        <NavItem to="/projects" icon={<KanbanSquare size={18} />} text="Projects" />
        <NavItem to="/clients" icon={<Users size={18} />} text="Clients" />
        <NavItem to="/documents" icon={<FileText size={18} />} text="Documents" />
        <NavItem to="/design-feedback" icon={<FileImage size={18} />} text="Design Feedback" />
        <NavItem to="/video-reviews" icon={<FileVideo size={18} />} text="Video Reviews" />
        <NavItem to="/team-chat" icon={<MessageSquare size={18} />} text="Team Chat" />
        <div className="mt-8 border-t border-gray-200 pt-4">
          <NavItem to="/settings" icon={<Settings size={18} />} text="Settings" />
        </div>
      </div>
    </nav>
  )
}

const NavItem = ({ to, icon, text }: { to: string, icon: React.ReactNode, text: string }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => 
        `flex items-center justify-between px-6 py-2.5 text-sm font-medium transition-colors
        ${isActive ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:bg-gray-50'}`
      }
    >
      <div className="flex items-center">
        <span className="mr-3">{icon}</span>
        <span>{text}</span>
      </div>
      <ChevronRight size={16} className="text-gray-400" />
    </NavLink>
  )
}
