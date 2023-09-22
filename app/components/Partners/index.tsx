'use client'

import React, { useEffect, useRef, useState } from 'react'

import s from './styles.module.scss';
import PartnerItem from '../PartnerItem';

// Import Swiper React components
import SwiperCore, { Swiper } from 'swiper';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

SwiperCore.use([Pagination]);

import 'swiper/css';

export const Partners = () => {

  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const [commentActive, setCommentActive] = useState(0);

  let data = [
    {
      name: "Sebastían Levit",
      role: "Founder Klever",
      image: "",
      description:
        "”Sin duda trabajar con Blanco Estudio superó mis expectativas. Las reuniones previas fueron fundamentales para entender el ecosistema emprendedor y lo importante que es tener un buen producto pero más aún, un buen equipo y modelo de negocios. El camino en conjunto desde la idea, diseño e implementación fue clave recorrerlo junto a ellos.”",
      linkedin: ''
    },
    {
      name: "Franz Apablaza",
      role: "Alex Stewart Co.",
      image: "",
      description:
        "”Blanco Estudio se ha convertido en nuestro socio confiable en el desarrollo de soluciones creativas. Su enfoque estratégico y su talento para combinar tecnología y diseño nos han permitido alcanzar resultados impresionantes. Además, las sesiones de reuniones de brainstorming fueron altamente productivas y nos brindaron un espacio de colaboración estimulante. Estamos encantados con los resultados logrados y agradecidos por el apoyo y compromiso del equipo de Blanco Estudio a lo largo de todo el proceso.”",
      linkedin: ''
    },
    {
      name: "Lorena Contreras",
      role: "Clínica Biobío",
      image: "",
      description:
        "”Trabajar con Blanco Estudio fue una experiencia excepcional. Su equipo demostró un profundo entendimiento de nuestras necesidades y objetivos, lo cual se reflejó en soluciones creativas y personalizadas. Los resultados hablan por sí mismos, y estamos muy contentos con el impacto positivo que han tenido en nuestro negocio. ¡Recomendaría a Blanco Estudio a cualquier emprendedor que busque resultados excepcionales!”",
      linkedin: ''
    },
    {
      name: "Carolina Obregón",
      role: "Universidad del Desarrollo",
      image: "",
      description:
        "”Como directora comercial quiero expresar mi gratitud y reconocimiento a Blanco Estudio por su invaluable contribución durante un momento crucial para nuestra institución. En medio de la pandemia de COVID-19, necesitábamos urgentemente una plataforma eficiente para apoyar a colegios en preparar a sus estudiantes para la Prueba de Aptitud Académica (PAES). Fue entonces cuando nos encontramos con Blanco Estudio, y su respuesta fue extraordinaria.\nSu equipo comprendió rápidamente nuestras necesidades y desafíos específicos.\nEl resultado superó todas nuestras expectativas. La plataforma BIU, no solo fue eficiente y fácil de usar, sino que también proporcionó una experiencia de aprendizaje en línea excepcional.”",
      linkedin: ''
    },
  ];

  const handleSliderComments = (i: number) => {
    swiper?.slideTo(i);
    setCommentActive(i);
  }

  return (
    <div className="section py-5">
      <div className="container">

        <h2 className={`header-title karla text-white my-5 text-center text-md-start`}>NUESTROS<br/> PARTNERS</h2>

        <div className="row justify-content-center">
          <div className="col-12 col-md-3">
            <ul className={`${s['custom-pagination']}`}> 
              {data.map((item, index) => (
                <li 
                  key={index} 
                  className={ `${s['custom-pagination-item']} ${commentActive === index ? s['active'] : ''}` } 
                  onClick={ () => handleSliderComments(index) }
                  >
                    0{index + 1}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-7 offset-md-1"></div>
        </div>
      </div>

      <div className={`${s['comment-slider-wrapper']}`}>
        <div className={`${s['comment-slider']}`}>
          <div className={`${s['gradient']} d-none d-md-block`}></div>

          <SwiperComponent
            modules={[ Pagination ]}
            grabCursor={true}
            wrapperClass={`${s['swiper-products']}`}
            spaceBetween={25}
            onSwiper={ (swiperInstance) => setSwiper(swiperInstance) }
            onSlideChange={(swiper) => setCommentActive(swiper.activeIndex)}
            pagination={{ 
              type: 'custom',
              el: '.custom-pagination', 
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1.35,
              },
            }}
          >
            
              {data.map((item, index) => (
                <SwiperSlide key={index} className={`${s['swiper-item']} `}>
                    <PartnerItem key={index} {...item}  />
                </SwiperSlide>
              ))}
              
          </SwiperComponent>

        </div>
      </div>
    </div>
  )
}
