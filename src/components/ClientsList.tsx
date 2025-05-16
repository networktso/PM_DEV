import { Briefcase, Mail, Phone, Globe } from 'lucide-react'

interface Client {
  id: string
  name: string
  email: string
  phone: string
  website: string
  projects: number
  lastActive: string
  avatar: string
}

interface ClientsListProps {
  clients: Client[]
}

export const ClientsList = ({ clients }: ClientsListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clients.map((client) => (
        <div key={client.id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
              <img src={client.avatar} alt={client.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{client.name}</h3>
              <p className="text-sm text-gray-500">{client.projects} active projects</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Mail className="w-4 h-4 mr-2" />
              <span>{client.email}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              <span>{client.phone}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Globe className="w-4 h-4 mr-2" />
              <span>{client.website}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <span className="text-xs text-gray-500">Last active {client.lastActive}</span>
            <button className="text-sm text-indigo-600 hover:text-indigo-800">
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
