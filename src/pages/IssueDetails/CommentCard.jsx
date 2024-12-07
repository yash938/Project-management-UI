import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { TrashIcon } from '@radix-ui/react-icons'
import React from 'react'

const CommentCard = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
            <Avatar>
                <AvatarFallback>Y</AvatarFallback>
            </Avatar>
            <div className='space-y-1'>
                <p>Yash Sharma</p>
                <p>How much work is pending </p>
            </div>
        </div>
        <Button className="rounded-full" variant="ghost" size="icon">
            <TrashIcon/>
        </Button>
      
    </div>
  )
}

export default CommentCard
