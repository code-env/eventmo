import { Organization } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import CreateOrgModal from "./modal/create-org";

const Organizations = ({
  organizations,
}: {
  organizations: Organization[];
}) => {
  return (
    <div className="max-w-5xl mx-auto w-full gap-5 grid grid-cols-3">
      <CreateOrgModal />
      {organizations.map((org) => (
        <Link
          key={org.id}
          href={`/manage/${org.key}`}
          className="flex gap-2 hover:bg-muted p-2 rounded-lg border border-border slowmo"
        >
          <div className="h-10 w-10 rounded-lg relative overflow-hidden">
            <Image
              src={org.imageUrl}
              fill
              alt="nothing"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p>{org.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Organizations;
