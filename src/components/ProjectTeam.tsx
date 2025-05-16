export const ProjectTeam = () => {
  const team = [
    { id: '1', name: 'Alex Johnson', role: 'Designer', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { id: '2', name: 'Sarah Miller', role: 'Developer', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: '3', name: 'Michael Chen', role: 'Product Manager', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
    { id: '4', name: 'Emma Wilson', role: 'Developer', avatar: 'https://randomuser.me/api/portraits/women/33.jpg' },
    { id: '5', name: 'David Kim', role: 'QA Engineer', avatar: 'https://randomuser.me/api/portraits/men/41.jpg' }
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-6">Team Members</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map(member => (
          <div key={member.id} className="flex items-center p-3 border border-gray-200 rounded-lg">
            <img 
              src={member.avatar} 
              alt={member.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="font-medium">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
