import React from 'react'

import s from './styles.module.scss';

export const MainBanner = () => {
  return (
    <div className="section full">
      <div className={`${s['banner-wrapper']}`}>
        <video autoPlay muted loop className={s.video}>
          <source src="videos/bg-video.mp4" type="video/mp4" />
        </video>

        <div className="container h-100">
          <div className="row h-100 align-items-center ">
            <div className="col text-center">
              <h1 className="text-center karla">TECNOLOGÍA</h1>
              <h1 className="text-center karla">TRANSFORMACIÓN</h1>
              <h1 className="text-center karla">CREATIVIDAD</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
