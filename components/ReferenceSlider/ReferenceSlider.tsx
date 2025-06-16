"use client";
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";
import ImageModal from "../ImageModal";
import { GlobalStore } from "@/store/GlobalStore";
import Image from "next/image";
import { X } from "lucide-react";

const Products: { imgUrl: string }[] = [
  {
    imgUrl: "/assets/references/1.jpg",
  },
  {
    imgUrl: "/assets/references/2.jpg",
  },
  {
    imgUrl: "/assets/references/3.jpg",
  },
  {
    imgUrl: "/assets/references/4.jpg",
  },
  {
    imgUrl: "/assets/references/5.jpg",
  },
  {
    imgUrl: "/assets/references/6.jpg",
  },
  {
    imgUrl: "/assets/references/7.jpg",
  },
  {
    imgUrl: "/assets/references/8.jpg",
  },
  {
    imgUrl: "/assets/references/9.jpg",
  },
  {
    imgUrl: "/assets/references/10.jpg",
  },
  {
    imgUrl: "/assets/references/11.jpg",
  },
  {
    imgUrl: "/assets/references/12.jpg",
  },
  {
    imgUrl: "/assets/references/13.png",
  },
  {
    imgUrl: "/assets/references/14.jpg",
  },
  {
    imgUrl: "/assets/references/15.jpg",
  },
  {
    imgUrl: "/assets/references/16.jpg",
  },
  {
    imgUrl: "/assets/references/17.jpg",
  },
  {
    imgUrl: "/assets/references/18.jpg",
  },
  {
    imgUrl: "/assets/references/19.jpg",
  },
  {
    imgUrl: "/assets/references/20.png",
  },
  {
    imgUrl: "/assets/references/21.jpg",
  },
  {
    imgUrl: "/assets/references/22.jpg",
  },
  {
    imgUrl: "/assets/references/23.jpg",
  },
  {
    imgUrl: "/assets/references/24.jpg",
  },
  {
    imgUrl: "/assets/references/25.jpg",
  },
  {
    imgUrl: "/assets/references/26.jpg",
  },
  {
    imgUrl: "/assets/references/27.jpg",
  },
  {
    imgUrl: "/assets/references/28.jpg",
  },
  {
    imgUrl: "/assets/references/29.jpg",
  },
  {
    imgUrl: "/assets/references/30.jpg",
  },
  {
    imgUrl: "/assets/references/31.jpg",
  },
  {
    imgUrl: "/assets/references/32.jpg",
  },
  {
    imgUrl: "/assets/references/33.jpg",
  },
  {
    imgUrl: "/assets/references/34.jpg",
  },
  {
    imgUrl: "/assets/references/35.png",
  },
  {
    imgUrl: "/assets/references/36.png",
  },
  {
    imgUrl: "/assets/references/37.jpg",
  },
  {
    imgUrl: "/assets/references/38.jpg",
  },
  {
    imgUrl: "/assets/references/39.jpg",
  },
];

export default function ReferenceSlider() {
  const { isModal, imgUrl, width, setIsModal, closeModal } = GlobalStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      perView: width <= 768 ? 1 : width <= 992 ? 2 : width <= 1200 ? 3 : 5,
      spacing: width <= 768 ? 10 : width <= 1200 ? 20 : 5,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    if (!instanceRef.current) return;

    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="!relative">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {Products.map((product, index) => (
            <div key={index} className={`keen-slider__slide !h-[300px] ${width >= 1200 ? '' : '!flex !justify-center !items-center'}`}>
              <ImageModal imgUrl={product.imgUrl} />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && width >= 1200 && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>

      {isModal && (
        <div
          onClick={() => setIsModal(false)}
          className="fixed z-40 left-0 top-0 w-full h-full bg-[rgba(0,0,0,.7)]"
        >
          <div className="fixed right-5 top-5">
            <button className="cursor-pointer" onClick={() => closeModal}><X width={32} height={32} color="white"/></button>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div onClick={(e) => e.stopPropagation()} className="w-[80%] h-[80%] relative">
              <Image className="object-cover" src={imgUrl} alt="image" fill />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Arrow(props: any) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <div
      onClick={props.onClick}
      className={`arrow-box ${
        props.left ? "!left-auto !right-[450px]" : "!left-auto !right-[370px]"
      } ${disabled}`}
    >
      <svg
        className={`arrow`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </div>
  );
}
