"use client";

import { basePath } from '../../../next.config.js';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import bg from "assets/images/abastible.png";
import Image from "next/image";

import AppImageCarousel from '@/app/components/AppImageCarousel';

import s from "./styles.module.scss";

export default function Page() {
  const webImages = Array(5)
    .fill(0)
    .map((item, index) => {
      return `/images/abastible/Web/Abastible_web_${index + 1}.png`;
    });
  const appImages = Array(6)
    .fill(0)
    .map((item, index) => {
      return `images/abastible/App/Abastible_App_${index + 1}.png`;
    });
  return (
    <main className="bg-black">
      <div className="cover-wrapper">
        <Image src={bg.src} fill={true} className="img-cover" alt={"image-background"} />
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-end">
            <div className="col-11 mb-5">
              
              <div className="row">
                <div className="col-12 col-md-6">
                  <h1 className="display-1 fw-bold karla">ABASTIBLE</h1>
                </div>
                <div className="col-12 col-md-6">
                  <p className="fs-4">Proyectos de desarrollo de software, aplicaciones e Iot con foco en clientes y distribuidores.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">

              <div className={`${s['inner-service-wrapper']} mb-5`}>
                <div>
                  <Swiper
                    loop
                    autoplay
                    navigation
                    slidesPerView={1}
                    modules={[Navigation, Autoplay]}
                  >
                    {webImages.map((item: string | undefined, index: number) => (
                      <SwiperSlide key={index}>
                        <Image 
                          draggable="false"
                          width={750} height={550}
                          className={'border'}
                          src={`${basePath}${item}`} 
                          alt={"img"} 
                          />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>    
                <div>
                  <p className="fs-5 text-center text-md-start">Desarrollo de plataforma interna, para distribuidores para solicitud de pedidos, descuentos, seguimiento de flota y merchandising.</p>  
                </div>    
                <div>
                  <p className="fs-5 text-center text-md-start">Desarrollo de aplicación móvil para solicitar gas a domicilio sea envasado o granel, incluyendo geoposicionamiento, aviso de proximidad y pago.</p>  
                </div>    
              </div>

          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-12 col-md-9">
              <div className="row g-5 align-items-center">
                <div className="col-12 col-md-5 px-5 px-md-0">
                  <h3 className="karla text-center text-md-start">Aplicaciones para clientes y repartidores</h3>
                  <p className="fs-5 text-center text-md-start">Desarrollo de aplicación móvil para solicitar gas a domicilio sea envasado o granel, incluyendo geoposicionamiento, aviso de proximidad y pago.</p>
                </div>
                <div className="col-12 col-md-6 offset-md-1">
                  <AppImageCarousel images={appImages} /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
