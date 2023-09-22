'use client';

import React from 'react'

import bg from "../../../assets/images/terramar.png";

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import s from './styles.module.scss';

const page = () => {

  const images = Array(8)
    .fill(0)
    .map((item, index) => {
      return `/images/Terramar/Web/Terramar_web_${index + 1}.png`;
    });

  return (
    <div>
      <div className="cover-wrapper">
        <Image src={bg.src} fill={true} className="img-cover" alt={"image-background"} />
        <div className="container h-100 position-relative z-1">
          <div className="row h-100 justify-content-center align-items-end">
            <div className="col-11 mb-5">
              
              <div className="row">
                <div className="col">
                  <h1 className="display-1 fw-bold karla">TERRAMAR</h1>
                </div>
                <div className="col">
                  <p className="fs-4">Participar, activa y responsablemente de la industria de alimentación animal, mirando hacia el futuro de manera sustentable</p>
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
              
              <div className={`${s['inner-service-wrapper']}`}>
                <div>
                  <p className="fs-5">Desarrollo de plataforma para Terramar Estados Unidos para seguimiento y control de importaciones y exportaciones de materia prima.</p>
                </div>
                <div>
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
                <div>
                  <p className="fs-5">Sistema de control y monitoreo de stocks, BL, trazabilidad inbound y outbound, control de embarques y documentación.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* <div className={s["container"]}>
        <div className={s["content"]}>
          <div className={s["left"]}>
            <div className={s["item"]}>
              Desarrollo de plataforma para Terramar Estados Unidos para seguimiento y control de importaciones y
              exportaciones de materia prima.
            </div>
            <div className={s["item"]}>
              Sistema de control y monitoreo de stocks, BL, trazabilidad inbound y outbound, control de embarques y
              documentación.
            </div>
          </div>
          <div className={s["right"]}>
            <ImageCarousel images={images} />
          </div>
        </div>
      </div>

      <div className={s["footer-container"]}>
        <FooterSector />
      </div> */}
    </div>
  )
}

export default page