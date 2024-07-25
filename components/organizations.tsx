import Link from "next/link";
import Image from "next/image";
import { Divide, Trash } from "lucide-react";

import { Button } from "./ui/button";
import CreateOrgModal from "./modal/create-org";
import { useOrganizationsWithMembersAndEvent } from "@/hooks/use-org";
import { Member } from "@prisma/client";

const Organizations = async () => {
  const organizations = await useOrganizationsWithMembersAndEvent();
  return (
    <div className="flex flex-col gap-10 max-w-5xl mx-auto w-full">
      <h1 className="text-center text-2xl font-bold text-muted-foreground">
        Select an Organization or create one to proceed
      </h1>

      <OrganizationCards data={organizations} />

      <CreateOrgModal />
    </div>
  );
};

interface OrganizationCardsProps {
  data: Awaited<ReturnType<typeof useOrganizationsWithMembersAndEvent>>;
}

function OrganizationCards(props: OrganizationCardsProps) {
  const { data } = props;

  return (
    <div className="grid gap-5 grid-cols-3">
      {data.length > 0 &&
        data.map((org) => {
          const members = org.members;

          const membersWithoutUser = members.filter(
            (mem) => mem.userId !== org.creatorId
          );

          return (
            <div
              key={org.id}
              className="flex flex-col gap-4 hover:bg-muted p-2 rounded-lg border border-border slowmo"
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
                      {org.name}
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
              {membersWithoutUser.length === 0 ? (
                <Button>Invite a new member</Button>
              ) : (
                <UserCard members={membersWithoutUser} />
              )}
            </div>
          );
        })}
    </div>
  );
}

function UserCard({ members }: { members: Member[] }) {
  return <div></div>;
}

export default Organizations;
