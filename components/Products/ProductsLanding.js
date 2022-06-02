import styles from "./ProductsLanding.module.scss";
import "./ProductsLanding.module.scss";
import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const ProductsLanding = () => {
	const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });
	const isMobile = useMediaQuery({ query: "(max-width: 999px)" });
	const isMobileXs = useMediaQuery({ query: "(max-width : 340px)" });

	const settings1 = {
		dots: true,
		fade: true,
		dotsClass: "slick-dots",
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 4000,
		appendDots: (dots) => (
			<div
				style={{
					display: "flex",
					width: "20%",
					padding: "10px",
					margin: "0 0 0% 75%",
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
		appendDots: (dots) => (
			<div
				style={{
					display: "flex",
					width: "20%",
					padding: "10px",
					margin: "0 0 22% 43%",
					zIndex: "1500",
				}}
			>
				<ul className={styles.dots}> {dots} </ul>
			</div>
		),
	};

	return (
		<div className={styles.master}>
			<div className={styles.wave_top}>{waveSvg_Top}</div>

			<div className={styles.slider}>
				{isDesktop ? (
					<Slider {...settings1} className={styles.slides}>
						<div>
							<div className={styles.slide1}>
								<div className={styles.circle}>
									<img src="./camaTerapia2.png"></img>
								</div>
								<div className={styles.description}>
									<h3>Cama terapia intensiva</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore{" "}
									</p>
									<Link href="./products/equipamiento"><button>Ver mas</button></Link>
								</div>
							</div>
						</div>
						<div>
							<div className={styles.slide1}>
								<div className={styles.circle}>
									<img src="./mesaDeAnestecia.png"></img>
								</div>
								<div className={styles.description}>
									<h3>Mesa de anestesia</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore{" "}
									</p>
									<Link href="./products/equipamiento"><button>Ver mas</button></Link>
								</div>
							</div>
						</div>
					</Slider>
				) : (
					<Slider {...settings2} className={styles.slides}>
						<div>
							<div className={styles.slide1}>
								<div className={styles.circle}>
									<img src="./camaTerapia2.png"></img>
								</div>
								<div className={styles.description}>
									<h3>Cama terapia intensiva</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore{" "}
									</p>
									<Link href="./products/equipamiento"><button>Ver mas</button></Link>
								</div>
							</div>
						</div>
						<div>
							<div className={styles.slide1}>
								<div className={styles.circle}>
									<img src="./mesaDeAnestecia.png"></img>
								</div>
								<div className={styles.description}>
									<h3>Mesa de anestesia</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore{" "}
									</p>
									<Link href="./products/equipamiento"><button>Ver mas</button></Link>
								</div>
							</div>
						</div>
					</Slider>
				)}
			</div>
			{/* 
			<div className={styles.wave_bottom}>{waveSvg_Bottom}</div> */}
		</div>
	)
}

export default ProductsLanding;

const waveSvg_Bottom = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
		<path
			fill="#E5E5E5"
			fill-opacity="1"
			d="M0,160L120,144C240,128,480,96,720,117.3C960,139,1200,213,1320,250.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
		></path>
	</svg>
);

const waveSvg_Top = (
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
