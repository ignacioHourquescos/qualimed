import styles from './ProductsLanding.module.scss';
import './ProductsLanding.module.scss';
import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
// import ".//stylesProd.module.css";

const ProductsLanding = () => {
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
                      <h3>Mesa de anestesia</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                      <button>Ver mas</button>
                  </div>
              </div>
            </div>

          </Slider>
    </div>
      <div className={styles.wave}>
      <div ></div>
    </div>
    </>
  )
}

export default ProductsLanding