"use client";


// import { basePath } from '../../../next.config';

import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";
import Image from "next/image";

import s from "./index.module.scss";

const carousel: KeenSliderPlugin = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

interface Props {
  images: string[];
}

export default function AppImageCarousel(props: Props) {
  let images = props.images;
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  return (
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          {images.map((item, index) => (
            <Image src={`/${item}`}  fill={true} draggable="false" key={index} className="carousel__cell" alt={"scene-image"} />
            // <img draggable="false" src={item} key={index} width="100%" alt="" className="carousel__cell" />
          ))}
        </div>
      </div>
    </div>
  );

  /*return (
    <div className={s["container"]}>
      <Carousel
        autoplay
        wrapAround
        withoutControls
        slidesToShow={3}
        cellAlign="center"
      >
        {images.map((item, index) => (
          <img draggable="false" src={item} key={index} width="100%" alt="" />
        ))}
      </Carousel>
    </div>
  );*/
}
