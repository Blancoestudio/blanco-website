"use client";

// import ImageCarousel from "../components/WebImageCarousel";
// import AppImageCarousel from "../components/AppImageCarousel";

import bg from "assets/images/abastible.png";
import Image from "next/image";

import s from "./styles.module.scss";

export default function Page() {
  const webImages = Array(5)
    .fill(0)
    .map((item, index) => {
      return `/images/Abastible/Web/Abastible_web_${index + 1}.png`;
    });
  const appImages = Array(6)
    .fill(0)
    .map((item, index) => {
      return `/images/Abastible/App/Abastible_App_${index + 1}.png`;
    });
  return (
    <main className="bg-black">
      <div className="cover-wrapper">
        <Image src={bg.src} fill={true} className="img-cover" alt={"image-background"} />
        {/* <img className="img-cover" src={bg.src} alt="image-background" /> */}
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-end">
            <div className="col-11 mb-5">
              
              <div className="row">
                <div className="col-12 col-md-6">
                  <h1 className="display-1 fw-bold karla">ABASTIBLE</h1>
                </div>
                <div className="col-12 col-md-6">
                  <p className="fs-4">Proyectos de desarrollo de software, aplicaciones e Iot con foco en clientes y distribuidores.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11">

              <div className={s["container"]}>
                <div className={s["webContent"]}>
                  <div className={s["left"]}>
                    {/* <ImageCarousel images={webImages} /> */}
                  </div>
                  <div className={s["right"]}>
                    <div className={s["item"]}>
                      <div className={s["title"]}>Familia Naranja</div>
                      Desarrollo de plataforma interna, para distribuidores para solicitud de pedidos, descuentos,
                      seguimiento de flota y merchandising.
                    </div>
                    <div className={s["item"]}>Conexión en sistemas internos de Abastible de alta recurrencia,</div>
                  </div>
                </div>
                <div className={s["appContent"]}>
                  <div className={s["left"]}>
                    <div className={s["title"]}>Aplicaciones para clientes y repartidores</div>
                    <div className={s["detail"]}>
                      Desarrollo de aplicación móvil para solicitar gas a domicilio sea envasado o granel, incluyendo
                      geoposicionamiento, aviso de proximidad y pago.
                    </div>
                  </div>
                  <div className={s["right"]}>
                    {/* <AppImageCarousel images={appImages} />  */}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
