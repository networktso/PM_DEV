import { useParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { TodoList } from '../components/TodoList'
import { DiscussionList } from '../components/DiscussionList'
import { FileList } from '../components/FileList'
import { CalendarView } from '../components/CalendarView'
import { ActivityFeed } from '../components/ActivityFeed'
import { ProjectHeader } from '../components/ProjectHeader'
import { useTheme } from '../components/ThemeProvider'

export function ProjectPage() {
  const { id } = useParams()
  const { theme } = useTheme()

  return (
    <div className={`space-y-6 ${theme === 'dark' ? 'dark:text-white' : ''}`}>
      <ProjectHeader projectId={id} />
      
      <Tabs defaultValue="todos" className="w-full">
        <TabsList className={`mb-4 ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
          <TabsTrigger value="todos">To-dos</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="calendar">Schedule</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="todos">
          <TodoList projectId={id} />
        </TabsContent>
        <TabsContent value="discussions">
          <DiscussionList projectId={id} />
        </TabsContent>
        <TabsContent value="files">
          <FileList projectId={id} />
        </TabsContent>
        <TabsContent value="calendar">
          <CalendarView projectId={id} />
        </TabsContent>
        <TabsContent value="activity">
          <ActivityFeed projectId={id} />
        </TabsContent>
        <TabsContent value="settings">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Project Settings</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Configure project permissions, notifications, and integrations.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
