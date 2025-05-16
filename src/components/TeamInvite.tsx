import { useTheme } from './ThemeProvider'
import { Button } from './ui/button'
import { Mail, Plus } from 'lucide-react'
import { Input } from './ui/input'

export function TeamInvite() {
  const { theme } = useTheme()

  return (
    <div className={`rounded-lg border ${theme === 'dark' ? 'dark:border-gray-700' : 'border-gray-200'} ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'} p-4`}>
      <h3 className="font-medium mb-4">Invite Team Members</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="team@example.com"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium mb-1">
            Role
          </label>
          <select
            id="role"
            className={`w-full rounded-md border ${theme === 'dark' ? 'dark:border-gray-700' : 'border-gray-200'} ${theme === 'dark' ? 'dark:bg-gray-700' : 'bg-white'} px-3 py-2 text-sm`}
          >
            <option value="member">Team Member</option>
            <option value="admin">Admin</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
        <Button className="w-full">
          <Mail className="w-4 h-4 mr-2" />
          Send Invite
        </Button>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Or share invite link</span>
          <Button variant="ghost" size="sm">
            <Plus className="w-4 h-4 mr-1" />
            Copy Link
          </Button>
        </div>
      </div>
    </div>
  )
}
