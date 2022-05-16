import styles from './ProductsLanding.module.scss';
import './ProductsLanding.module.scss';
import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
// import ".//stylesProd.module.css";
import { useMediaQuery } from 'react-responsive'



const ProductsLanding = () => {

  const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 999px)' });
  const isMobileXs = useMediaQuery({ query: "(max-width : 340px)" });
  
  const settings1 = {
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
            margin: '0 0 0% 75%'
               
          }}
           
        >
          <ul className={styles.dots}> {dots} </ul>
        </div>
      ),
      };

  const settings2 = {
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
            margin: '0 0 -12% 44%',
            zIndex: '1500',
               
          }}
           
        >
          <ul className={styles.dots}> {dots} </ul>
        </div>
      ),
      };
    
  
   
  return (
    <>
      <div className={styles.slider}>
          { isDesktop ? (<Slider {...settings1} className={styles.slides} >
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

            </Slider>)

            : 
            (<Slider {...settings2} className={styles.slides} >
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

            </Slider>)

              }
      
          
    </div>
      <div className={styles.wave}>
      <div ></div>
    </div>
    </>
  )
}

export default ProductsLanding