import React from 'react'

import s from './styles.module.scss';

export const Mision = () => {
  return (
    <div className="section py-5">
      <div className="container">
        <div className="row">
          <div className="col">

            <div className="mt-md-5 py-5">
              <h2 className="text-white karla" style={{ fontSize: '4em' }}>SOBRE BLANCO</h2>
            </div>

            <div className={`${s["grid-wrapper"]} mb-5`}>
              <div>
                {/* <MyGradientButton
                  onClick={() => console.log("You clicked on the pink circle!")}
                  >Más sobre nosotros</MyGradientButton> */}
              </div>
              <div>
                <p className="text-end nunito fs-4">Nuestra misión es impulsar el cambio a través de la tecnología y crear soluciones inspiradoras y escalables que transformen la forma en que las empresas y las personas interactúan con el mundo.</p>
              </div>
              <div className={s["data"]}>
                <small>Clientes regulares</small>
                <span className="karla display-2">90%</span>
              </div>
              <div className={s["data"]}>
                <small>Especialistas</small>
                <span className="karla display-2">9</span> 
              </div>
              <div className={`${s["data"]} border-end-0`}>
                <small>Nada nos detiene desde</small>
                <span className="karla display-2">2020</span> 
              </div>
              <div>
                <p>¿Tienes un sueño y no sabes cómo llevarlo a la realidad?</p>
              </div>
              <div>Test</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
