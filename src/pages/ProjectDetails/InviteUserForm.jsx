import { Button } from '@/components/ui/button';
import { DialogClose, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form';

const InviteUserForm = () => {
    const form = useForm({
        defaultValues: {
          email: '',
        },
      });
    
      const onSubmit = (data) => {
        console.log('Create project data', data);
      };
  return (
    <div>
        <Form {...form}>
        <DialogContent>
          <DialogTitle>Invite User</DialogTitle>
          <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="border w-full border-gray-700 py-5 px-5"
                      placeholder="User Email ..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> 
            <DialogClose>
         
                <Button type="submit" className="w-full mt-5">
                  Invite User
                </Button>
            </DialogClose>
          </form>
        </DialogContent>
      </Form>
    </div>
  )
}

export default InviteUserForm
