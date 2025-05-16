import { TeamList } from '../components/TeamList'
import { TeamInvite } from '../components/TeamInvite'
import { TeamRoles } from '../components/TeamRoles'
import { TeamAvailability } from '../components/TeamAvailability'
import { useTheme } from '../components/ThemeProvider'

export function TeamPage() {
  const { theme } = useTheme()

  return (
    <div className={`space-y-6 ${theme === 'dark' ? 'dark:text-white' : ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TeamList />
        </div>
        <div>
          <TeamInvite />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <TeamRoles />
        </div>
        <div>
          <TeamAvailability />
        </div>
      </div>
    </div>
  )
}
