'use client'

import React, { useEffect } from 'react'

import s from './styles.module.scss';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export const AboutUs = () => {
  
  
  useEffect(() => {
    
    // gsap.from('.text-line-2', {
      //   y: '1.5em',
      //   overflow: 'hidden'
      // })
      
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo('.text-line-2', {
            
            y: '100%',
          }, {
            scrollTrigger: {
              trigger: '#aboutUsSection',
              start: 'top center',
              end: 'bottom 85%',
              toggleActions: "restart reverse restart reverse",
              // markers: true,
              // pin: "#aboutUsSection",
              // scrub: true
            },
            duration: .75,
            y: 0,
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
    <div id="aboutUsSection" className="section full bg-white text-black border border-danger">
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
                      
                      <button 
                        className="btn-gradient text-white text-decoration-none"
                        // onClick={() => {
                        //   router.push("/AboutUs");
                        // }}
                        >
                        Más sobre nosotros
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                        </svg>
                      </button>
                     
                    </div>

                    <div className={`${s["second-detail-container"]} text-center text-md-end`}>
                      Después de muchos años diseñando y desarrollando, hoy somos un laboratorio para implementar ideas y sueños en el mercado tecnológico, desde prototipos hasta productos escalables.
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
