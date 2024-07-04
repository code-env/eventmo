"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import CreateOrg from "../forms/create-org";
import { Plus } from "lucide-react";

const CreateOrganizationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="w-8 h-8 center hover:bg-neutral-200 rounded transition-all duration-150">
          <Plus className="w-4 h-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create new article</DialogTitle>
          <DialogDescription>
            Start a new article that&apos;s sync to your terminal
          </DialogDescription>
        </DialogHeader>
        <CreateOrg />
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrganizationModal;
