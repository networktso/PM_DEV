export const ProjectSettings = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-6">Project Settings</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">Project Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
              <input 
                type="text" 
                defaultValue="Website Redesign"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
              <input 
                type="text" 
                defaultValue="Acme Corp"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Project Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input 
                type="date" 
                defaultValue="2023-11-01"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
              <input 
                type="date" 
                defaultValue="2023-12-15"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Danger Zone</h3>
          <div className="border border-red-200 bg-red-50 rounded-md p-4">
            <h4 className="font-medium text-red-800 mb-2">Delete Project</h4>
            <p className="text-sm text-red-700 mb-3">Once you delete a project, there is no going back. Please be certain.</p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">
              Delete Project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
