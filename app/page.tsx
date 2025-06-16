import BrandSlider from "@/components/BrandSlider/BrandSlider";
import CheckText from "@/components/CheckText";
import GlobalButton from "@/components/GlobalButton";
import HeroCard from "@/components/HeroCard/HeroCard";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import PageContainer from "@/components/PageContainer";
import ProductGroupSlider from "@/components/ProductGroupSlider/ProductGroupSlider";
import ReferenceSlider from "@/components/ReferenceSlider/ReferenceSlider";
import SectionHeader from "@/components/SectionHeader";
import {
  Archive,
  Building2,
  Bus,
  Headphones,
  PhoneCall,
  Smile,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col !overflow-hidden">
      <section className="h-[500px] relative">
        <HeroSlider />
        <HeroCard />
      </section>
      <section className="h-auto flex justify-center pt-[24rem] md:pt-[12rem] lg:pt-32 pb-16">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-8">
            <div className="flex flex-col gap-2 lg:items-start items-center">
              <SectionHeader width="110px" text="Despre noi" />
              <div className="flex flex-col lg:items-start items-center gap-6">
                <h2 className="text-[26px] font-bold">Despre compania noastră</h2>
                <p>
                  QIS Chimie Constructivă oferă servicii în domeniul chimiei constructive de peste 7 ani, în primul rând în domeniul hidroizolației, cu o echipă experimentată și profesională. QIS, fiind un nou venit în sectorul construcțiilor, demonstrează o creștere constantă datorită producției de produse de calitate, oferirii de soluții corecte la aplicare și dezvoltării constante a produselor noi. Produsele QIS, fabricate în fabricile din Kocaeli și Samsun, sunt livrate în toate regiunile Turciei și în străinătate și sunt utilizate cu succes în multe proiecte importante.
                </p>
              </div>
              <div className="flex lg:flex-row flex-col lg:gap-16 gap-4 py-6">
                <div className="flex flex-col justify-between gap-4">
                  <CheckText text={"Satisfacția clienților"} />
                  <CheckText text={"Suport tehnic pentru soluții"} />
                  <CheckText text={"Echipă puternică"} />
                </div>
                <div className="flex flex-col justify-between gap-4">
                  <CheckText text={"Produse cu raport preț/calitate ridicat"} />
                  <CheckText text={"Serviciu de încredere"} />
                  <CheckText text={"Recomandări puternice"} />
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <Image
                className="object-cover rounded-[5px_5px_5px_140px]"
                src="/assets/aboutimg.jpg"
                alt="about"
                width={500}
                height={500}
              />
            </div>
          </div>
        </PageContainer>
      </section>
      <section className="pt-8 select-none pointer-events-none relative flex justify-center w-full bg-[#162a61]">
        <Image
          className="object-cover object-top"
          src="/assets/shape.png"
          alt="shape"
          fill
        />
        <PageContainer>
          <div className="flex flex-col items-center">
            <SectionHeader width="160px" text="Noi în cifre" />
            <h2 className="font-bold text-white text-center text-[24px]">
              Ce am realizat până astăzi?
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 lg:gap-0 lg:grid-cols-5 pt-12 pb-8 w-full z-1">
              <div className="flex flex-col items-center gap-2">
                <div className="py-5 px-5 bg-white rounded-full">
                  <Smile color="#246fcc" />
                </div>
                <span className="text-white text-[24px] font-bold">
                  500<span className="ms-1">+</span>
                </span>
                <span className="text-white">Client mulțumit</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="py-5 px-5 bg-white rounded-full">
                  <Bus color="#246fcc" />
                </div>
                <span className="text-white text-[24px] font-bold">150</span>
                <span className="text-white">Gama de produse</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="py-5 px-5 bg-white rounded-full">
                  <Archive color="#246fcc" />
                </div>
                <span className="text-white text-[24px] font-bold">3</span>
                <span className="text-white text-center">Uzina de producție</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="py-5 px-5 bg-white rounded-full">
                  <Headphones color="#246fcc" />
                </div>
                <span className="text-white text-[24px] font-bold">
                  100<span className="ms-1">+</span>
                </span>
                <span className="text-white">Proiect important</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="py-5 px-5 bg-white rounded-full">
                  <Building2 color="#246fcc" />
                </div>
                <span className="text-white text-[24px] font-bold">20</span>
                <span className="text-white">Export în țări</span>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
      <section className="h-auto relative pt-6">
        <div className="flex justify-center pt-4 pb-12">
          <PageContainer>
            <h2 className="text-[26px] font-bold pb-4">Grupurile noastre de produse</h2>
            <ProductGroupSlider />
          </PageContainer>
        </div>
      </section>
      <section className="h-auto py-16 flex justify-center relative select-none">
        <Image
          className="object-cover object-center"
          src="/assets/contact-us.jpg"
          alt="contact"
          fill
        />
        <div className="w-full h-full bg-[rgba(0,0,0,.4)] absolute top-0 left-0 z-1"></div>
        <div className="flex flex-col gap-3 justify-center items-center z-2">
          <p className="text-white text-[24px] font-bold text-center">
            Contactați-ne pentru soluții profesionale
          </p>
          <Link href={"tel:+79853336009"}><GlobalButton icon={<PhoneCall />} text="Sunați-ne" /></Link>
        </div>
      </section>
      <section className="h-auto py-8">
        <div className="flex justify-center py-5">
          <PageContainer>
            <div className="flex flex-col items-start w-full">
              <SectionHeader width="auto" text="Galerie" />
              <h2 className="text-[26px] font-bold">Proiectele noastre</h2>
            </div>
          </PageContainer>
        </div>
        <div className="w-full">
          <ReferenceSlider />
        </div>
      </section>
      <section className="h-auto py-8">
        <div className="flex justify-center py-5">
          <PageContainer>
            <BrandSlider />
          </PageContainer>
        </div>
      </section>
    </main>
  );
}
