import Image from "next/image";
import bg from "../../../assets/images/beewise.png";

import AppImageCarousel from "@/app/components/AppImageCarousel";
import { ImageSlider } from '../../components/ImageSlider/index';

import s from "./styles.module.scss";

export default function Page() {
  const webImages = Array(3)
    .fill(0)
    .map((item, index) => {
      return `/images/beewise/Web/Beewise_web_${index + 1}.png`;
    });
  const appImages = Array(7)
    .fill(0)
    .map((item, index) => {
      return `images/beewise/App/Beewise_App_${index + 1}.png`;
    });
  return (
    <main className="bg-black">
      <div className="cover-wrapper">
        <Image src={bg.src} fill={true} className="img-cover" alt={"image-background"} />
        <div className="container h-100 position-relative z-1">
          <div className="row h-100 justify-content-center align-items-end">
            <div className="col-11 mb-5">
              
              <div className="row align-items-end">
                <div className="col-12 col-md-6">
                  <p className="mb-0 fs-4">GAMIFICACIÓN Y APRENDIZAJE</p>
                  <h1 className="karla display-1 fw-bold mb-0">BEEWISE</h1>
                </div>
                <div className="col-12 col-md-6">
                  <p className="fs-4 mb-3">Orientada a potenciar las habilidades y fortalecer el aprendizaje de tu compañia de forma interactiva</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="py-5 text-white">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-11">

              <div className={`${s['inner-service-wrapper']} mb-5`}>
                <div>
                  <p className="fs-5 text-center text-md-start">Es una herramienta de gamificación es decir, facilita el proceso de aprendizaje y consolidación de manera divertida, generando una experiencia positiva en el usuario.</p>
                </div>
                <div>
                  <ImageSlider images={webImages} imgWrapperClass={`${s['img-wrapper']}`} />
                </div>
                <div>
                  <p className="fs-5 text-center text-md-start">Beewise permitirá disponer de data para analizar y mejorar el proceso que está apoyando</p>
                </div>
              </div>

              <div className="row align-items-center justify-content-center pt-5">
                <div className="col-12 col-md-6 mb-5 mb-md-0">
                  <AppImageCarousel images={appImages} />
                </div>
                <div className="col-12 col-md-4">
                  <p className="fs-5 mt-5 text-center text-md-start">Es un juego de desafíos con preguntas de selección múltiple. La dinámica consiste en que cada jugador debe desafiar a un oponente del equipo rival y el mejor de 5 preguntas aleatorias gana el desafío.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
