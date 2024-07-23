"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { orgCreation } from "@/validations";
import { useState } from "react";
import FileUpload from "../shared/file-upload";
import { Plus } from "lucide-react";

const CreateOrgModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof orgCreation>>({
    resolver: zodResolver(orgCreation),
  });

  async function onSubmit(data: z.infer<typeof orgCreation>) {
    console.log("something is going on");
  }

  const {
    formState: { isSubmitting },
  } = form;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="flex flex-col gap-5 text-neutral-400 group slowmo items-center hover:bg-muted p-10 cursor-pointer rounded-lg border border-border">
          <div className="w-full flex items-center justify-center">
            <Plus className="w-10 h-10 group-hover:text-neutral-600 slowmo" />
          </div>
          <h1 className="text-neutral-400 group-hover:text-neutral-600 slowmo">
            Create new organization
          </h1>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new Project</DialogTitle>
          <DialogDescription>
            Start a new project that&apos;s sync to your terminal
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <div className="flex items-center justify-center text-center race">
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FileUpload
                        endPoint="orgProfile"
                        onChange={field.onChange}
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Organization name..."
                      {...field}
                      disabled={isSubmitting}
                      className="disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                Create project
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrgModal;
