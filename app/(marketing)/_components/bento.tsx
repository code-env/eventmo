import React from "react";

const Bento = () => {
  return (
    <div className="global-width pb-40">
      <div className="grid auto-rows-[400px] grid-cols-3 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
              i === 1 || i === 2 ? "col-span-2" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Bento;
