import React, { useRef, useState } from 'react';
import styles from './ProductsLanding.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay, EffectFade} from 'swiper';

import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import '../Products/ProductsLanding.module.scss';

const ProductsLanding = () => {

  const stylesNavigation = styles.navigation;
  const pagination = {
    clickable: true,
   
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  };
  return (
      <>
      <Swiper 
      
      spaceBetween={30}
      navigation={{
        clickable: true,
        el: {stylesNavigation},
      }}
      speed={2} 
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        waitForTransition:true,
      }}
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      loop={true}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      
      modules={[EffectFade, Pagination, Autoplay]}
      className="mySwiper">
        <SwiperSlide className={styles.products}>
          <div className={styles.circle}>
            <img src='./camaTerapiaLanding.png'></img>
          </div>
          <div className={styles.description}>
            <h3>Cama terapia intensiva</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            <button>Ver mas</button>
            <div class='paginationBtn'></div>
          </div>
      </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <div className={stylesNavigation}></div>
      </Swiper>

      <div className={styles.wave}>
        <div ></div>
      </div>
      

    {/* <img src='./wave2.png' style={{width:'100%', height:'200px', stroke: 'none', fill: '#000', borderTop:'3px solid #000'}}></img> */}
    {/* <div style={{height: '250px', overflow: 'hidden', }} className={styles.wave1}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%', }}><path d="M-63.54,-16.27 C-87.80,-79.44 442.10,302.46 539.16,37.99 L506.99,153.45 L0.00,150.00 Z" style={{stroke: 'none', fill: '#000', borderTop:'1px solid #fgf'}} /></svg></div>     */}
    </>    
  )
}

export default ProductsLanding
