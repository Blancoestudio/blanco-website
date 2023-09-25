'use client'

import React, { FC, LegacyRef, useEffect, useLayoutEffect, useRef, useState } from 'react'

import { gsap } from "gsap";

import s from './styles.module.scss';
import ReactPlayer from 'react-player';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



export const MainBanner = () => {

  
  
  const [isPlayerReady  , setIsPlayerReady  ] = useState(false)
  const [bgVideo, setbgVideo] = useState<string>();
  const playerRef = useRef<ReactPlayer | null>(null);
  
  // const boxRef = useRef(null);
  // const boxeRef = useRef(null);

  // const tl = gsap.timeline();
  
  const loaderRef = useRef(null);
  const player = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  useEffect(() => {
    
    setIsPlayerReady(true);
    setbgVideo('videos/bg-video.mp4');
    // if (playerRef.current) {
    //   console.log(playerRef.current.getInternalPlayer);
    // }

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
        opacity: 1,
        yPercent: 0,
        stagger: .25,
        delay: 1,
        duration: .5
      })

      // gsap.to(loaderRef.current, {
      //   opacity: 0,
      //   duration: 2,
      //   ease: 'ease',
      //   zIndex: -2
      // });
  
      // // gsap.from('.text-line', {
      // //   delay: .5,
      // //   opacity: 0,
      // //   y: 40,
      // //   overflow: 'hidden',
      // //   stagger: .35
      // // });
      // gsap.from('.text-line', {
      //   y: '3em',
      // });
      // gsap.to('.text-line', {
      //   scrollTrigger: {
      //     trigger: '.text-line',
      //     start: '-100% center',
      //     end: 'bottom center',
      //     toggleActions: "restart reverse restart reverse",
      //     // markers: true,
      //   },
      //   y: 0,
      //   delay: .25,
      //   overflow: 'hidden',
      //   stagger: .2
      //   // opacity: 1,
      // });
    }
   
    
  }, []);

  // useLayoutEffect(() => {

  //   // Refs allow you to access DOM nodes
  //   // console.log(boxRef) // { current: div.box }
  //   // then we can animate them like so...

  //   // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
  //   let ctx = gsap.context(() => {
  //     // console.log('test');
      
  //     // Our animations can use selector text like ".box" 
  //     // this will only select '.box' elements that are children of the component
  //     // gsap.to(".box", {...});
  //     // gsap.from('.my-box', { 
  //     //   opacity: 0,
  //     //   duration: 1,
  //     // });
  //     // gsap.to('.my-box', { 
  //     //   opacity: 1,
  //     //   duration: 1,
  //     //   // backgroundColor: "#e77614", 
  //     //   // scale: 1.2 
  //     // });
      
  //     // or we can use refs
  //     // gsap.to(circle.current, { rotation: 360 });
  //     // gsap.from(boxRef.current, {
  //     //   opacity: 0,
  //     //   duration: .75,
  //     //   y: 30
  //     // });

  //   }, MainBanner); // <- IMPORTANT! Scopes selector text
    
  //   return () => ctx.revert(); // cleanup
    
  // }, []);

  return (
    <div id="mainBannerSection" className="section full">

      <div className={`${s['loader']}`} ref={loaderRef}></div>

      <div className={`${s['banner-wrapper']}`}>
        <div className={s.video}>
          {
            isPlayerReady
              ? (
                // <ReactPlayer
                //   ref={player}
                //   loop
                //   muted
                //   playing={true}
                //   width={'100%'}
                //   height={'100%'}
                //   url={bgVideo} 
                //   onReady={() => setIsPlayerReady(true)}
                //   />
                // <div
                //   dangerouslySetInnerHTML={{
                //     __html: `
                //       <video 
                //         loop
                //         muted
                //         autoPlay
                //         >
                //         <source src={bgVideo} type="video/mp4" />
                //       </video>
                //     `
                //   }}>
                // </div>
                  <video 
                    loop
                    muted
                    autoPlay
                    >
                    <source src={bgVideo} type="video/mp4" />
                  </video>
              ) : null
          }
        </div>

        <div className="container h-100">
          <div className="row h-100 align-items-center ">
            <div className="col text-center">
              <h1 ref={text1} className="title-line text-center karla overflow-hidden">
                <span className="d-block text-line">TECNOLOGÍA</span>
              </h1>
              <h1 ref={text2} className="title-line text-center karla overflow-hidden">
                <span className="d-block text-line">TRANSFORMACIÓN</span>
              </h1>
              <h1 ref={text3} className="title-line text-center karla overflow-hidden">
                <span className="d-block text-line">CREATIVIDAD</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
