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
		autoplay: true,
		autoplaySpeed: 1800,
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
				<h5>Categorias</h5>
				<div className={styles.carrousel_container}>
					<Slider {...settings}>
						<img src="./monitor.png"></img>
						<img src="./medicinaDep1.png"></img>
						<img src="./seccionLand.png"></img>
						<img src="./monitor.png"></img>
						<img src="./medicinaDep1.png"></img>
						<img src="./seccionLand.png"></img>
					</Slider>
				</div>
			</div>
			{/* <div className={styles.wave}>
				<div className={styles.wave}>{waveSvg}</div>
			</div> */}
		</>
	);
};

export default Sections;

const waveSvg = (
	<svg
		className={styles.wave_shadow}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1440 320"
	>
		<path
			fill="#E5E5E5"
			fill-opacity="1"
			d="M0,160L120,144C240,128,480,96,720,117.3C960,139,1200,213,1320,250.7L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
		></path>
	</svg>
);
