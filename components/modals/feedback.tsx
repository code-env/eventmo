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
import { feedbackSchema } from "@/lib/validations";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { MessageSquareHeart } from "lucide-react";
import { createNewFeedBack } from "@/actions/feedback";

const Feedback = ({ userId }: { userId: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
  });

  async function onSubmit(data: z.infer<typeof feedbackSchema>) {
    const promise = createNewFeedBack(userId, data.message);

    toast.promise(promise, {
      loading: "Sending feedback...",
      success: (project) => {
        if (project?.id) {
          setIsOpen(false);
          form.reset();
        }

        return "😊 Thanks for your feedback we'll working on that.";
      },
      error: "Failed to create a new article.",
    });
  }

  const {
    formState: { isSubmitting },
  } = form;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          className={cn(
            "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition-all duration-150 text-start no-underline hover:no-underline cursor-pointer"
          )}
        >
          <MessageSquareHeart className="h-4 w-4" />
          <span>Feedback</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-center">
          <DialogTitle className="text-center text-3xl">
            Leave feedback
          </DialogTitle>
          <DialogDescription className="text-center">
            We&apos;d love to hear what went well or how we can improve the
            product experience.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="What if..."
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
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default Feedback;
