"use client";

import { Loading } from "@/components/shared/loading";
import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function SSOCallback() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loading className="h-12 w-12" />
      <AuthenticateWithRedirectCallback
        afterSignInUrl="/manage/projects"
        afterSignUpUrl="/manage/projects"
      />
    </div>
  );
}