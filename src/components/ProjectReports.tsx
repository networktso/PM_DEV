import { useTheme } from './ThemeProvider'

export function ProjectReports() {
  const { theme } = useTheme()

  return (
    <div className={`p-6 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-xl font-semibold mb-4">Project Reports</h2>
      <div className="space-y-4">
        <div className={`p-4 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className="font-medium">Active Projects</h3>
          <p className="text-2xl font-bold">8</p>
        </div>
        <div className={`p-4 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className="font-medium">Behind Schedule</h3>
          <p className="text-2xl font-bold">2</p>
        </div>
        <div className={`p-4 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h3 className="font-medium">Completed This Month</h3>
          <p className="text-2xl font-bold">3</p>
        </div>
      </div>
    </div>
  )
}
