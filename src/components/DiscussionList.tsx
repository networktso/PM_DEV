import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Send, AtSign, Paperclip, Smile } from 'lucide-react'
import { useTheme } from './ThemeProvider'

interface Message {
  id: string
  user: string
  avatar: string
  text: string
  time: string
  replies: Message[]
}

export function DiscussionList({ projectId }: { projectId: string }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      user: 'Alex Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Has anyone reviewed the latest design mockups?',
      time: '2 hours ago',
      replies: [
        {
          id: '1-1',
          user: 'Sarah Miller',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          text: 'Yes, I have some feedback on the homepage layout',
          time: '1 hour ago',
          replies: []
        }
      ]
    },
    {
      id: '2',
      user: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      text: 'Let me know when you push the changes to staging',
      time: '45 minutes ago',
      replies: []
    }
  ])
  const [newMessage, setNewMessage] = useState('')
  const { theme } = useTheme()

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now().toString(),
          user: 'You',
          avatar: '',
          text: newMessage,
          time: 'Just now',
          replies: []
        }
      ])
      setNewMessage('')
    }
  }

  return (
    <div className={`space-y-4 ${theme === 'dark' ? 'dark:text-white' : ''}`}>
      <h3 className="text-lg font-semibold">Discussions</h3>

      <div className={`space-y-6 p-4 rounded-lg ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'} border ${theme === 'dark' ? 'dark:border-gray-700' : 'border-gray-200'}`}>
        {messages.map(message => (
          <div key={message.id} className="space-y-4">
            <div className="flex">
              <img
                src={message.avatar}
                alt={message.user}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium mr-2">{message.user}</span>
                  <span className="text-sm text-gray-500">{message.time}</span>
                </div>
                <p className="mt-1">{message.text}</p>
                <div className="mt-2 flex space-x-4">
                  <button className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                    Reply
                  </button>
                  <button className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                    Like
                  </button>
                </div>

                {message.replies.length > 0 && (
                  <div className="mt-4 pl-6 border-l-2 border-gray-200 dark:border-gray-700 space-y-4">
                    {message.replies.map(reply => (
                      <div key={reply.id} className="flex">
                        <img
                          src={reply.avatar}
                          alt={reply.user}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                          <div className="flex items-center">
                            <span className="font-medium mr-2">{reply.user}</span>
                            <span className="text-sm text-gray-500">{reply.time}</span>
                          </div>
                          <p className="mt-1">{reply.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center space-x-2 pt-4">
          <Input
            placeholder="Add a comment..."
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && sendMessage()}
            className="flex-1"
          />
          <div className="flex space-x-1">
            <Button variant="ghost" size="icon">
              <AtSign className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Paperclip className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Smile className="w-5 h-5" />
            </Button>
            <Button onClick={sendMessage} size="icon">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
