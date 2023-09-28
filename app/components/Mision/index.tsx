import React from 'react'

import s from './styles.module.scss';

export const Mision = () => {
  return (
    <div id="misionSection" className="section py-5">
      <div className="container">
        <div className="row">
          <div className="col">

            <div className="mt-md-5 py-5">
              <h2 className="header-title text-white karla text-center text-md-start">SOBRE BLANCO</h2>
            </div>

            <div className={`${s["grid-wrapper"]} mb-5`}>
              <div>
                {/* <MyGradientButton
                  onClick={() => console.log("You clicked on the pink circle!")}
                  >Más sobre nosotros</MyGradientButton> */}
                  <button 
                    className="btn-gradient text-white text-decoration-none"
                    >
                    Más sobre nosotros
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                    </svg>
                  </button>
              </div>
              <div>
                <p className="text-end nunito fs-3 text-center text-md-end">Nuestra misión es impulsar el cambio a través de la tecnología y crear soluciones inspiradoras y escalables que transformen la forma en que las empresas y las personas interactúan con el mundo.</p>
              </div>
              <div id="teamSection" className={s["data"]}>
                <small>Clientes regulares</small>
                <span className="karla">90%</span>
              </div>
              <div className={s["data"]}>
                <small>Especialistas</small>
                <span className="karla">9</span> 
              </div>
              <div className={`${s["data"]} border-end-0`}>
                <small>Nada nos detiene desde</small>
                <span className="karla">2020</span> 
              </div>
              <div >
                <p className="text-center text-md-start">¿Tienes un sueño y no sabes cómo llevarlo a la realidad?</p>
              </div>
              <div>Test</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
