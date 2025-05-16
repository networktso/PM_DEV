import { useState } from 'react'
import { MessageSquare, Send } from 'lucide-react'

export const ProjectDiscussion = () => {
  const [messages, setMessages] = useState([
    { id: '1', user: 'Alex Johnson', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', text: 'Has anyone reviewed the latest design mockups?', time: '2 hours ago' },
    { id: '2', user: 'Sarah Miller', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', text: 'Yes, I have some feedback on the homepage layout', time: '1 hour ago' },
    { id: '3', user: 'Michael Chen', avatar: 'https://randomuser.me/api/portraits/men/22.jpg', text: 'Let me know when you push the changes to staging', time: '45 minutes ago' }
  ])
  const [newMessage, setNewMessage] = useState('')

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: Date.now().toString(),
        user: 'You',
        avatar: '',
        text: newMessage,
        time: 'Just now'
      }])
      setNewMessage('')
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center mb-6">
        <MessageSquare className="text-indigo-600 mr-2" />
        <h2 className="text-lg font-semibold">Project Discussion</h2>
      </div>

      <div className="space-y-4 mb-6">
        {messages.map(message => (
          <div key={message.id} className="flex">
            <img 
              src={message.avatar} 
              alt={message.user}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div>
              <div className="flex items-center">
                <span className="font-medium mr-2">{message.user}</span>
                <span className="text-xs text-gray-500">{message.time}</span>
              </div>
              <p className="text-gray-700 mt-1">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
        <button
          onClick={handleSend}
          className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  )
}
