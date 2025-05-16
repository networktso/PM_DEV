import { FileText, Image, Video, Download } from 'lucide-react'

export const ProjectFiles = () => {
  const files = [
    { id: '1', name: 'Project Brief.pdf', type: 'pdf', size: '2.4 MB', date: '2023-11-01' },
    { id: '2', name: 'Homepage Design.png', type: 'image', size: '1.8 MB', date: '2023-11-05' },
    { id: '3', name: 'User Flow Diagram.pdf', type: 'pdf', size: '3.1 MB', date: '2023-11-08' },
    { id: '4', name: 'Product Demo.mp4', type: 'video', size: '24.5 MB', date: '2023-11-15' },
    { id: '5', name: 'Style Guide.pdf', type: 'pdf', size: '5.2 MB', date: '2023-11-20' }
  ]

  const getFileIcon = (type: string) => {
    switch(type) {
      case 'pdf': return <FileText className="text-red-500" />
      case 'image': return <Image className="text-blue-500" />
      case 'video': return <Video className="text-purple-500" />
      default: return <FileText className="text-gray-500" />
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-6">Project Files</h2>
      
      <div className="space-y-3">
        {files.map(file => (
          <div key={file.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <div className="flex items-center">
              <div className="mr-3">
                {getFileIcon(file.type)}
              </div>
              <div>
                <h3 className="font-medium">{file.name}</h3>
                <p className="text-sm text-gray-500">{file.size} • {file.date}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <Download size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
