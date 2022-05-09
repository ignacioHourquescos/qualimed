import styles from "./Branding.module.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Autoplay } from "swiper";



const Branding = () => {

    const images= ['/brand1.png', '/brand2.png','/brand3.png','/brand4.png','/brand5.png','/brand6.png','/brand7.png','/brand8.png','/brand9.png','/brand10.png','/brand11.png','/brand12.png','/brand13.png','/brand14.png','/brand15.png'];

  return (
    <div className={styles.container}>
           <Swiper
        slidesPerView={8}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[ Autoplay]}
        className={styles.swiper}
      >
          {
              images.map (img => 
                <SwiperSlide className={styles.swiperSlide}><img src={img}></img></SwiperSlide>

              )
          }

      </Swiper>
    </div>
    
  )
}

export default Branding
