import styles from "./Branding.module.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const Branding = () => {
  const images = [
    "/brand1.png",
    "/brand2.png",
    "/brand3.png",
    "/brand4.png",
    "/brand5.png",
    "/brand6.png",
    "/brand7.png",
    "/brand8.png",
    "/brand9.png",
    "/brand10.png",
    "/brand11.png",
    "/brand12.png",
    "/brand13.png",
    "/brand14.png",
    "/brand15.png",
    "/brand16.png",
    "/brand17.png",
    ,
    "/brand18.jpg",
  ];

  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={"auto"}
        slidesPerGroup={1}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={`SS_${idx}`} className={styles.swiperSlide}>
            <img alt="insumos medicos" src={img}></img>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.contentMobile}>
        <h3>Nuestras Marcas</h3>
        <div className={styles.gallery}>
          {images.map((img, idx) => (
            <div className={styles.circleImg} key={`SS_${idx}`}>
              <img src={img} alt={"insumos medicos"} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branding;
