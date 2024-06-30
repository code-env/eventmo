import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="bg-neutral-950 antialiased">{children}</div>;
};

export default layout;
