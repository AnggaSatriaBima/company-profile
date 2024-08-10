"use client";
import vid1 from "../../public/7700793-hd_1920_1080_24fps.mp4";

const Hero = () => {
  return (
    <div className="justify-center w-full">
      <video
        autoPlay
        preload="none"
        loop
        muted
        className=" shadow-md shadow-red-500 "
      >
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export { Hero };
