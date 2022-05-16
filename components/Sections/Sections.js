import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import styles from "./Sections.module.scss";


// const Sections = () => {

//   const settings = {
//     dots: true,
//     fade: true,
//     dotsClass: "slick-dots",
//     infinite: true,
//     speed: 1000,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     appendDots: dots => (
//       <div 
//         style={{
//           display: 'flex',
//           width: '20%',
//           padding: "10px",
//           margin: '0 0 0% 41%'
             
//         }}
         
//       >
//         <ul className={styles.dots}> {dots} </ul>
//       </div>
//     ),
    
//     }
//   return (
//     <>
//     <div className={styles.container}>
//       <h3 className={styles.h3}>Lineas de productos</h3>
//       <div className={styles.containerReal}>
//         {/* <div className={styles.seccion1}><img src='./monitor.png'></img></div>
//         <div className={styles.seccion2}><img src='./medicinaDep1.png'></img></div>
//         <div className={styles.seccion3}><img src='./barbijo1.png'></img></div> */}
//         <Slider {...settings} className={styles.slides} >
//           <div className={styles.center}>
//             <div className={styles.seccion}><img src='./monitor.png'></img></div>     
//           </div>
//           <div className={styles.center}>
//             <div className={styles.seccion}><img src='./medicinaDep1.png'></img></div>
//           </div>
//           <div className={styles.center}>
//             <div className={styles.seccion}><img src='./barbijo1.png'></img></div>
//           </div>

//         </Slider>
//         </div>
//       <div className={styles.wave}><div></div></div> 
//       </div>
      
//     </>
//     )
// }



const Sections = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px 80px ",
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 24,
    slidesToShow: 3,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear"
    // height:"50%",

    // lazyLoad: true,
  };

    return (
      <>
     <div className={styles.container}>
      <div className={styles.carrousel_container}>
        <Slider {...settings}>
  
        <img src='./monitor.png'></img>
        <img src='./medicinaDep1.png'></img>
        <img src='./seccionLand.png'></img>
        <img src='./monitor.png'></img>
        <img src='./medicinaDep1.png'></img>
        <img src='./seccionLand.png'></img>

        </Slider>
        </div>
      </div>
    <div className={styles.wave}><div></div></div> 
    </>
    );
  }


  export default Sections

