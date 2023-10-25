'use client'

import React, { useEffect, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import terramarIMG from '../../../assets/images/terramar.png';
import alexStewartIMG from '../../../assets/images/alexstewart.png';
import andesConnectIMG from '../../../assets/images/andesconnect.png';
import kepperIMG from '../../../assets/images/keeper.png';
import cardiomasIMG from '../../../assets/images/cardiomas.png';
import beewiseIMG from '../../../assets/images/beewise.png';
import abastibleIMG from '../../../assets/images/abastible.png';
import eepIMG from '../../../assets/images/educando.png';
import Image from 'next/image';
import Link from 'next/link';

import s from './styles.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Portfolio = () => {

  const portfolioSectionRef = useRef(null);
  const portfolioWrapper = useRef(null);
  
  useEffect(() => {
    
    let ctx = gsap.context(() => {

      if (typeof window !== 'undefined') {

        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();
  
        tl.fromTo(portfolioWrapper.current, {
          opacity: .5,
          scale: .75,
        }, {
          opacity: 1,
          scale: 1,
        })
  
        ScrollTrigger.create({
          animation: tl,
          trigger: portfolioSectionRef.current,
          start: 'top top',
          end: '100% center',
          scrub: true,
          pin: true,
          snap: 1,
          anticipatePin: 1,
        })

      }
      
    }, );
    
    return () => ctx.revert(); // cleanup! 
    
  }, [])

  const data = [
    // {
    //   title: "BELIEVE IN YOU",
    //   description: "COACH PARA LA PAES",
    //   link: "http://biu.blanco-estudio.com/",
    //   external: true,
    //   imageUrl: "/images/believeinyou.png",
    // },
    {
      title: "Terramar",
      description: "MATERIAS PRIMAS",
      link: "/projects/terramar",
      external: false,
      imageUrl: terramarIMG,
    },
    {
      title: "Alex Stewart",
      description: "INSPECCIÓN Y SUPERVISION",
      link: "/projects/alex-stewart",
      external: false,
      imageUrl: alexStewartIMG,
    },
    // {
    //   title: "Agrifood 365",
    //   description: "EVENTOS AGRÍCOLAS",
    //   link: "https://www.agrifood365.com/",
    //   external: true,
    //   imageUrl: "/images/agrifood.png",
    // },
    {
      title: "Andes Connect",
      description: "PLATAFORMA DE NETWORKING",
      link: "https://andesconnect.com/",
      external: true,
      imageUrl: andesConnectIMG,
    },
    {
      title: "KEEPER",
      description: "SEGURIDAD Y COMUNIDAD",
      link: "https://www.keepercondominios.com/",
      external: true,
      imageUrl: kepperIMG,
    },
    {
      title: "Cardiomas",
      description: "SOLUCIONES CARDIOVASCULARES",
      link: "/projects/cardiomas",
      external: false,
      imageUrl: cardiomasIMG,
    },
    {
      title: "BEEWISE",
      description: "GAMIFICACIÓN Y APRENDIZAJE",
      link: "/projects/beewise",
      external: false,
      imageUrl: beewiseIMG,
    },
    {
      title: "ABASTIBLE",
      description: "APLICACIÓN MÓVIL",
      link: "/projects/abastible",
      external: false,
      imageUrl: abastibleIMG,
    },
    {
      title: "EDUCANDO EN PANDEMIA",
      description: "COVID",
      link: "https://www.educacionoh.udd.cl/",
      external: true,
      imageUrl: eepIMG,
    },
  ];

  return (
    <div ref={portfolioSectionRef} id="portfolioSection" className="section full">

      <div ref={portfolioWrapper} className={`${s['portfolio-wrapper']}`}>

        <div className={`${s["wrapper-slider"]}`}>
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
                <Image 
                  fill
                  priority
                  src={item.imageUrl} 
                  alt={`${ item.title.toLowerCase() }-image`} 
                  />
                <div className={`${s['slider-data']}`}>
                  <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center">
                      <div className="col-8">
                        <p><span className={`${s['description']}`}>{item.description}</span></p>
                        <h2 className={`${s['name']} mb-3 karla`}>{item.title}</h2>
                        <Link href={ `${item.link}` } target={ item.external ? '_blank' : '' } className="btn-gradient text-white text-decoration-none">
                          {item.external ? "Visitar sitio" : "Descripción"}
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            
            <button className={`button-prev ${s['btn-slider']} ${s['prev']}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" className="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
            </button>
            <button className={`button-next ${s['btn-slider']} ${s['next']}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
              </svg>
            </button>
          </Swiper>
        </div>
      </div>


    </div>
  )
}
