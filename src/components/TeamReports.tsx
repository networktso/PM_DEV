import { useTheme } from './ThemeProvider'

export function TeamReports() {
  const { theme } = useTheme()

  return (
    <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-xl font-semibold mb-4">Team Reports</h2>
      <div className="space-y-4">
        <div className={`p-4 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className="font-medium">Team Members</h3>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className={`p-4 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className="font-medium">Active Tasks</h3>
          <p className="text-2xl font-bold">47</p>
        </div>
        <div className={`p-4 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className="font-medium">Avg. Completion Rate</h3>
          <p className="text-2xl font-bold">92%</p>
        </div>
      </div>
    </div>
  )
}
