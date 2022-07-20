import styles from "./ProductsLanding.module.scss";
import "./ProductsLanding.module.scss";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const ProductsLanding = () => {
	const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });
	const isTablet = useMediaQuery({ query: "(min-width: 700px)" });

	const [settings, setSettings] = useState();

	useEffect(() => {
		if (isDesktop) {
			return setSettings(
				(settings = {
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
								margin: "0 0 0% 50%",
							}}
						>
							<ul className={styles.dots}> {dots} </ul>
						</div>
					),
				})
			);
		}
		if (isTablet) {
			return setSettings(
				(settings = {
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
								margin: "0 0 0% 0%",
								zIndex: "1500",
							}}
						>
							<ul className={styles.dots}> {dots} </ul>
						</div>
					),
				})
			);
		} else {
			return setSettings(
				(settings = {
					dots: true,
					fade: true,
					dotsClass: "slick-dots",
					infinite: true,
					speed: 1000,
					autoplay: true,
					autoplaySpeed: 4000,
					appendDots: (dots) => (
						<div
							className={styles.main_container}
							style={{
								display: "flex",
								width: "20%",
								padding: "10px",
								margin: "0 0 14% 30%",
								zIndex: "1500",
							}}
						>
							<ul className={styles.dots}> {dots} </ul>
						</div>
					),
				})
			);
		}
	}, []);

	return (
		<div className={styles.master}>
			<div className={styles.wave_top}>{waveSvg_Top}</div>

			<div className={styles.slider}>
				<Slider {...settings} className={styles.slides}>
					<div>
						<div className={styles.slide1}>
							<div className={styles.circle}>
								<img src="./MAMO_PHILLIPS.png" alt="insumos medicos"></img>
							</div>
							<div className={styles.description}>
								<h3>Ecógrafo Philips ClearVue G</h3>
								<p>
									Ecógrafo philips ClearVue con excelente calidad de imagen y
									diagnóstico confiable para aquellos que buscan su primer
									ecógrafo.
								</p>
								<Link href="./products/equipamiento" alt="insumos medicos">
									<button>Ver mas</button>
								</Link>
							</div>
						</div>
					</div>

					<div>
						<div className={styles.slide1}>
							<div className={styles.circle}>
								<img src="./MAMO_AMULET.png" alt="insumos medicos"></img>
							</div>
							<div className={styles.description}>
								<h3>Mamógrafo Amulet Felicia</h3>
								<p>
									Solución integral en mamografía. Tecnología de procesamiento
									de imágenes en alta calidad, lectura fácil y diagnósticos más
									precisos.
								</p>
								<Link href="./products/equipamiento" alt="insumos medicos">
									<button>Ver mas</button>
								</Link>
							</div>
						</div>
					</div>

					<div>
						<div className={styles.slide1}>
							<div className={styles.circle}>
								<img src="./XRAY_FUJI.png" alt="insumos medicos"></img>
							</div>
							<div className={styles.description}>
								<h3>Equipos de Rayos X Fuji Film</h3>
								<p>
									Tecnología Innovadora para el diagóstico por imágenes. FDR
									Smart X <br />
									Radiología digital avanzada
								</p>
								<Link href="./products/equipamiento" alt="insumos medicos">
									<button>Ver mas</button>
								</Link>
							</div>
						</div>
					</div>

					<div>
						<div className={styles.slide1}>
							<div className={styles.circle}>
								<img src="./fujifilm.png" alt="insumos medicos"></img>
							</div>
							<div className={styles.description}>
								<h3>Películas Radiográficas</h3>
								<p>
									Películas Laser DI-HL y Mamografícas DI-ML. Aplicable para
									DRYPIX (Smart, Plus, 7000)
									<br /> Películas Súper HR-U, Convencionales.
								</p>
								<Link href="./products/equipamiento" alt="insumos medicos">
									<button>Ver mas</button>
								</Link>
							</div>
						</div>
					</div>

					<div>
						<div className={styles.slide1}>
							<div className={styles.circle}>
								<img src="./DETERGENTE.png" alt="insumos medicos"></img>
							</div>
							<div className={styles.description}>
								<h3>Limpieza y desinfección</h3>
								<p>
									Enzimaticos, Trienzimaticos, Pentaenzimaticos , Surgibac PA
									PLUS , Surgibac glutaraldehido 2.5%.
								</p>
								<Link href="./products/equipamiento" alt="insumos medicos">
									<button>Ver mas</button>
								</Link>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default ProductsLanding;

const waveSvg_Top = (
	<svg
		className={styles.wave_shadow}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1440 320"
	>
		<path
			fill="#E5E5E5"
			fillOpacity="1"
			d="M0,160L120,144C240,128,480,96,720,117.3C960,139,1200,213,1320,250.7L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
		></path>
	</svg>
);
