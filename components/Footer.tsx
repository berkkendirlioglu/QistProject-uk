import React from "react";
import GlobalButton from "./GlobalButton";
import { CirclePlus } from "lucide-react";
import PageContainer from "./PageContainer";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-full">
      <PageContainer>
        <div className="grid lg:px-0 px-10 grid-cols-1 lg:grid-cols-2 gap-16 py-10">
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-[20px]">Despre noi</h2>
            <span>
              QIS Chimie Constructivă oferă servicii în domeniul
              chimiei constructive de peste 7 ani, în primul rând în domeniul hidroizolației, cu
              o echipă experimentată și profesională. Fiind un nou venit în
              sectorul construcțiilor, QIS demonstrează o creștere constantă datorită
              producției de produse de calitate, oferirii de soluții corecte la
              aplicare și dezvoltării constante a produselor noi.
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-[20px]">Meniu</h2>
            <Link
              className="transition-all hover:text-[rgba(0,0,0,.5)]"
              href={"/"}
            >
              Acasă
            </Link>
          </div>
        </div>
      </PageContainer>
      <div className="bg-[#222222] w-full py-5 flex justify-center">
        <Link href={"tel:+79853336009"}>
          <GlobalButton icon={<CirclePlus />} text="Plată online" />
        </Link>
      </div>
    </footer>
  );
}
