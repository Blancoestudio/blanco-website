'use client'

import React from 'react'
import Image from 'next/image'

import bg from "../../../assets/images/alexstewart.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import s from './styles.module.scss';

const page = () => {

  const images = Array(6)
    .fill(0)
    .map((item, index) => {
      return `/images/alex-stewart/Web/AlexStewart_web_${index + 1}.png`;
    });

  return (
    <div>
      <div className="cover-wrapper">
        <Image src={bg.src} className="img-cover" fill={true} alt={"image-background"} />
        {/* <img className="img-cover" src={bg.src} alt="image-background" /> */}
        <div className="container h-100 position-relative z-1">
          <div className="row h-100 justify-content-center align-items-end">
            <div className="col-11 mb-5">
              
              <div className="row">
                <div className="col-12 col-md-7">
                  <h1 className="display-1 fw-bold karla">ALEX STEWART</h1>
                </div>
                <div className="col-12 col-md-5">
                  <p className="fs-4">Optimizando la gestión de órdenes de trabajo para las distintas oficinas de Chile.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="h-100 py-5 text-white">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-11">
              
              <div className={`${ s['inner-service-wraper'] }`}>
                <div>
                  <p className="fs-5 text-center text-md-start">Se desarrolla una plataforma que permite un mejor control, seguimiento y gestión de operaciones, pudiendo monitorear los tiempos de facturación, y envío de informes. Generando una plataforma ágil y amigable para el usuario.</p>
                </div>
                <div>
                  {/* <Swiper
                      loop
                      autoplay
                      navigation
                      slidesPerView={1}
                      modules={[Navigation, Autoplay]}
                    >
                    {images.map((item: string | undefined, index: number) => (
                      <SwiperSlide key={index}>
                        <Image src={item!} width={850} height={300} draggable="false" alt={"img"} />
                        <img draggable="false" src={item} width="100%" alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper> */}
                  <Swiper
                    loop
                    autoplay
                    navigation
                    slidesPerView={1}
                    modules={[Navigation, Autoplay]}
                  >
                    {images.map((item: string | undefined, index: number) => (
                      <SwiperSlide key={index}>
                        <Image 
                          draggable="false"
                          width={'675'}
                          height={'375'}
                          className={'border'}
                          src={item!} 
                          alt={"img"} 
                          />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page