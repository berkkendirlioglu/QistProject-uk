"use client";
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";
import ProductsCard from "../ProductsCard";
import { GlobalStore } from "@/store/GlobalStore";

const Products: { imgUrl: string; title: string }[] = [
  {
    imgUrl: "/assets/products/1.jpg",
    title: "Grunduri",
  },
  {
    imgUrl: "/assets/products/2.jpg",
    title: "Aditivi pentru beton",
  },
  {
    imgUrl: "/assets/products/3.jpg",
    title: "Rășini și adezivi",
  },
  {
    imgUrl: "/assets/products/4.jpg",
    title: "Produse pentru izolare termică și fațade",
  },
  {
    imgUrl: "/assets/products/5.jpg",
    title: "Acoperiri protectoare",
  },
  {
    imgUrl: "/assets/products/6.jpg",
    title: "Compuși de curățare și uleiuri pentru cofraj",
  },
  {
    imgUrl: "/assets/products/7.jpg",
    title: "Reparații și întărire structuri",
  },
  {
    imgUrl: "/assets/products/8.jpg",
    title: "Materiale de hidroizolare",
  },
  {
    imgUrl: "/assets/products/9.jpg",
    title: "Produse auxiliare",
  },
  {
    imgUrl: "/assets/products/10.jpg",
    title: "Acoperiri pentru suprafețe",
  },
];

export default function ProductGroupSlider() {
  const { setWidth, width } = GlobalStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [verticalSliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 10,
    },
    vertical: true,
  });
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      perView: width <= 768 ? 1 : width <= 1200 ? 2 : 3,
      spacing: width <= 768 ? 10 : width <= 1200 ? 20 : 50,
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

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth(); // İlk değer ataması
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [setWidth]);

  return (
    <div className="navigation-wrapper !relative">
      <div ref={sliderRef} className="keen-slider !relative">
        {Products.map((product, index) => (
          <div key={index} className={`keen-slider__slide ${width <= 768 ? '!flex !justify-center !items-center' : width <= 1200 ? '!flex !justify-center !items-center' : ""}`}>
            <ProductsCard imgUrl={product.imgUrl} title={product.title} />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && width >= 768 && (
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
      className={`arrow-box ${
        props.left ? "arrow--left" : "arrow--right"
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
