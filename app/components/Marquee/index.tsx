import React from 'react'

import s from './styles.module.scss';

export const Marquee = () => {
  return (
    <div className="section full">
      {/* <div className="container h-100"> */}
        {/* <div className="row h-100 align-items-center"> */}
          {/* <div className="col"> */}

              <div className={s['marquee-wrapper']}>
                <div className={s.marquee}>
                  
                  <div className={s.marquee1}>
                    {Array(10)
                      .fill(0)
                      .map((_, index) => {
                        return (
                          <span className={`${s.marqueeItem} display-1 text-white karla`} key={index}>
                            "Change the world" - "Dream out loud"
                          </span>
                        );
                      })}
                  </div>

                  <div className={s.marquee2}>
                    {Array(10)
                      .fill(0)
                      .map((_, index) => {
                        return (
                          <span className={`${s.marqueeItem} display-1 text-white karla`} key={index}>
                            "Kiss the future" - "Don't give up"
                          </span>
                        );
                      })}
                  </div>

                  {/* <div className={s.marquee3}>
                    {Array(10)
                      .fill(0)
                      .map((_, index) => {
                        return (
                          <span className={`${s.marqueeItem} karla`} key={index}>
                            EVERY GENERATION GETS A CHANCE TO CHANGE THE WORLD
                          </span>
                        );
                      })}
                  </div> */}
                  
                </div>
              </div>

          {/* </div> */}
        {/* </div> */}
       {/* </div> */}
    </div>
  )
}
