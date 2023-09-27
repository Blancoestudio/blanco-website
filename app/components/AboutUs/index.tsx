'use client'

import React, { useEffect, useRef } from 'react'

import s from './styles.module.scss';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';


export const AboutUs = () => {

  const aboutUsSectionRef = useRef(null);
  const btnMoreRef = useRef(null);
  
  
  useEffect(() => {
    
    // gsap.from('.text-line-2', {
      //   y: '1.5em',
      //   overflow: 'hidden'
      // })
      
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo('.text-line-2', {
            y: '100%',
            opacity: 0,
          }, {
            scrollTrigger: {
              trigger: '#aboutUsSection',
              start: 'top 33.3%',
              end: 'bottom 75%',
              toggleActions: "restart reverse restart reverse",
            },
            y: 0,
            opacity: 1,
            stagger: .25,
            duration: .75,
          })
      
      gsap.fromTo(btnMoreRef.current, {
        y: '200%',
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: '#aboutUsSection',
          start: 'top 33.3%',
          end: 'bottom 75%',
          toggleActions: "restart reverse restart reverse",
        },
        duration: .5,
        y: 0,
        opacity: 1
      })

    }
    
  //   gsap.to('.text-line-2', {
  //     scrollTrigger: {
  //       trigger: '#aboutUsSection',
  //       start: 'top center',
  //       end: 'bottom 85%',
  //       toggleActions: "restart reverse restart reverse",
  //       markers: true,
  //       // pin: "#aboutUsSection",
  //       // scrub: true
  //     },
  //     y: 0,
  //     duration: .5,
  //     overflow: 'hidden',
  //     // duration: 3,
  //     // delay: 1,
  //     // opacity: 1,
  //     // overflow: 'hidden',
  //     // stagger: .35
  //   });
    
  }, [])
  

  return (
    <div ref={aboutUsSectionRef} id="aboutUsSection" className="section full bg-white text-black">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col">

              <div className={s["second-container"]}>
                <div className={s["second-wrapper"]}>
                  <div className={s["second-header"]}>
                    <h1 className="header-title karla text-center text-md-start overflow-hidden mb-0">
                      <div className="d-block text-line-2">
                        BLANCO TEAM
                      </div>
                    </h1>
                  </div>

                  <div className={s["second-content"]}>
                    <div className={s["second-link-container"]}>
                      
                      <Link
                        ref={btnMoreRef}
                        className="btn-gradient text-white text-decoration-none"
                        href={'/#'}>
                          Más sobre nosotros
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                          </svg>
                      </Link>
                     
                    </div>

                    <div className={`${s["second-detail-container"]} text-center text-md-end overflow-hidden`}>
                      <div className="d-block text-line-2">
                        Después de muchos años diseñando y desarrollando, hoy somos un laboratorio para implementar ideas y sueños en el mercado tecnológico, desde prototipos hasta productos escalables.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}
