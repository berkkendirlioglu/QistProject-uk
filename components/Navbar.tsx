"use client";
import React, { useState } from "react";
import PageContainer from "./PageContainer";
import Image from "next/image";
import { House, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="w-full bg-white">
      <div className="w-full flex justify-center py-8">
        <PageContainer>
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <Image
                src="/assets/logoqis.png"
                width={150}
                height={150}
                alt="Logo"
              ></Image>
            </Link>
            <div className="gap-6 lg:flex hidden">
              <div className="flex items-center gap-3 ">
                <div className="py-2 px-2 rounded-full border-1 border-[#dbdbdb]">
                  <MapPin color="#246fcc" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold">BIROU PRINCIPAL</p>
                  <Link
                    className="text-[#246fcc] text-[16px] font-bold hover:text-[#333]"
                    href={"/"}
                  >
                    Moldova / KIŞINEV
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="py-2 px-2 rounded-full border-1 border-[#dbdbdb]">
                  <Mail color="#246fcc" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold">ADRESĂ DE E-MAIL</p>
                  <Link
                    className="text-[#246fcc] text-[16px] font-bold hover:text-[#333]"
                    href={"mailto:euromosconstruct@gmail.com"}
                  >
                    euromosconstruct@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="py-2 px-2 rounded-full border-1 border-[#dbdbdb]">
                  <Phone color="#246fcc" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold">TELEFON</p>
                  <Link
                    className="text-[#246fcc] text-[16px] font-bold hover:text-[#333]"
                    href={"tel:+37376645688"}
                  >
                    +37376645688
                  </Link>
                </div>
              </div>
            </div>
            {/* mobile menü button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-black p-2 relative z-50 transition-all duration-300 ease-in-out cursor-pointer"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <span
                  className={`block w-6 h-0.5 bg-black mb-1.5 transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-black mb-1.5 transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </PageContainer>
      </div>
      {/* mobile menü */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4 py-4 transform transition-transform duration-300 ease-in-out">
          <div className="flex flex-col text-black space-y-4">
            <div className="flex items-center gap-3 ">
              <div className="py-2 px-2 rounded-full border-1 border-[#dbdbdb]">
                <MapPin color="#246fcc" />
              </div>
              <div>
                <p className="text-[12px] font-semibold">BIROU PRINCIPAL</p>
                <Link
                  className="text-[#246fcc] text-[16px] font-bold hover:text-[#333]"
                  href={"/"}
                >
                  Moldova / KIŞINEV
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="py-2 px-2 rounded-full border-1 border-[#dbdbdb]">
                <Mail color="#246fcc" />
              </div>
              <div>
                <p className="text-[12px] font-semibold">ADRESĂ DE E-MAIL</p>
                <Link
                  className="text-[#246fcc] text-[16px] font-bold hover:text-[#333]"
                  href={"mailto:euromosconstruct@gmail.com"}
                >
                  euromosconstruct@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="py-2 px-2 rounded-full border-1 border-[#dbdbdb]">
                <Phone color="#246fcc" />
              </div>
              <div>
                <p className="text-[12px] font-semibold">TELEFON</p>
                <Link
                  className="text-[#246fcc] text-[16px] font-bold hover:text-[#333]"
                  href={"tel:+37376645688"}
                >
                  +37376645688
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
