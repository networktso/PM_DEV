import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Button } from './Button'
import { FiPlus, FiMail, FiPhone, FiUser, FiSettings } from 'react-icons/fi'

const teamMembers = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'Lead Designer',
    email: 'alex.johnson@example.com',
    phone: '(555) 123-4567',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    skills: ['UI/UX', 'Figma', 'Prototyping'],
    joinedDate: 'Jan 2022'
  },
  {
    id: '2',
    name: 'Sarah Miller',
    role: 'Frontend Developer',
    email: 'sarah.miller@example.com',
    phone: '(555) 987-6543',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    skills: ['React', 'TypeScript', 'CSS'],
    joinedDate: 'Mar 2022'
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Project Manager',
    email: 'michael.chen@example.com',
    phone: '(555) 456-7890',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    skills: ['Agile', 'Scrum', 'JIRA'],
    joinedDate: 'Feb 2021'
  },
  {
    id: '4',
    name: 'Emma Wilson',
    role: 'Backend Developer',
    email: 'emma.wilson@example.com',
    phone: '(555) 789-0123',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    skills: ['Node.js', 'PostgreSQL', 'API Design'],
    joinedDate: 'Jun 2022'
  }
]

export const ProjectTeam = () => {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0])
  const [isAddingMember, setIsAddingMember] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Project Team</h2>
        <Button 
          variant="primary" 
          size="sm" 
          icon={<FiPlus className="mr-2" />}
          onClick={() => setIsAddingMember(true)}
        >
          Add Member
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className={`flex items-center p-3 rounded-lg cursor-pointer ${selectedMember.id === member.id ? 'bg-indigo-50' : 'hover:bg-gray-50'}`}
                  onClick={() => setSelectedMember(member)}
                >
                  <Avatar>
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={selectedMember.avatar} />
                  <AvatarFallback>{selectedMember.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{selectedMember.name}</h3>
                  <p className="text-gray-500">{selectedMember.role}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" icon={<FiSettings />}>
                Edit
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3 flex items-center">
                  <FiUser className="mr-2 text-gray-400" />
                  Details
                </h4>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="text-gray-500">Joined:</span> {selectedMember.joinedDate}
                  </p>
                  <p className="text-sm">
                    <span className="text-gray-500">Skills:</span> {selectedMember.skills.join(', ')}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3 flex items-center">
                  <FiMail className="mr-2 text-gray-400" />
                  Contact
                </h4>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="text-gray-500">Email:</span> {selectedMember.email}
                  </p>
                  <p className="text-sm">
                    <span className="text-gray-500">Phone:</span> {selectedMember.phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-3">Recent Activity</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <FiCheckCircle className="text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium">Completed task "Homepage design"</p>
                    <p className="text-sm text-gray-500">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FiClock className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Started working on "User dashboard"</p>
                    <p className="text-sm text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
