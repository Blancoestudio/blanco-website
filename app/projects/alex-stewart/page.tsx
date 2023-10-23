
import React from 'react'
import Image from 'next/image'

import bg from "../../../assets/images/alexstewart.png";
import { ImageSlider } from '../../components/ImageSlider/index';

import s from './styles.module.scss';
import { BannerWrapper } from '../components/BannerWrapper';

const page = () => {

  const images = Array(6)
    .fill(0)
    .map((item, index) => {
      return `/images/alex-stewart/Web/AlexStewart_web_${index + 1}.png`;
    });

  return (
    <div>
      <BannerWrapper>
        <div className="cover-wrapper">
          <Image src={bg.src} className="img-cover" fill={true} alt={"image-background"} />
          {/* <img className="img-cover" src={bg.src} alt="image-background" /> */}
          <div className="container h-100 position-relative z-1">
            <div className="row h-100 justify-content-center align-items-end">
              <div className="col-11 mb-5">
                
                <div className="row">
                  <div className="col-12 col-md-7">
                    <h1 className="display-1 fw-bold karla">ALEX STEWART</h1>
                  </div>
                  <div className="col-12 col-md-5">
                    <p className="fs-4">Optimizando la gestión de órdenes de trabajo para las distintas oficinas de Chile.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </BannerWrapper>

      <div className="h-100 py-5 text-white">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-11">
              
              <div className={`${ s['inner-service-wraper'] }`}>
                <div>
                  <p className="fs-5 text-center text-md-start">Se desarrolla una plataforma que permite un mejor control, seguimiento y gestión de operaciones, pudiendo monitorear los tiempos de facturación, y envío de informes. Generando una plataforma ágil y amigable para el usuario.</p>
                </div>
                <div>
                  <ImageSlider 
                    images={images} 
                    imgWrapperClass={`${s['img-wrapper']}`} 
                    />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page