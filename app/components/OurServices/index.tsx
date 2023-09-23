'use client'

import React, { useEffect, useRef, useState } from 'react'

import { basePath } from '../../../next.config';

import ReactPlayer from 'react-player'

import s from './styles.module.scss';

export const OurServices = () => {

  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [videoURL, setVideoURL] = useState<string>('videos/01.mp4');
  const playerRef = useRef<ReactPlayer | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Código para interactuar con react-player u otras bibliotecas aquí
    setIsPlayerReady(true);
  }, [videoURL]);

  // let previewUrl = "videos/01.mp4";
  let data = [
    {
      id: "/01",
      name: "Diseño",
      tags: ["Diseño Ux - Ui", "Figma", "Photoshop", "Illustrator"],
      preview: "videos/01.mp4",
      link: "https://blanco/01",
    },
    {
      id: "/02",
      name: "Front End",
      tags: ["Visual Studio Code", "React", "Angular", "JavaScript", "React Native"],
      preview: "videos/02.mp4",
      link: "https://blanco/02",
    },
    {
      id: "/03",
      name: "Back End",
      tags: ["Typescript", "MongoDB", "NestJS"],
      preview: "videos/03.mp4",
      link: "https://blanco/03",
    },
    {
      id: "/04",
      name: "Modelo de Negocio",
      preview: "videos/04.mp4",
      link: "https://blanco/04",
    },
    {
      id: "/05",
      name: "Mentorias",
      preview: "videos/05.mp4",
      link: "https://blanco/05",
    },
    {
      id: "/06",
      name: "Financiamiento",
      preview: "videos/06.mp4",
      link: "https://blanco/06",
    },
  ];

  const handleHover = (item: any) => {
    if (playerRef.current) {
      if (isPlayerReady) {
        // Cancelar el timeout anterior si existe
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
        }
        
        // Establecer un nuevo timeout para cambiar el video después de 500 ms (ajusta esto según tus necesidades)
        hoverTimeoutRef.current = setTimeout(() => {
          setVideoURL(item.preview);
        }, 150);
      }
    }
  };

  const handleMouseOut = () => {
    // Cancelar el timeout cuando se quita el mouse
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  return (
    <div className="section py-5">
      <div className="container">
        <div className="row">
          <div className="col">


              <div className="row my-5">
                <div className="col display-3">
                  <h1 className="text-white karla" style={{ fontSize: '1em' }}>NUESTRAS FORTALEZAS <br /> <span>y diferenciación</span></h1>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col offset-md-6">
                  <div className={`${s["description-content"]} nunito`}>
                    <p className="mb-3 mb-md-0">Nos fortalece el entregar soluciones de impacto en la sociedad.</p>
                    <p>Esto nos permite estar siempre conectados con al realidad y el futuro.</p>
                  </div>
                </div>
              </div>

              <div className="row g-0">
                <div className="d-none d-md-block col-md-4">

                  <div className={`${s['player']} sticky-top`} >
                    {
                      isPlayerReady 
                        ? (
                            <ReactPlayer 
                              width='100%'
                              height={300}
                              playing={true}
                              loop={true}
                              ref={playerRef}
                              url={videoURL} 
                              onReady={() => setIsPlayerReady(true)}
                            /> 
                          )
                          : (<code className='w-100 h-100 text-center'>Loading...</code>)
                        } 
                  </div>

                </div>
                <div className="col offset-md-1">

                  <div className={s["list-container"]}>
                    {data.map((item, index) => {
                      // let aniStart = index * 10;
                      // let aniEnd = aniStart + 50;
                      // if (aniStart < 0) {
                      //   aniStart = 0;
                      // }
                      // if (aniEnd < 0) {
                      //   aniEnd = 0;
                      // }
                      // let xStart = aniStart * 0.5;
                      // let opStart = 1 - aniEnd / 100;

                      return (
                        <div
                          key={index}
                          // onMouseEnter={() => {
                          //   onHover(item);
                          // }}
                          onMouseOver={() => handleHover(item)}
                          onMouseOut={handleMouseOut}
                        >
                          <div className={s["list-item"]}>
                            <div className={s["list-item-id"]}>
                              <p className="karla">{item.id}</p>
                            </div>
                            <div className={s["list-item-detail"]}>
                              <p className={`${s["list-item-name"]} karla mb-1`}>{item.name}</p>
                              <div className={s["list-item-tags"]}>
                                {item.tags?.map((tag, j) => {
                                  return (
                                    <p className={`${s["list-item-tag"]} nunito mb-0`} key={j}>
                                      {tag}
                                    </p>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>


          </div>
        </div>
      </div>
    </div>
  )
}
