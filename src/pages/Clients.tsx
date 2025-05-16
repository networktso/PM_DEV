import { ClientsList } from '../components/ClientsList'
import { SearchInput } from '../components/SearchInput'
import { Button } from '../components/Button'

const clients = [
  {
    id: '1',
    name: 'Acme Corporation',
    email: 'contact@acme.com',
    phone: '(555) 123-4567',
    website: 'acme.com',
    projects: 3,
    lastActive: '2 days ago',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200'
  },
  {
    id: '2',
    name: 'Globex Industries',
    email: 'info@globex.com',
    phone: '(555) 987-6543',
    website: 'globex.com',
    projects: 5,
    lastActive: '1 week ago',
    avatar: 'https://images.unsplash.com/photo-1565884280295-98eb83e41c65?w=200'
  },
  {
    id: '3',
    name: 'Initech',
    email: 'hello@initech.com',
    phone: '(555) 456-7890',
    website: 'initech.com',
    projects: 2,
    lastActive: 'yesterday',
    avatar: 'https://images.unsplash.com/photo-1560356674-1f0d19c730b9?w=200'
  }
]

export const Clients = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Clients</h1>
          <p className="text-gray-600">Manage all your client relationships</p>
        </div>
        <Button>Add New Client</Button>
      </div>

      <div className="mb-6">
        <SearchInput placeholder="Search clients..." />
      </div>

      <ClientsList clients={clients} />
    </div>
  )
}
