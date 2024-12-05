import Image from "next/image";
import React from "react";

function Video() {
  return (
    <div 
      className="relative h-[80vh] w-full bg-cover bg-center flex justify-center items-center p-4"
      style={{
        backgroundImage: "url('/Bg.png')",
      }}
    >
      <div className="relative w-full max-w-4xl aspect-video">
        <Image
          src="/Video Thumbnail.png"
          alt="Video thumbnail"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

export default Video;