import Link from 'next/link'
import s from './styles.module.scss'

interface PropTypes {
  children: JSX.Element
}

export const BannerWrapper = ({ children } : PropTypes) => {
  return (
    <div className="position-relative">
      <div className={`${ s['banner-wrapper'] }`}>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11">
              <button className="btn btn-lg border-0 px-0 text-decoration-none">
                <Link href={'/#portfolioSection'} className="d-flex align-items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                  </svg>
                  <span>Volver</span>
                </Link>
              </button>
            </div>
          </div>
        </div>

      </div>
      { children }
    </div>
  )
}
