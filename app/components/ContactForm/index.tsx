

import React, { useEffect, useRef, useState } from 'react'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import s from './styles.module.scss';
interface formProps {
  email: string,
}

export const ContactForm = () => {

  const formRef = useRef(null);
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [sending, setSending] = useState(false);
  const errorAlertRef = useRef(null);
  const successAletRef = useRef(null);

  const [formData, setFormData] = useState<formProps>({
    email: '',
  });

  // useEffect(() => {

  //   let ctx = gsap.context(() => {

  //     if (typeof window !== 'undefined') {

  //       gsap.registerPlugin(ScrollTrigger);

  //       const tl = gsap.timeline();
  
  //       tl.fromTo(formRef.current, {
  //         opacity: 0,
  //         yPercent: 100,
  //       }, {
  //         scrollTrigger: {
  //           trigger: formRef.current,
  //           start: 'top bottom',
  //           end: '100% 95%',
  //           scrub: 1,
  //         },
  //         opacity: 1,
  //         yPercent: 0,
  //       })
        
  //     }

  //   }, );
  //   return () => ctx.revert(); // cleanup! 

  // }, [])

  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    gsap.to(errorAlertRef.current, {
      opacity: 0,
      top: '0'
    })
    setFormData({ ...formData, [e.target.name] : e.target?.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation
    if ((formData.email === '') || !emailRegex.test(formData.email)) {

      gsap.to(errorAlertRef.current, {
        opacity: 1,
        top: '110%'
      })

      setTimeout(() => {
        
        gsap.to(errorAlertRef.current, {
          opacity: 0,
          top: '0'
        })
        
      }, 3000);

      return
    }

    setSending(true);

    // api call
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (res.ok) {

      const response = await res.json();
      setFormData({ email: '' });
      gsap.to(successAletRef.current, {
        opacity: 1,
        top: '110%'
      })
      setTimeout(() => {
        gsap.to(successAletRef.current, {
          opacity: 0,
          top: 0
        })
      }, 3000);

      setSending(false);

    } else {
      
      gsap.to(errorAlertRef.current, {
        opacity: 1,
        top: '110%'
      })

      setTimeout(() => {
        
        gsap.to(errorAlertRef.current, {
          opacity: 0,
          top: '0'
        })
        
      }, 3000);

      setSending(false);

    }

  }

  return (
    <>
    <div className="row justify-content-center">
      <div className="col-10 col-md-8">

        <div className={`${s["contact-container"]}`}>      
          <form method="post" noValidate
            className="d-flex align-items-center gap-4 position-relative"  
            onSubmit={ (e) => handleSubmit(e) }>
              
            <div className='d-flex flex-column'>

              <div>                
              
                <div className={`${s['input-wrapper']}`}>
                  <div className="position-relative">
                    <input
                      name="email"
                      type="email"
                      className={`${s["contact-email"]}`}
                      placeholder="Tu correo"
                      color="info"
                      value={formData.email}
                      onChange={(e) => hanldeChange(e)}
                      // onBlur={checkEmail}
                      required
                    />
                    <button 
                      type="submit"
                      className="btn btn-gradient text-white text-decoration-none fs-5 mt-md-0 rounded-5" 
                      >
                        {
                          !sending
                            ? <>Contáctanos</>
                            : (
                              <>
                              <small>Enviando</small>
                              <svg width="30" height="30" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                                    <g fill="none" fillRule="evenodd" strokeWidth="2">
                                        <circle cx="22" cy="22" r="1">
                                            <animate attributeName="r"
                                                begin="0s" dur="1.8s"
                                                values="1; 20"
                                                calcMode="spline"
                                                keyTimes="0; 1"
                                                keySplines="0.165, 0.84, 0.44, 1"
                                                repeatCount="indefinite" />
                                            <animate attributeName="stroke-opacity"
                                                begin="0s" dur="1.8s"
                                                values="1; 0"
                                                calcMode="spline"
                                                keyTimes="0; 1"
                                                keySplines="0.3, 0.61, 0.355, 1"
                                                repeatCount="indefinite" />
                                        </circle>
                                        <circle cx="22" cy="22" r="1">
                                            <animate attributeName="r"
                                                begin="-0.9s" dur="1.8s"
                                                values="1; 20"
                                                calcMode="spline"
                                                keyTimes="0; 1"
                                                keySplines="0.165, 0.84, 0.44, 1"
                                                repeatCount="indefinite" />
                                            <animate attributeName="stroke-opacity"
                                                begin="-0.9s" dur="1.8s"
                                                values="1; 0"
                                                calcMode="spline"
                                                keyTimes="0; 1"
                                                keySplines="0.3, 0.61, 0.355, 1"
                                                repeatCount="indefinite" />
                                        </circle>
                                    </g>
                                </svg>
                              </>
                            )
                        }
                    </button>
                    
                  </div>
                </div>

                <div ref={errorAlertRef} role="alert"
                  className={`${s['error-msg']} w-100 alert alert-danger py-2`} >
                  Error al enviar el mensaje, por favor intenta nuevamente.
                </div>

                <div ref={successAletRef} role="alert"
                  className={`${s['success-msg']} w-100 alert alert-success py-2`}>
                  ¡Correo recibido! Nos pondremos en contacto contigo.
                </div>

              </div>
              
            </div>
          </form>
          <a className="btn btn-link text-white text-decoration-none fs-5 mt-md-0" href="mailto:info@blanco-brand.com" role="button">info@blanco-brand.com</a>
        </div>

        <div className="w-100 mt-3">
          

          
        </div>


      </div>
    </div>
    {/* <div ref={formRef} className="d-flex flex-column align-items-center justify-content-center">
    </div> */}
    </>
  )
}
