"use client";
import Link from "next/link";

// import { LogoBasement } from "../logos/logo";
import s from "./styles.module.scss";
import { SyntheticEvent, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  menuViewOpen: boolean,
  setMenuViewOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MenuView({ menuViewOpen, setMenuViewOpen } : Props) {

  const aboutUsSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  }, [])

  const goTo = (e: SyntheticEvent) => {
    console.log(e);
    aboutUsSectionRef.current!.scrollIntoView({ behavior: 'smooth' });
  }
  

  return (
    <div className={`${s["menu-view-wrapper"]} ${ menuViewOpen ? s["show"] : s["hide"] } text-white`}>


      <div className={`${s['menu-content']}`}>
        
        <div className={`${s['head']}`}>

          <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col">

                <Link href={"/"}>
                  <svg width="146" height="23" viewBox="0 0 146 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7 11.08C16.86 11.46 17.78 12.1 18.46 13C19.14 13.88 19.48 14.98 19.48 16.3C19.48 18.12 18.78 19.53 17.38 20.53C15.98 21.51 13.94 22 11.26 22H0.82V0.999999H10.66C13.14 0.999999 15.05 1.49 16.39 2.47C17.73 3.43 18.4 4.76 18.4 6.46C18.4 7.5 18.16 8.42 17.68 9.22C17.2 10.02 16.54 10.64 15.7 11.08ZM4.72 4.06V9.85H10.24C11.6 9.85 12.64 9.61 13.36 9.13C14.1 8.63 14.47 7.91 14.47 6.97C14.47 6.01 14.1 5.29 13.36 4.81C12.64 4.31 11.6 4.06 10.24 4.06H4.72ZM11.02 18.94C14.04 18.94 15.55 17.93 15.55 15.91C15.55 13.89 14.04 12.88 11.02 12.88H4.72V18.94H11.02ZM26.6423 0.999999H30.5423V18.7H41.5223V22H26.6423V0.999999ZM61.3677 17.14H50.8677L48.7977 22H44.7777L54.2277 0.999999H58.0677L67.5477 22H63.4677L61.3677 17.14ZM60.0777 14.08L56.1177 4.9L52.1877 14.08H60.0777ZM91.8784 0.999999V22H88.6684L77.0884 7.78V22H73.2184V0.999999H76.4284L88.0084 15.22V0.999999H91.8784ZM110.226 22.3C108.106 22.3 106.186 21.84 104.466 20.92C102.766 19.98 101.426 18.69 100.446 17.05C99.4855 15.41 99.0055 13.56 99.0055 11.5C99.0055 9.44 99.4955 7.59 100.476 5.95C101.456 4.31 102.796 3.03 104.496 2.11C106.216 1.17 108.136 0.699999 110.256 0.699999C111.976 0.699999 113.546 0.999999 114.966 1.6C116.386 2.2 117.586 3.07 118.566 4.21L116.046 6.58C114.526 4.94 112.656 4.12 110.436 4.12C108.996 4.12 107.706 4.44 106.566 5.08C105.426 5.7 104.536 6.57 103.896 7.69C103.256 8.81 102.936 10.08 102.936 11.5C102.936 12.92 103.256 14.19 103.896 15.31C104.536 16.43 105.426 17.31 106.566 17.95C107.706 18.57 108.996 18.88 110.436 18.88C112.656 18.88 114.526 18.05 116.046 16.39L118.566 18.79C117.586 19.93 116.376 20.8 114.936 21.4C113.516 22 111.946 22.3 110.226 22.3ZM134.673 22.3C132.533 22.3 130.603 21.84 128.883 20.92C127.163 19.98 125.813 18.69 124.833 17.05C123.853 15.39 123.363 13.54 123.363 11.5C123.363 9.46 123.853 7.62 124.833 5.98C125.813 4.32 127.163 3.03 128.883 2.11C130.603 1.17 132.533 0.699999 134.673 0.699999C136.813 0.699999 138.743 1.17 140.463 2.11C142.183 3.03 143.533 4.31 144.513 5.95C145.493 7.59 145.983 9.44 145.983 11.5C145.983 13.56 145.493 15.41 144.513 17.05C143.533 18.69 142.183 19.98 140.463 20.92C138.743 21.84 136.813 22.3 134.673 22.3ZM134.673 18.88C136.073 18.88 137.333 18.57 138.453 17.95C139.573 17.31 140.453 16.43 141.093 15.31C141.733 14.17 142.053 12.9 142.053 11.5C142.053 10.1 141.733 8.84 141.093 7.72C140.453 6.58 139.573 5.7 138.453 5.08C137.333 4.44 136.073 4.12 134.673 4.12C133.273 4.12 132.013 4.44 130.893 5.08C129.773 5.7 128.893 6.58 128.253 7.72C127.613 8.84 127.293 10.1 127.293 11.5C127.293 12.9 127.613 14.17 128.253 15.31C128.893 16.43 129.773 17.31 130.893 17.95C132.013 18.57 133.273 18.88 134.673 18.88Z" fill="white"/>
                  </svg>
                </Link>

              </div>
              <div className="col text-end">
                  
                <button 
                  className="btn btn-link d-flex ms-auto align-items-center text-white gap-1 text-decoration-none"
                  onClick={ () => setMenuViewOpen(false) }
                  >
                  <small>Menú</small>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                </button>

              </div>
            </div>
          </div>

        </div>

        <div className="container h-100 py-5">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-11 col-md-12">

                <div className="row">
                  <div className="col-12 col-md-8">
                    
                    <div className="mb-5">
                      <h4 style={{ fontSize: '1.25em', fontWeight: 'bold', color: '#98A5B1', lineHeight: '1em' }}>E-mail</h4>
                      <a href="mailto:info@blanco-brand.com" className="text-white text-decoration-none fs-3">info@blanco-brand.com</a>
                    </div>

                    <div className="mb-5">
                      <h4 style={{ fontSize: '1.25em', fontWeight: 'bold', color: '#98A5B1', lineHeight: '1em' }}>Ubicación</h4>
                      <p className="text-white text-decoration-none fs-3">Santiago, Chile</p>
                    </div>

                    <div className="pt-5">
                      <p className="text-white fs-3">¿Alguna pregunta? Felices te ayudamos</p>
                      {/* <MyGradientButton 
                      classes="mb-5"
                        onClick={() => {}}
                        >
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          fontSize: '20px',
                          gap: '.5em'
                          }}>
                          Contáctanos
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                          </svg>
                        </div>
                      </MyGradientButton> */}
                      <button className="btn-gradient mb-5">
                        Contáctanos
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                        </svg>
                      </button>
                    </div>

                  </div>
                  <div className="col">

                    <div className={s["menu-wrapper"]}>
                      <ul className={`${s["primary-menu"]} display-4 text-uppercase karla`}>
                        <li>
                          <Link className="text-white text-decoration-none karla" href={'/'} onClick={ () => setMenuViewOpen(false) }>Home</Link>
                        </li>
                        <li>
                          <Link className="text-white text-decoration-none karla" href={'/#ourServiceSection'} onClick={ () => setMenuViewOpen(false) }>Servicio</Link>
                        </li>
                        <li>
                          <Link className="text-white text-decoration-none karla" href={'/#portfolio'} onClick={ () => setMenuViewOpen(false) }>Portafolio</Link>
                        </li>
                        <li>
                          <Link className="text-white text-decoration-none karla" href={'/#contact'} onClick={ () => setMenuViewOpen(false) }>Contacto</Link>
                        </li>
                        <li>
                          <Link className="text-white text-decoration-none karla" href={'/#about'} onClick={ () => setMenuViewOpen(false) }>Nosotros</Link>
                        </li>
                      </ul>

                      <ul className={`${s["secondary-menu"]} fs-4 fw-medium karla`}>
                        <li>
                          {/* <Link href={'/#team'} className="text-white  text-decoration-none" onClick={ () => setMenuViewOpen(false) }>Equipo</Link> */}
                          <a href={'/#team'} className="text-white  text-decoration-none" onClick={ () => setMenuViewOpen(false) }>Equipo</a>
                        </li>
                        <li>
                          {/* <Link href={'/#mision'} className="text-white  text-decoration-none" onClick={ () => setMenuViewOpen(false) }>Misión</Link> */}
                          <a href={'/#misionSection'} className="text-white  text-decoration-none" onClick={ () => setMenuViewOpen(false) }>Misión</a>
                        </li>
                        <li>
                          <Link href={'/#values'} className="text-white  text-decoration-none" onClick={ () => setMenuViewOpen(false) }>Principios</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
