interface ProjectCardProps {
  title: string
  client: string
  progress: number
  dueDate: string
  members: number
}

export const ProjectCard = ({ title, client, progress, dueDate, members }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-gray-500">{client}</p>
        </div>
        <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
          {dueDate}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-indigo-600 h-2 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex -space-x-2">
          {Array.from({ length: members }).map((_, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
          ))}
        </div>
        <button className="text-sm text-indigo-600 hover:text-indigo-800">
          View Project
        </button>
      </div>
    </div>
  )
}
