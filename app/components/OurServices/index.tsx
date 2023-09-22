'use client'

import React, { useState } from 'react'

import ReactPlayer from 'react-player'

import s from './styles.module.scss';

export const OurServices = () => {

  const [videoURL, setVideoURL] = useState('videos/01.mp4')

  let previewUrl = "videos/01.mp4";
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

  const onHover = (item: any) => {
    setVideoURL(item.preview);
    console.log(item.preview);
    
    // let player = document.querySelector(".react-player > video");
    // player?.setAttribute("src", item.preview);
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

              <div className="row">
                <div className="d-none d-md-block col-md-4">

                  <div className="sticky-top" style={{ top: 80 }}>
                    {/* <ReactPlayer 
                      url={'https://www.youtube.com/watch?v=LXb3EKWsInQ'} 
                    /> */}

                    <video className="react-player" loop autoPlay={true} width={300}>
                      <source src={videoURL} type="video/mp4" />
                      Tu navegador no soporta la reproducción de videos.
                    </video>
                    {/* <ReactPlayer
                      className="react-player"
                      url={previewUrl}
                      muted
                      loop
                      playing
                      width={"fit-content"}
                      height={"fit-content"}
                      config={{
                        file: {
                          attributes: {
                            controlsList: "nodownload",
                          },
                        },
                      }}
                    /> */}
                  </div>

                </div>
                <div className="col offset-md-1">

                  <div className={s["list-container"]}>
                    {data.map((item, index) => {
                      let aniStart = index * 10;
                      let aniEnd = aniStart + 50;
                      if (aniStart < 0) {
                        aniStart = 0;
                      }
                      if (aniEnd < 0) {
                        aniEnd = 0;
                      }
                      let xStart = aniStart * 0.5;
                      let opStart = 1 - aniEnd / 100;

                      return (
                        <div
                          key={index}
                          onMouseEnter={() => {
                            onHover(item);
                          }}
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
