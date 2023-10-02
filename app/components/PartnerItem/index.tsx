import React, { useEffect, useState } from 'react'
import s from './styles.module.scss';
import Image from 'next/image';

interface PropTypes {
  index: number,
  name: string,
  role?: string,
  image?: string,
  description: string,
  linkedin?: string,
  currentSlide: number,
}

const PartnerItem: React.FC<PropTypes> = ({ index, name, role, image, description, linkedin, currentSlide }) => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log({currentSlide});
    setIsOpen(false)
  }, [currentSlide])
  
  
  return (
      <div className={`${s['partner-wrapper']} text-white`}>
        <div className={`${s['comment']} ${ isOpen ? s['open'] : null }`}>
          <p className="fs-6 text-center text-md-end">{ description ? description : 'Comment' }</p>
        </div>
        <button 
          type="button" 
          disabled={ index !== currentSlide }
          className="btn btn-link text-decoration-none text-white d-flex align-items-center gap-2 ms-5"
          onClick={ () => setIsOpen(!isOpen) }
          >
          <small className="text-white-50">{ isOpen ? 'Ocultar' : 'Más' }</small>
          {
            isOpen
              ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                </svg>
              )
              : (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
              )
          }
        </button>
        <div className={`${s['thumb-wrapper']}  ${ isOpen ? s['hide'] : null }`}>
          <div className={`${s['picture-wrapper']}`}>
            <div className={`${s['picture']}`}>
              {
                image 
                  ? (
                    <Image src={image} width={50} height={50} alt={'img-partner'} />
                    // <img src={image} alt="img-partner" />
                  )
                  : (
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center opacity-25">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                      </svg>
                    </div>
                  )
              }
            </div>
            {
              linkedin
                ? (
                  <a type="button" className={`${s['social']}`} href="" target="_blank">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.93994 5.00002C6.93968 5.53046 6.72871 6.03906 6.35345 6.41394C5.97819 6.78883 5.46937 6.99929 4.93894 6.99902C4.40851 6.99876 3.89991 6.78779 3.52502 6.41253C3.15014 6.03727 2.93968 5.52846 2.93994 4.99802C2.94021 4.46759 3.15117 3.95899 3.52644 3.5841C3.9017 3.20922 4.41051 2.99876 4.94094 2.99902C5.47137 2.99929 5.97998 3.21026 6.35486 3.58552C6.72975 3.96078 6.94021 4.46959 6.93994 5.00002ZM6.99994 8.48002H2.99994V21H6.99994V8.48002ZM13.3199 8.48002H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.90002 14.9399 7.13002 13.2799 10.16L13.3199 8.48002Z" fill="white"/>
                    </svg>
                  </a>
                )
                : null
            }
            
          </div>
          <div className="">
            <h4 className="mb-0 fs-3 karla">{ name ? name : 'Author name' }</h4>
            <p className="mb-0">{ role ? role : 'Role / Position' }</p>
          </div>
        </div>
      </div>
  )
}

export default PartnerItem
