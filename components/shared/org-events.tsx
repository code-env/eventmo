import { db } from "@/lib/db";
import React from "react";

const OrgEvents = async ({ orgKey }: { orgKey: string }) => {
  const events = await db.event.findMany({
    where: {
      organizationId: orgKey,
    },
  });

  if (events.length === 0)
    return (
      <div className="h-full calc-height  center">
        <div className="h-[40%] w-1/2 bg-white rounded-lg border center"></div>
      </div>
    );

  return (
    <div className="">
      {events.map((event) => {
        return (
          <div key={event.key}>
            <p className="line-clamp-1">{event.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default OrgEvents;
