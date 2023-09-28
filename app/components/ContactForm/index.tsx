import React, { useEffect, useRef, useState } from 'react'

import s from './styles.module.scss';
import gsap from 'gsap';
import { basePath } from '@/next.config';

interface formProps {
  email: string
}

export const ContactForm = () => {
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [sending, setSending] = useState(false);
  const errorAlertRef = useRef(null);
  const successAletRef = useRef(null);

  const [formData, setFormData] = useState<formProps>({
    email: '',
  });


  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    gsap.to(errorAlertRef.current, {
      opacity: 0,
      top: '0'
    })
    setFormData({ ...formData, [e.target.name] : e.target?.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email } = formData;

    if (!email || !emailRegex.test(email)) {

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

      await fetch(`${basePath}api/contact`, {
        method: 'post',
        body: JSON.stringify(formData)
      })
        .then(resp => {
          
          if (!resp.ok) {
            throw new Error('Error en la solicitud');
          }
          return resp.json();
        })
        .then(data => {
          // console.log('Respuesta del servidor:', data);
          
          setFormData({ email: '' });
          setSending(false);
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

        })
        .catch(error => {
          console.error('Error:', error);
        });

    } catch (error) {

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

  }

  return (
    <>
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
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
              ¡Correo recibido! Nos pondremos en contacto contigo pronto.
            </div>
        </form>
        <a className="btn btn-link text-white text-decoration-none fs-5 mt-5 mt-md-0" href="mailto:info@blanco-brand.com" role="button">info@blanco-brand.com</a>
      </div>
    </div>
    </>
  )
}
