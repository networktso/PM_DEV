import { FileText, Image, Video, Download, MoreHorizontal } from 'lucide-react'
import { Button } from './ui/button'

export function FileList() {
  return (
    <div>
      <h2>Files</h2>
      <Button>
        <Download className="w-4 h-4 mr-2" />
        Download
      </Button>
    </div>
  )
}
