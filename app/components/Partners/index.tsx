'use client'

import React, { useState } from 'react'

import { Swiper as SwiperCmp } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import s from './styles.module.scss';
import Partner from '../Partner';

export const Partners = () => {

  const [swiper, setSwiper] = useState<SwiperCmp | null>(null);
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
    setCommentActive(i)
  }

  return (
    <div className="section py-5">
      <div className="container">

        <h2 className={`${s['header']} karla text-white my-5 text-center text-md-start`}>NUESTROS<br/> PARTNERS</h2>

        <div className="row justify-content-center">
          <div className="col-12 col-md-3">
            <ul className={`${s['custom-pagination']}`}> 
              {data.map((item, index) => (
                <li 
                  key={index} 
                  className={ `${s['custom-pagination-item']} ${commentActive === index ? 'active' : ''}` } 
                  onClick={ () => handleSliderComments(index) }
                  >
                    0{index + 1}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-md-6 offset-md-1">
            <Swiper
              loop
              navigation={{
                nextEl: '.button-next',
                prevEl: '.button-prev',
              }}
              slidesPerView={1}
              modules={[Navigation]}
              className="h-100"
            >
              {data.map((item, index) => (
                <SwiperSlide className={`${s['swiper-item']}`} key={index}>
                  <Partner key={index} {...item}  />
                </SwiperSlide>
              ))}
              
              <button className={`button-prev ${s['btn-slider']} ${s['prev']}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
              </button>
              <button className={`button-next ${s['btn-slider']} ${s['next']}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </button>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
