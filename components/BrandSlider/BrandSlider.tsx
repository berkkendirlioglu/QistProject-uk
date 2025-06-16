"use client";
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";
import Image from "next/image";
import { GlobalStore } from "@/store/GlobalStore";

const Products: { imgUrl: string }[] = [
  {
    imgUrl: "/assets/brands/1.jpg",
  },
  {
    imgUrl: "/assets/brands/2.jpg",
  },
  {
    imgUrl: "/assets/brands/3.jpg",
  },
  {
    imgUrl: "/assets/brands/4.jpg",
  },
  {
    imgUrl: "/assets/brands/5.jpg",
  },
  {
    imgUrl: "/assets/brands/6.jpg",
  },
];

export default function BrandSlider() {
  const { width } = GlobalStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      perView: width <= 768 ? 2 : width <= 992 ? 4 : 5,
      spacing: width <= 768 ? 40 : width <= 992 ? 60 : width <= 1200 ? 80 : 100,
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
      <div className="navigation-wrapper !relative">
        <div ref={sliderRef} className="keen-slider">
          {Products.map((product, index) => (
            <div key={index} className={`keen-slider__slide ${width >= 1200 ? "" : "!flex !justify-center !items-center"}`}>
              <div className="!w-[150px] !h-[80px] relative">
                <Image className="object-cover" src={product.imgUrl} alt="brands" fill/>
              </div>
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
  );
}

function Arrow(props: any) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <div
      onClick={props.onClick}
      className={`arrow-box !top-[70%] !translate-y-[-50%] ${
        props.left ? "!left-[-70px]": "!left-auto right-[-70px]"
      } ${disabled}`}
    >
      <svg
        className={`arrow fill-black`}
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

