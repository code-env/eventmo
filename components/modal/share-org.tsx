"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "../ui/input";
import { Check, Copy } from "lucide-react";
import { useOrigin } from "@/hooks/use-origin";
import { usePathname } from "next/navigation";

const ShareOrg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopy, setIsCopy] = useState(false);

  const pathname = usePathname();

  const inviteCode = pathname.split("/")[2];

  const origin = useOrigin();

  const inviteUrl = `${origin}/invite/${inviteCode}`;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setIsCopy(true);

    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Invite someone</DialogTitle>
          <DialogDescription>
            Invite a collegue or peer to the organization
          </DialogDescription>
        </DialogHeader>
        <div className="w-full flex items-center gap-4">
          <Input
            className="border-0 bg-muted ring-0 focus-within:ring-0"
            value={inviteUrl}
          />
          <Button size="icon" variant="ghost" onClick={() => onCopy()}>
            {isCopy ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareOrg;
