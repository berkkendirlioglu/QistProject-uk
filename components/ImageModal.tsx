"use client";
import { GlobalStore } from "@/store/GlobalStore";
import { Fullscreen } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useStore } from "zustand";

export default function ImageModal({ imgUrl }: { imgUrl: string }) {
  const { setImgUrl, setIsModal } = GlobalStore()
  return (
    <div>
      <div
        onClick={() => {
          setIsModal(true);
          setImgUrl(imgUrl);
        }}
        className="w-[370px] h-[300px] relative cursor-pointer group"
      >
        <div className="hidden group-hover:flex absolute z-3 top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)] justify-center items-center">
          <Fullscreen width={64} height={64} color="white" />
        </div>
        <Image className="object-cover object-center" src={imgUrl} alt="gallery" fill />
      </div>
    </div>
  );
}
