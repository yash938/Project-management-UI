import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const CommentForm = ({ issueId }) => {
  const form = useForm({
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Create project data", data);
  };

  return (
    <div>
      <Dialog>
        {/* Trigger to open the dialog */}
        <DialogTrigger asChild>
          <Button>Open Comment Form</Button>
        </DialogTrigger>

        {/* Dialog content */}
        <DialogContent>
          <DialogTitle>Invite User</DialogTitle>
          <Form {...form}>
            <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem > 
                   <div className="flex gap-2">
                   <div>
                        <Avatar>
                            <AvatarFallback>
                                R
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        className="w-[20rem]"
                        placeholder="Add Comment here ..."
                      />
                    </FormControl>
                    <FormMessage />
                   </div>
                  </FormItem>
                )}
              />
              <DialogClose asChild>
                <Button type="submit">Save </Button>
              </DialogClose>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CommentForm;
