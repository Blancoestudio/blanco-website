
import React, { useEffect, useRef, useState } from 'react'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import s from './styles.module.scss';
import { basePath } from '@/next.config';
interface formProps {
  email: string,
}

async function getData(data: { email: string }) {

  try {
    basePath
    const response = await fetch(`${basePath}/api/contact`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })

    const resp = await response.json();
    return resp

  } catch (error) {
     throw Error('Errorrrrrrr!')
  }

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

  useEffect(() => {

    let ctx = gsap.context(() => {

      if (typeof window !== 'undefined') {

        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();
  
        tl.fromTo(formRef.current, {
          opacity: 0,
          yPercent: 100,
        }, {
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top bottom',
            end: '100% 95%',
            scrub: 1,
          },
          opacity: 1,
          yPercent: 0,
        })
        
      }

    }, );
    return () => ctx.revert(); // cleanup! 

  }, [])

  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    gsap.to(errorAlertRef.current, {
      opacity: 0,
      top: '0'
    })
    setFormData({ ...formData, [e.target.name] : e.target?.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
    
    try {
      const response = await getData(formData);
      
      if (response.status) {
        // console.log(response.status);
        // console.log('Status OK');

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

      } else {
        // console.log(response.status);
        // console.log('Status UNDEFINED');

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
      }

    } catch (error) {
      console.log(error);
    }

    setSending(false);

  }

  return (
    <>
    <div ref={formRef} className="d-flex flex-column flex-md-row align-items-center justify-content-center">
      <div className={s["contact-container"]}>
        <form
          className="d-flex align-items-center gap-4 position-relative"
          noValidate
          method="post"
          onSubmit={ (e) => handleSubmit(e) }
        >
          <div className='d-flex flex-column'>

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
                  className="btn btn-gradient text-white text-decoration-none fs-5 mt-md-0" 
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
          </div>
            <div ref={errorAlertRef} className={`${s['error-msg']} w-100 alert alert-danger py-2`} role="alert">
              Error al enviar el mensaje, por favor intenta nuevamente.
            </div>

            <div ref={successAletRef} className={`${s['success-msg']} w-100 alert alert-success py-2`} role="alert">
              ¡Correo recibido! Nos pondremos en contacto contigo.
            </div>
        </form>
        <a className="btn btn-link text-white text-decoration-none fs-5 mt-5 mt-md-0" href="mailto:info@blanco-brand.com" role="button">info@blanco-brand.com</a>
      </div>
    </div>
    </>
  )
}
