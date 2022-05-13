// import React, { useRef, useState } from 'react';
import styles from './ProductsLanding.module.scss';
// import { Swiper, SwiperSlide } from "swiper/react";
// import {Pagination, Autoplay, EffectFade} from 'swiper';

// import 'swiper/css';
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
import './ProductsLanding.module.scss';
import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
// import ".//stylesProd.module.css";

const ProductsLanding = () => {

  // const stylesNavigation = styles.navigation;
  // const pagination = {
  //   clickable: true,
   
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };
  
  const settings = {
      dots: true,
      fade: true,
      dotsClass: "slick-dots",
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 4000,
      appendDots: dots => (
        <div 
          style={{
            display: 'flex',
            width: '20%',
            padding: "10px",
            margin: '0 0 10% 85%'    
          }}
           
        >
          <ul className={styles.dots}> {dots} </ul>
        </div>
      ),
      }
   
  return (
    <>
      <div className={styles.slider}>
      <Slider {...settings} className={styles.slides} >
        <div>
          <div className={styles.slide1}>
            <div className={styles.circle}>
                  <img src='./camaTerapiaLanding.png'></img>
                </div>
                <div className={styles.description}>
                  <h3>Cama terapia intensiva</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                  <button>Ver mas</button>
              </div>
          </div>
            
        </div>
        <div >
        <div className={styles.slide1}>
            <div className={styles.circle}>
                  <img src='./mesaDeAnestecia.png'></img>
                </div>
                <div className={styles.description}>
                  <h3>Mesa de anestecia</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                  <button>Ver mas</button>
              </div>
          </div>
        </div>

      </Slider>
      
      

    {/* <img src='./wave2.png' style={{width:'100%', height:'200px', stroke: 'none', fill: '#000', borderTop:'3px solid #000'}}></img> */}
    {/* <div style={{height: '250px', overflow: 'hidden', }} className={styles.wave1}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%', }}><path d="M-63.54,-16.27 C-87.80,-79.44 442.10,302.46 539.16,37.99 L506.99,153.45 L0.00,150.00 Z" style={{stroke: 'none', fill: '#000', borderTop:'1px solid #fgf'}} /></svg></div>     */}
    </div>
      <div className={styles.wave}>
      <div ></div>
    </div>
    </>
  )
}

export default ProductsLanding




{/* <Swiper 
      
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
      </Swiper> */}