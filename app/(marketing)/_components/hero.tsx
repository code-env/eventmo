import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_250px,#3e3e3e,transparent)] " />
      <div className=" sm-w-full global-width bg-orange  py-40 center flex-col">
        <div className="max-w-3xl  flex-col gap-6  flex text-neutral-300 z-20">
          <h1 className="font-bold text-6xl text-center text-neutral-50">
            Manage all your upcoming <br /> events in one place
          </h1>
          <p className="text-lg text-center px-10">
            Stay organized with Eventmo. Schedule, manage, and track all your
            events—personal and professional—in one convenient platform.
            Experience seamless event management and never miss a moment.
          </p>
          <div className="flex items-center justify-center gap-6 relative">
            <button className="inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-neutral-900/15 capitalize  bg-[linear-gradient(110deg,#00ffff,45%,#ffffff,55%,#ff0000)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
              get started
            </button>
            <button className="">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
