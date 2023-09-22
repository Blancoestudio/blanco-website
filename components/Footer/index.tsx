import React from 'react'

import s from './styles.module.scss';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">

            <div className="border-top border-dark py-5">

              <div className="mb-3">
                {/* <LogoBasement /> */}
              </div>

              <div className="row">
                <div className="col-12 col-md-6 order-2 order-md-1 mt-4 mt-md-0">
                  <p>Siéntete libre de contactarnos <br/> con nosotros</p>
                  <a href="mailto:info@blanco-brand.com" className="fs-4 text-white text-decoration-none">info@blanco-brand.com</a>

                  <div className="d-flex gap-2 mt-5 align-items-center">
                    {/* <Link href={"/"} className={`${s['go-top']} text-white text-decoration-none`}>
                      <Image src={SubirSvg} alt="arrow-up" /> <small>Subir</small>
                    </Link> */}
                  </div>
                </div>

                <div className="col-12 col-md-6 order-1 order-md-2">
                  <ul className={`${s['footer-menu']}`}>
                    <li><Link className="text-white text-decoration-none" scroll={false} href={'#portfolio'}>Portafolio</Link></li>
                    <li><Link className="text-white text-decoration-none" scroll={false} href={'#about'}>Sobre nosotros</Link></li>
                    <li><Link className="text-white text-decoration-none" scroll={false} href={'#services'}>Servicios</Link></li>
                    <li><Link className="text-white text-decoration-none" scroll={false} href={'#contact'}>Contacto</Link></li>
                  </ul>
                </div>
              </div>

              </div>

          </div>
        </div>
      </div>
    </div>
  )
}
