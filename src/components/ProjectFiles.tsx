import { useState } from 'react'
import { FiFile, FiFolder, FiDownload, FiTrash2, FiStar, FiMoreVertical } from 'react-icons/fi'

const files = [
  {
    id: '1',
    name: 'Project Brief.pdf',
    type: 'pdf',
    size: '2.4 MB',
    modified: '2 days ago',
    starred: true,
    owner: 'Michael Chen'
  },
  {
    id: '2',
    name: 'Design Mockups',
    type: 'folder',
    size: '15.2 MB',
    modified: '1 week ago',
    starred: false,
    owner: 'Alex Johnson'
  },
  {
    id: '3',
    name: 'Technical Specifications.docx',
    type: 'doc',
    size: '1.1 MB',
    modified: '3 days ago',
    starred: false,
    owner: 'Sarah Miller'
  },
  {
    id: '4',
    name: 'Development Timeline.xlsx',
    type: 'xls',
    size: '0.8 MB',
    modified: '5 days ago',
    starred: true,
    owner: 'Michael Chen'
  },
  {
    id: '5',
    name: 'User Research',
    type: 'folder',
    size: '8.5 MB',
    modified: '2 weeks ago',
    starred: false,
    owner: 'Emma Wilson'
  },
  {
    id: '6',
    name: 'Brand Guidelines.pdf',
    type: 'pdf',
    size: '3.2 MB',
    modified: '1 day ago',
    starred: true,
    owner: 'Alex Johnson'
  }
]

export const ProjectFiles = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [selectedFiles, setSelectedFiles] = useState([])

  const toggleFileSelection = (fileId) => {
    setSelectedFiles(prev =>
      prev.includes(fileId)
        ? prev.filter(id => id !== fileId)
        : [...prev, fileId]
    )
  }

  const toggleStar = (fileId) => {
    // In a real app, this would update the backend
    console.log(`Toggled star for file ${fileId}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Project Files</h2>
        <div className="flex space-x-2">
          <button
            className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'}`}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </button>
          <button
            className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-gray-100'}`}
            onClick={() => setViewMode('list')}
          >
            List
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {files.map((file) => (
            <div
              key={file.id}
              className={`bg-white rounded-lg border p-4 flex flex-col items-center cursor-pointer ${selectedFiles.includes(file.id) ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}`}
              onClick={() => toggleFileSelection(file.id)}
            >
              <div className="relative">
                {file.type === 'folder' ? (
                  <FiFolder className="h-12 w-12 text-yellow-500" />
                ) : (
                  <FiFile className="h-12 w-12 text-blue-500" />
                )}
                <button
                  className="absolute -top-2 -right-2 p-1 bg-white rounded-full shadow-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleStar(file.id)
                  }}
                >
                  <FiStar
                    className={`h-4 w-4 ${file.starred ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`}
                  />
                </button>
              </div>
              <p className="mt-2 text-sm font-medium text-center truncate w-full">
                {file.name}
              </p>
              <p className="text-xs text-gray-500">{file.size}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Modified
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Owner
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {files.map((file) => (
                <tr key={file.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center">
                        {file.type === 'folder' ? (
                          <FiFolder className="h-6 w-6 text-yellow-500" />
                        ) : (
                          <FiFile className="h-6 w-6 text-blue-500" />
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {file.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {file.type.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {file.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {file.modified}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {file.owner}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => toggleStar(file.id)}
                      >
                        <FiStar
                          className={`h-5 w-5 ${file.starred ? 'text-yellow-500 fill-yellow-500' : ''}`}
                        />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <FiDownload className="h-5 w-5" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <FiMoreVertical className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedFiles.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">
              {selectedFiles.length} selected
            </span>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
              <FiDownload className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
              <FiTrash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
