interface FeedbackCardProps {
  title: string
  type: string
  previewUrl: string
  comments: number
  status: 'pending' | 'approved' | 'rejected'
}

export const FeedbackCard = ({ title, type, previewUrl, comments, status }: FeedbackCardProps) => {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800'
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="h-40 bg-gray-100 overflow-hidden">
        <img 
          src={previewUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold">{title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${statusColors[status]}`}>
            {status}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-3">{type}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{comments} comments</span>
          <button className="text-sm text-indigo-600 hover:text-indigo-800">
            Review
          </button>
        </div>
      </div>
    </div>
  )
}
