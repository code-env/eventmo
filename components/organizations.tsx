import { Organization } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import CreateOrgModal from "./modal/create-org";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";

const Organizations = ({
  organizations,
}: {
  organizations: Organization[];
}) => {
  return (
    <div className="flex flex-col gap-10 max-w-5xl mx-auto w-full">
      <h1 className="text-center text-2xl font-bold text-muted-foreground">
        Create or Select an organization to proceed
      </h1>
      <div className="l gap-5 grid grid-cols-3">
        <CreateOrgModal />
        {organizations.map((org) => (
          <div
            key={org.id}
            className="flex flex-col gap-2 hover:bg-muted p-2 rounded-lg border border-border slowmo"
          >
            <div className="flex items-center justify-between">
              <Link
                href={`/manage/${org.key}`}
                className="flex items-center gap-2"
              >
                <div className="h-10 w-10 rounded-lg relative overflow-hidden">
                  <Image
                    src={org.imageUrl}
                    fill
                    alt="nothing"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold first-letter:capitalize">
                    {org?.name}
                  </p>
                  <span className="text-xs text-neutral-500">
                    {org?.plan === "FREE" ? "Free plan" : org?.plan}
                  </span>
                </div>
              </Link>
              <Button variant="destructive" size="icon">
                <Trash className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organizations;
