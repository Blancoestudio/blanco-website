'use client'

import React, { useEffect, useRef } from 'react'

import s from './styles.module.scss';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';


export const AboutUs = () => {

  const aboutUsSectionRef = useRef(null);
  const aboutUswrapperRef = useRef(null);
  
  
  useEffect(() => {
    
    let ctx = gsap.context(() => {

      if (typeof window !== 'undefined') {

        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();
  
        tl.fromTo(aboutUswrapperRef.current, {
          opacity: .5,
          scale: .75,
        }, {
          opacity: 1,
          scale: 1,
        })
  
        ScrollTrigger.create({
          animation: tl,
          trigger: aboutUsSectionRef.current,
          start: 'top top',
          end: '100% top',
          toggleActions: "restart reverse restart reverse",
          scrub: true,
          pin: true,
          snap: 1,
          anticipatePin: 1,
        })

        tl.fromTo('.anim-2', {
          y: '50%',
          opacity: 0,
        }, {
          y: 0,
          opacity: 1,
        })
      }

      
    }, );
    
    return () => ctx.revert(); // cleanup! 
    
  }, [])
  

  return (
    <div ref={aboutUsSectionRef} id="aboutUsSection" className="section full">
      <div ref={aboutUswrapperRef} className={`${s['about-us-wrapper']}`}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col">

                <div className={s["second-container"]}>
                  <div className={s["second-wrapper"]}>
                    <div className={s["second-header"]}>
                      <h1 className="header-title karla text-center text-md-start overflow-hidden mb-0">
                        <div className="d-block anim-2">
                          BLANCO TEAM
                        </div>
                      </h1>
                    </div>

                    <div className={s["second-content"]}>
                      <div className={s["second-link-container"]}>
                        
                        <Link
                          className="btn-gradient text-white text-decoration-none anim-2"
                          href={'/'}>
                            Más sobre nosotros
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                            </svg>
                        </Link>
                      
                      </div>

                      <div className={`${s["second-detail-container"]} text-center text-md-end overflow-hidden`}>
                        <div className="d-block anim-2">
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
    </div>
  )
}
