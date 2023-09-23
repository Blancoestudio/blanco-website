'use client'

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { gsap } from "gsap";

import s from './styles.module.scss';
import ReactPlayer from 'react-player';

export const MainBanner = () => {
  
  const [isPlayerReady  , setIsPlayerReady  ] = useState(false)
  const boxRef = useRef(null);
  const [bgVideo, setbgVideo] = useState<string>();
  const playerRef = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    setIsPlayerReady(true);
    setbgVideo('videos/bg-video.mp4');
    if (playerRef.current) {
      console.log(playerRef.current.getInternalPlayer);
      
    }
  }, []);
  
  useLayoutEffect(() => {
    console.log(playerRef.current?.getInternalPlayer);
    // Refs allow you to access DOM nodes
    // console.log(boxRef) // { current: div.box }
    // then we can animate them like so...
    // gsap.from(boxRef.current, {
    //   duration: 0.6, 
    //   ease: "circ.out", 
    //   y: 80, 
    //   // opacity: 1,
    //   // scale: 1,
    //   // rotationX: 180,
    //   // transformOrigin: "0% 50% -50",
    //   // ease: "back",
    //   // stagger: 0.01
    // });

    // gsap.to(boxRef.current, {
    //   duration: 0.6, 
    //   ease: "circ.out", 
    //   y: 0, 
    //   delay: 0.6
    // });

    
  });

  return (
    <div className="section full">
      <div className={`${s['banner-wrapper']}`}>
        <div className={s.video}>
          {
            isPlayerReady
              ? (
                <ReactPlayer
                  loop
                  muted
                  playing={true}
                  width={'100%'}
                  height={'100%'}
                  url={bgVideo} 
                  onReady={() => setIsPlayerReady(true)}
                  />
              ) : null
          }
        </div>
        {/* <video autoPlay muted loop className={s.video}>
          <source src="videos/bg-video.mp4" type="video/mp4" />
        </video> */}

        <div className="container h-100">
          <div className="row h-100 align-items-center ">
            <div className="col text-center" ref={boxRef}>
              <h1 className={`${s['title-line-1']} text-center karla`}>TECNOLOGÍA</h1>
              <h1 className="text-center karla">TRANSFORMACIÓN</h1>
              <h1 className="text-center karla">CREATIVIDAD</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
