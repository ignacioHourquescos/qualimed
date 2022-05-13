import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import styles from "./Sections.module.scss";

const Sections = () => {

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
          margin: '0 0 0% 41%'
             
        }}
         
      >
        <ul className={styles.dots}> {dots} </ul>
      </div>
    ),
    
    }
  return (
    <>
    <div className={styles.container}>
      <h3 className={styles.h3}>Lineas de productos</h3>
      <div className={styles.containerReal}>
        <div className={styles.seccion1}><img src='./monitor.png'></img></div>
        <div className={styles.seccion2}><img src='./medicinaDep1.png'></img></div>
        <div className={styles.seccion3}><img src='./barbijo1.png'></img></div>
        <Slider {...settings} className={styles.slides} >
          <div className={styles.center}>
            <div className={styles.seccion}><img src='./monitor.png'></img></div>     
          </div>
          <div className={styles.center}>
            <div className={styles.seccion}><img src='./medicinaDep1.png'></img></div>
          </div>
          <div className={styles.center}>
            <div className={styles.seccion}><img src='./barbijo1.png'></img></div>
          </div>

        </Slider>
        </div>
      <div className={styles.wave}><div></div></div> 
      </div>
      
    </>
    )
}

export default Sections
