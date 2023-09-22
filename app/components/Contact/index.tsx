import React from 'react'

import s from './styles.module.scss';

export const Contact = () => {
  return (
    <div className="section full">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col">

              <div className={`${s["header"]} mb-5`}>
                <h1 className="text-center text-uppercase karla">Colaboramos<br/> para lograr tus<br/> objetivos</h1>
              </div>

              {/* <div className={s["content"]}> */}
              <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                <div className={s["contact-container"]}>
                  <form
                    action="https://formsubmit.io/send/255b96f8-74f5-4277-931f-8866b0a53224"
                    target="_blank"
                    method="POST"
                  >
                    <input
                      name="email"
                      type="email"
                      className={s["contact-email"]}
                      placeholder="Tu correo"
                      color="info"
                      // onBlur={checkEmail}
                      required
                    />
                    {/* <MyGradientButton
                      onClick={() => {}}
                      style={{ 
                        height: 70, 
                        margin: 0
                      }}
                      // type="submit"
                    >
                      <span className="fs-5 px-4" style={{ letterSpacing: '2px' }}>Contáctanos</span>
                    </MyGradientButton> */}
                    <button className="btn btn-gradient text-white text-decoration-none fs-5 mt-5 mt-md-0" type="submit">Contáctanos</button>
                  </form>
                  <a className="btn btn-link text-white text-decoration-none fs-5 mt-5 mt-md-0" href="mailto:info@blanco-brand.com" role="button">info@blanco-brand.com</a>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}
