import React, { useEffect, useRef } from 'react'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ContactForm } from '../ContactForm';

import s from './styles.module.scss';

export const Contact = () => {

  useEffect(() => {
    
    // let ctx = gsap.context(() => {
    // }, );
    // return () => ctx.revert(); // cleanup! 
    let ctx = gsap.context(() => {

      if (typeof window !== 'undefined') {

        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();
  
        tl.fromTo('.anim-text-line', {
          opacity: 0,
          yPercent: 100,
        }, {
          scrollTrigger: {
            trigger: '.anim-text-line',
            start: 'top 75%',
            end: '100% center',
            // toggleActions: "restart pause pause reverse",
            scrub: 1,
            snap: 1
          },
          opacity: 1,
          stagger: .25,
          yPercent: 0,
        })
        
      }

    }, );
    return () => ctx.revert(); // cleanup! 

  }, [])
  
  
  return (
    <div id="contactSection" className="section full">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col">

              <div className={`${s["header"]} mb-5`}>
                <h2 className="text-center text-uppercase karla h1 overflow-hidden">
                  <span className="d-block anim-text-line">Colaboramos</span>
                </h2>
                <h2 className="text-center text-uppercase karla h1 overflow-hidden">
                  <span className="d-block anim-text-line">para lograr tus</span>
                </h2>
                <h2 className="text-center text-uppercase karla h1 overflow-hidden">
                  <span className="d-block anim-text-line">objetivos</span>
                </h2>
              </div>

              <ContactForm />

          </div>
        </div>
      </div>
    </div>
  )
}
