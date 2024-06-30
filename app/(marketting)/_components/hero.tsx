import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen w-ful">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_550px_at_50%_250px,#4e4e4e,transparent)] " />
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
          <div className="flex items-center justify-center gap-6">
            <button className="button text-white">Get Start</button>
            <button className="">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
