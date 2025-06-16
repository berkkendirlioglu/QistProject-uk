import { Building, ChevronRight, Gauge, Send } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function HeroCard() {
  return (
    <div className="w-full grid sm:grid-cols-[260px] md:grid-cols-[260px_260px] lg:grid-cols-[260px_260px_260px] !justify-center !items-center gap-8 absolute lg:bottom-[-12%] md:bottom-[-30%] bottom-[-70%] py-4">
      <div className="w-[260px] h-[100px] relative transition-all rounded-[40px_5px_5px_5px] group hover:translate-y-[-5%]">
        <Image
          className="rounded-[40px_5px_5px_5px] z-[1] object-cover"
          fill
          src="/assets/kara.png"
          alt="card"
        />
        <div className="z-[2] absolute ps-4 w-full h-full flex justify-start items-center">
          <div className="flex gap-3 items-center">
            <span className="py-4 px-4 bg-[#132c53] rounded-full">
              <Building color="#20cfa9" />
            </span>
            <span className="text-white text-[16px]">Calitate înaltă</span>
          </div>
        </div>
        <div className="absolute group-hover:opacity-[.55] transition-all bg-[#246fcc] opacity-[.35] rounded-[15px_0_0_0] z-[2] py-1 px-2 right-0 bottom-0">
          <ChevronRight color="white" />
        </div>
      </div>
      <div className="w-[260px] h-[100px] relative transition-all rounded-[40px_5px_5px_5px] group hover:translate-y-[-5%]">
        <Image
          className="rounded-[40px_5px_5px_5px] z-[1] object-cover"
          src="/assets/hava.jpg"
          alt="card"
          fill
        />
        <div className="z-[2] absolute ps-4 w-full h-full flex justify-start items-center">
          <div className="flex gap-3 items-center">
            <span className="py-4 px-4 bg-[#132c53] rounded-full">
              <Send color="#20cfa9" />
            </span>
            <span className="text-white text-[16px]">Soluții inovatoare</span>
          </div>
        </div>
        <div className="absolute group-hover:opacity-[.55] transition-all bg-[#246fcc] opacity-[.35] rounded-[15px_0_0_0] z-[2] py-1 px-2 right-0 bottom-0">
          <ChevronRight color="white" />
        </div>
      </div>
      <div className="w-[260px] h-[100px] relative transition-all rounded-[40px_5px_5px_5px] group hover:translate-y-[-5%]">
        <Image
          className="rounded-[40px_5px_5px_5px] z-[1] object-cover"
          src="/assets/deniz.jpg"
          alt="card"
          fill
        />
        <div className="z-[2] absolute ps-4 w-full h-full flex justify-start items-center">
          <div className="flex gap-3 items-center">
            <span className="py-4 px-4 bg-[#132c53] rounded-full">
              <Gauge color="#20cfa9" />
            </span>
            <span className="text-white text-[16px]">Rețea puternică de franciză</span>
          </div>
        </div>
        <div className="absolute group-hover:opacity-[.55] transition-all bg-[#246fcc] opacity-[.35] rounded-[15px_0_0_0] z-[2] py-1 px-2 right-0 bottom-0">
          <ChevronRight color="white" />
        </div>
      </div>
    </div>
  );
}
