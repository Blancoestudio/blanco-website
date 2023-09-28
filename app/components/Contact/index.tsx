import React, { useState } from 'react'

import s from './styles.module.scss';
import { ContactForm } from '../ContactForm';


export const Contact = () => {
  
  return (
    <div id="contactSection" className="section full">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col">

              <div className={`${s["header"]} mb-5`}>
                <h1 className="text-center text-uppercase karla">Colaboramos<br/> para lograr tus<br/> objetivos</h1>
              </div>

              {/* <ContactForm /> */}

          </div>
        </div>
      </div>
    </div>
  )
}
