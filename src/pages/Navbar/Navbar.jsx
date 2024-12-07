import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import CreateForm from '../project/CreateForm'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='border-b py-4 px-5 flex items-center justify-between'>

        <div className='flex items-center gap-3'>
                <p onClick={()=>navigate("/")} className='cursor-pointer'>Project Management</p>
                <Dialog>
                    <DialogTrigger>
                        <Button variant="ghost">New Project</Button>
                    </DialogTrigger>
                    <DialogContent>
                    <DialogHeader>Create new project</DialogHeader>

                        <CreateForm/>
                    </DialogContent>
                </Dialog>
                <Button variant="ghost">Upgrade</Button>
        </div>
        <div className='flex gap-3 items-center'>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline" size="icon" className="rounded-full border-2 border-gray-500">
                        <PersonIcon/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <p>Yash Sharma</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
