import { Button } from '@/components/ui/button';
import { DialogClose, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';
import { useForm } from 'react-hook-form';
import { tags } from '../home/ProjectList';
import { Cross1Icon } from '@radix-ui/react-icons';

const CreateForm = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      description: '',
      category: '',
      tags: ['javascript', 'react'],
    },
  });

  const onSubmit = (data) => {
    console.log('Create project data', data);
  };

  const handleTagsChange = (newValue) => {
    const currentTags = form.getValues('tags');
    const updatedTags = currentTags.includes(newValue)
      ? currentTags.filter((tag) => tag !== newValue)
      : [...currentTags, newValue];

    form.setValue('tags', updatedTags);
  };

 

  return (
    <div>
      <Form {...form}>
        <DialogContent>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>Fill in the details below to create a new project.</DialogDescription>
          <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="border w-full border-gray-700 py-5 px-5"
                      placeholder="Project name ..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="border w-full border-gray-700 py-5 px-5"
                      placeholder="Project description ..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      defaultValue="fullStack"
                      value={field.value}
                      onValueChange={(value) => field.onChange(value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fullstack">Fullstack</SelectItem>
                        <SelectItem value="frontend">Frontend</SelectItem>
                        <SelectItem value="backend">Backend</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={(value) => handleTagsChange(value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Tags" />
                      </SelectTrigger>
                      <SelectContent>
                        {tags.map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <div className="flex gap-1 flex-wrap">
                    {field.value.map((item) => (
                      <div
                        key={item}
                        onClick={() => handleTagsChange(item)}
                        className="cursor-pointer flex rounded-full items-center border gap-2 px-4 py-1"
                      >
                        <span className="text-sm">{item}</span>
                        <Cross1Icon className="h-3 w-3" />
                      </div>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogClose>
              {false ? (
                <div>
                  <p>
                    You can create only three projects with the free plan. Please upgrade your
                    plan.
                  </p>
                </div>
              ) : (
                <Button type="submit" className="w-full mt-5">
                  Create Project
                </Button>
              )}
            </DialogClose>
          </form>
        </DialogContent>
      </Form>
    </div>
  );
};

export default CreateForm;
