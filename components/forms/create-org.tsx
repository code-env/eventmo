"use client";

import * as z from "zod";
import { toast } from "sonner";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { orgCreation } from "@/validations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Loading } from "@/components/shared/loading";
import { Button } from "../ui/button";
import FileUpload from "../shared/file-upload";
import { useRouter } from "next/navigation";
import { createOrg } from "@/actions/organization";

const CreateOrg = () => {
  const router = useRouter();
  const [key, setKey] = useState("");
  const form = useForm<z.infer<typeof orgCreation>>({
    resolver: zodResolver(orgCreation),
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: z.infer<typeof orgCreation>) {
    try {
      const promise = createOrg(values.name, values.imageUrl, key);

      toast.promise(promise, {
        loading: "Creating...",
        error: (message) => {
          return `something went wrong ${message}`;
        },
        success: (org) => {
          router.push(`/manage/${org.key}`);
          return `${org.name} created`;
        },
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }
  return (
    <div className="w-full max-w-md mx-auto">
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
                      setKey={setKey}
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

          <Button
            type="submit"
            // variant="zbtn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loading />
                <span className="ml-3"> Creating...</span>
              </>
            ) : (
              "Create new article"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateOrg;
