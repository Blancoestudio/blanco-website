import React from 'react'

import bg from "../../../assets/images/cardiomas.png"

import Image from 'next/image';

import s from './styles.module.scss';

const page = () => {

  let data = [
    {
      id: "/01",
      name: "Obras",
      tags: ["Remodelación de espacios para habilitarlos como pabellón de hemodinamia."],
    },
    {
      id: "/02",
      name: "Equipamiento mayor y periféricos",
      tags: [
        "Angiógrafos nde techo y piso nuevos y reacondicionados, máquina para medios de contraste, balón de contrapulsación, IVUS, otros.",
      ],
    },
    {
      id: "/03",
      name: "Mantenimiento",
      tags: ["Contamos con personal para la mantención de equipos de angiografía."],
    },
    {
      id: "/04",
      name: "Insumos específicos",
      tags: ["Proveemos de insumos específicos como stands, guías, catéteres, dispositivos electrofisiológicos, etc."],
    },
    {
      id: "/05",
      name: "Convenios aseguradora",
      tags: ["Damos asesoría en convenios a suscribirse con aseguradoras bajo modalidad paquetizada."],
    },
    {
      id: "/06",
      name: "Personal médico",
      tags: ["Proveemos de personal como hemodinamistas, electrofisiólogos, enfermeras, tecnólogos, tens"],
    },
  ];

  return (
    <div>
      <div className="cover-wrapper">
        <Image src={bg.src} className="img-cover" fill={true} alt={"image-background"} />
        {/* <img className="img-cover" src={bg.src} alt="image-background" /> */}
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-end">
            <div className="col-11 mb-5">
              
              <div className="row align-items-end">
                <div className="col">
                  <p className="mb-0 fs-4">SOLUCIONES CARDIOVASCULARES</p>
                  <h1 className="karla display-1 fw-bold mb-0">CARDIOMAS</h1>
                </div>
                <div className="col">
                  <p className="fs-4 mb-3">Soluciones de alta complejidad que mejoran la vida de las personas y los procesos de negocios.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 text-white">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-11">

              <h2 className="mb-3 karla display-5">Servicios</h2>

              <div className="row mb-5 g-5">
                <div className="col-12 col-md-7">
                  <div className={s["list-container"]}>
                    {data.map((item, index) => {
                      return (
                        <div className={s["list-item"]} key={index}>
                          <div className={s["list-item-id"]}>
                            <p>{item.id}</p>
                          </div>
                          <div className={s["list-item-detail"]}>
                            <h5 className="fs-3 karla">{item.name}</h5>
                            <div style={{ color: '#CCCCCC' }}>
                              {item.tags?.map((tag, j) => {
                                return (
                                  <p className={s["list-item-tag"]} key={j}>
                                    {tag}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="col">

                  <div className={s["grid-wrapper"]}>
                    <div className={s["grid-item"]}>
                      <h4 className="karla fs-5 mb-3">Impacto</h4>
                      <p className={s["value"]}>Atención oportuna y de calidad</p>
                    </div>
                    <div className={s["grid-item"]}>
                      <h4 className="karla fs-5 mb-3">Excelencia</h4>
                      <p className={s["value"]}>Más de 15 años avalan nuestra experiencia</p>
                    </div>
                    <div className={s["grid-item"]}>
                      <h4 className="karla fs-5 mb-3">Usabilidad</h4>
                      <p className={s["value"]}>Propuestas flexibles ajustadas a nuestros clientes</p>
                    </div>
                    <div className={s["grid-item"]}>
                      <h4 className="karla fs-5 mb-3">Integral</h4>
                      <p className={s["value"]}>Abordamos hasta 100% de financiamiento</p>
                    </div>
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

export default page