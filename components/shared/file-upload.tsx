import React from "react";

import { UploadDropzone } from "@/lib/utils";

import "@uploadthing/react/styles.css";
import Image from "next/image";
import { X } from "lucide-react";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endPoint: "orgProfile" | "projectSubmission" | "messageAttachment";
}

const FileUpload = ({ onChange, value, endPoint }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative w-20 h-20">
        <Image
          fill
          alt="Team profile upload"
          src={value}
          className="rounded-full object-cover"
        />

        <button
          onClick={() => onChange("")}
          className="bg-rose-500 absolute top-0 right-0 cursor-pointer rounded-full p-1 text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      onClientUploadComplete={(res) => onChange(res?.[0].url)}
      endpoint={endPoint}
      className="dropzone"
      appearance={{
        button:
          "ut-uploading:cursor-not-allowed ut-uploading:bg outline-none nothing-btn after:bg-black dark:after:bg-white focus-within:outline-none focus-within:ring-0 focus-within:ring-offset-0",
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    ></UploadDropzone>
  );
};

export default FileUpload;
