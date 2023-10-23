'use client'

import React, { useEffect, useRef, useState } from 'react'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import s from './styles.module.scss';

export const MainBanner = () => {

  const [isPlayerReady  , setIsPlayerReady  ] = useState(false)
  const [bgVideo, setbgVideo] = useState<string>();
  
  const loaderRef = useRef(null);

  useEffect(() => {
    
    setIsPlayerReady(true);
    setbgVideo('videos/bg-video-reverse.mp4');

    let ctx = gsap.context(() => {

      if (typeof window !== 'undefined') {

        gsap.registerPlugin(ScrollTrigger);
  
        gsap.fromTo(loaderRef.current, {
          opacity: 1
        }, {
          opacity: 0,
          duration: 2,
          ease: 'ease',
          zIndex: -2
        })
  
        gsap.fromTo('.text-line', {
          opacity: 0,
          yPercent: 100,
        }, {
          scrollTrigger: {
            trigger: '.text-line',
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: "restart reverse restart reverse",
          },
          opacity: 1,
          yPercent: 0,
          stagger: .25,
          duration: .5
        })
        
      }
  

    }, );
    return () => ctx.revert(); // cleanup! 

    
  }, []);

  return (
    <div id="mainBannerSection" className="section full">

      <div className={`${s['loader']}`} ref={loaderRef}></div>

      <div className={`${s['banner-wrapper']}`}>
        <div className={`${s['courtain']}`}></div>
        <div className={s.video}>
          {
            isPlayerReady
              ? (
                <div className="w-100 h-100"
                  dangerouslySetInnerHTML={{
                    __html: `<video loop muted autoPlay playsinline>
                              <source src="${bgVideo}" type="video/mp4" />
                            </video>`
                  }}>
                </div>
              ) : null
          }
        </div>

        <div className="container-fluid h-100">
          <div className="row h-100 align-items-center ">
            <div className="col text-center">
              <h1 className="title-line text-center karla overflow-hidden">
                <span className="d-block text-line">TECNOLOGÍA</span>
              </h1>
              <h1 className="title-line text-center karla overflow-hidden">
                <span className="d-block text-line">TRANSFORMACIÓN</span>
              </h1>
              <h1 className="title-line text-center karla overflow-hidden">
                <span className="d-block text-line">CREATIVIDAD</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
