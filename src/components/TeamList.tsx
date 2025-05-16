import { useTheme } from './ThemeProvider'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { MoreHorizontal, Mail, Phone } from 'lucide-react'
import { Button } from './ui/button'

interface TeamMember {
  id: string
  name: string
  email: string
  phone: string
  role: string
  status: 'active' | 'inactive' | 'on leave'
  avatar: string
  lastActive: string
}

export function TeamList() {
  const { theme } = useTheme()

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Alex Johnson',
      email: 'alex@example.com',
      phone: '+1 (555) 123-4567',
      role: 'Project Manager',
      status: 'active',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      lastActive: '2 hours ago'
    },
    {
      id: '2',
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      phone: '+1 (555) 987-6543',
      role: 'Frontend Developer',
      status: 'active',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      lastActive: '30 minutes ago'
    },
    {
      id: '3',
      name: 'Michael Chen',
      email: 'michael@example.com',
      phone: '+1 (555) 456-7890',
      role: 'Backend Developer',
      status: 'on leave',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      lastActive: '1 day ago'
    }
  ]

  return (
    <div className={`rounded-lg border ${theme === 'dark' ? 'dark:border-gray-700' : 'border-gray-200'} overflow-hidden ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
      <div className="p-4 border-b">
        <h3 className="font-medium">Team Members</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Member</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Active</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teamMembers.map((member) => (
            <TableRow key={member.id}>
              <TableCell>
                <div className="flex items-center">
                  <Avatar className="mr-3">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span>{member.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-4">
                  <a href={`mailto:${member.email}`} className="flex items-center text-sm">
                    <Mail className="w-4 h-4 mr-1" />
                    <span>Email</span>
                  </a>
                  <a href={`tel:${member.phone}`} className="flex items-center text-sm">
                    <Phone className="w-4 h-4 mr-1" />
                    <span>Call</span>
                  </a>
                </div>
              </TableCell>
              <TableCell>{member.role}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  member.status === 'active' ? 'bg-green-100 text-green-800' :
                  member.status === 'on leave' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {member.status}
                </span>
              </TableCell>
              <TableCell>{member.lastActive}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
