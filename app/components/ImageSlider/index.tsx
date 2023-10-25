'use client'

import React from 'react'

import Image from 'next/image';


import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


interface Props {
  images: string[],
  imgWrapperClass?: string,
  width?: number,
  height?: number,
}

export const ImageSlider = ( props : Props) => {

  const { images, imgWrapperClass } = props;

  return (
    <Swiper
      loop
      autoplay
      navigation
      modules={[Navigation, Autoplay]}
      {...props}
    >
      {images.map((item: string | undefined, index: number) => (
        <SwiperSlide key={index}>
          <div className={ imgWrapperClass }>
            <Image 
              draggable="false"
              width={500}
              height={500}
              style={{
                width: '100%',
                height: '100%',
                objectFit: "cover",
              }}
              src={`${item}`}
              alt={"img-slider"} 
              />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
