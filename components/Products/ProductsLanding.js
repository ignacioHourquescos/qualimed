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
								<h3>Ec??grafo Philips ClearVue G</h3>
								<p>
									Ec??grafo philips ClearVue con excelente calidad de imagen y
									diagn??stico confiable para aquellos que buscan su primer
									ec??grafo.
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
								<h3>Mam??grafo Amulet Felicia</h3>
								<p>
									Soluci??n integral en mamograf??a. Tecnolog??a de procesamiento
									de im??genes en alta calidad, lectura f??cil y diagn??sticos m??s
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
									Tecnolog??a Innovadora para el diag??stico por im??genes. FDR
									Smart X <br />
									Radiolog??a digital avanzada
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
								<h3>Pel??culas Radiogr??ficas</h3>
								<p>
									Pel??culas Laser DI-HL y Mamograf??cas DI-ML. Aplicable para
									DRYPIX (Smart, Plus, 7000)
									<br /> Pel??culas S??per HR-U, Convencionales.
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
								<h3>Limpieza y desinfecci??n</h3>
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
