import React, { useRef, useState, useEffect } from "react";
import cn from "classnames";
import { Picture } from "next-img";
import { useKeenSlider } from "keen-slider/react";
import styles from "./Slider.module.scss";
import "keen-slider/keen-slider.min.css";

import photo1Img from "../../assets/gallery/photo-1.jpg";
import photo2Img from "../../assets/gallery/photo-2.jpg";
// import photo3Img from "../../assets/gallery/photo-3.jpg";
import photo4Img from "../../assets/gallery/photo-4.jpg";
import photo5Img from "../../assets/gallery/photo-5.jpg";
import photo6Img from "../../assets/gallery/photo-6.jpg";
import photo7Img from "../../assets/gallery/photo-7.jpg";
import photo8Img from "../../assets/gallery/photo-8.jpg";
import photo9Img from "../../assets/gallery/photo-9.jpg";

const SLIDES = [
  { name: "Photo Gallery 1", img: photo1Img },
  { name: "Photo Gallery 2", img: photo2Img },
  // { name: "Photo Gallery 3", img: photo3Img },
  { name: "Photo Gallery 4", img: photo4Img },
  { name: "Photo Gallery 5", img: photo5Img },
  { name: "Photo Gallery 6", img: photo6Img },
  { name: "Photo Gallery 7", img: photo7Img },
  { name: "Photo Gallery 8", img: photo8Img },
  { name: "Photo Gallery 9", img: photo9Img },
];

const Slider: React.FC = () => {
  const [pause, setPause] = useState(false);
  const timer = useRef<NodeJS.Timeout>();
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    spacing: 0,
    slidesPerView: 1,
    centered: true,
    loop: true,
    mode: "snap",
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 2,
        mode: "free-snap",
      },
    },
  });

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 3800);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <div ref={sliderRef} className="keen-slider">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.name}
          className={cn(
            `keen-slider__slide number-slide${i + 1}`,
            styles.slide
          )}
        >
          <Picture
            src={slide.img}
            alt={slide.name}
            className={styles.img}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default Slider;
