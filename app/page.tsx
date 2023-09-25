'use client'

import { MainBanner } from './components/MainBanner'
import { AboutUs } from './components/AboutUs'
import { OurServices } from './components/OurServices'
import { Marquee } from './components/Marquee'
import { Portfolio } from './components/Portfolio'
import { Mision } from './components/Mision'
import { Partners } from './components/Partners'
import { Contact } from './components/Contact'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

export default function Home() {

  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    
    if (typeof window !== 'undefined') {
      
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      const scrolling = {
        enabled: true,
        events: "scroll,wheel,touchmove,pointermove".split(","),
        prevent: (e: Event) => e.preventDefault(),
        disable() {
          if (scrolling.enabled) {
            scrolling.enabled = false;
            window.addEventListener("scroll", gsap.ticker.tick, { passive: true });
            scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, scrolling.prevent, { passive: false }));
          }
        },
        enable() {
          if (!scrolling.enabled) {
            scrolling.enabled = true;
            window.removeEventListener("scroll", gsap.ticker.tick);
            scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
          }
        }
      };

      const goToSection = (section: any, anim?: gsap.core.Tween) => {
        
        if (scrolling.enabled) { // skip if a scroll tween is in progress
          scrolling.disable();
          gsap.to(window, {
            scrollTo: { y: section, autoKill: false },
            onComplete: scrolling.enable,
            duration: 1
          });
  
          anim && anim.restart();
        }
      }

      // Initialize ScrollTrigger for each section
      sectionsRef.current.forEach((section, i) => {
        const intoAnim = gsap.from(section.querySelector(".right-col"), 
          { yPercent: 50, 
            duration: 1, 
            paused: true });

        ScrollTrigger.create({
          trigger: section,
          start: "top bottom-=1",
          end: "bottom top+=1",
          onEnter: () => goToSection(section.offsetTop, intoAnim),
          onEnterBack: () => goToSection(section.offsetTop)
        });
      });


    }

  }, [])
 

  return (
    <div>
      <MainBanner />
      <AboutUs  />
      <OurServices  />
      <Marquee  />
      <Portfolio  />
      <Mision  />
      <Partners  />
      <Contact  />
    </div>
  )
}
