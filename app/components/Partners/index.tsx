import React from 'react'

import s from './styles.module.scss';

export const Partners = () => {
  return (
    <div className="section py-5">
      <div className="container">
        <div className="row">
          <div className="col">

            <div className="border">
              <h2 className="karla text-white mt-5" style={{ fontSize: '5em' }}>NUESTROS<br/> PARTNERS</h2>

              <div className="d-flex flex-column flex-md-row gap-4 w-100 mt-5 align-items-center align-items-md-start">
                <div className="text-white flex-grow-1 mb-5 mb-md-0">
                  <ul className="custom-pagination"> 
                    {/* {data.map((item, index) => (
                      <li 
                        key={index} 
                        className={ `custom-pagination-item ${commentActive === index ? 'active' : ''}` } 
                        onClick={ () => handleSliderComments(index) }
                        >
                          0{index + 1}
                      </li>
                    ))} */}
                  </ul>
                </div>

                <div className={`position-relative ${s["w-md-75"]}`}>

                  <div className={`${s['gradient']} d-none d-md-block`}></div>

                  <div className={`${s["wrapper-slider"]}`}>
                    
                    {/* <SwiperComponent
                      modules={[ Pagination, Scrollbar]}
                      grabCursor={true}
                      // slidesPerView={1.35}
                      wrapperClass={`${s['swiper-products']}`}
                      spaceBetween={100}
                      onSwiper={ (swiperInstance) => setSwiper(swiperInstance) }
                      onSlideChange={(swiper) => setCommentActive(swiper.activeIndex)}
                      pagination={{ 
                        type: 'custom',
                        el: '.custom-pagination', 
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 1.35,
                        },
                      }}
                    >
                      
                        {data.map((item, index) => (
                          <SwiperSlide key={index} className={`${s['swiper-item']} `}>
                              <Partner key={index} {...item}  />
                          </SwiperSlide>
                        ))}
                        
                    </SwiperComponent> */}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
