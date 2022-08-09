import React from "react";
import styles from "./Hero.module.scss";
import { isBrowser, isDesktop, isMobile } from "react-device-detect";
const Hero = () => {
	return (
		<>
			<div className={styles.hero}>
				<div className={styles.seccion1}>
					<img className={styles.logo_container} src="./Logo_blanco.png" alt="Qualimed"></img>

					<p>INSUMOS Y EQUIPAMIENTO MEDICO</p>
					<div className={styles.divSearch}></div>
				</div>
				<div className={styles.seccion2}>
					<div>
						<img
							src="./medicoHero.webp"
							width="100%"
							height="100%"
							alt="insumos medicos"
						></img>
						<div className={styles.layout}></div>
					</div>
				</div>
			</div>
			<div
				className={styles.wave}
				style={{
					height: "150px",
					overflow: "hidden",
					margin: "-120px 0 0 0",
				}}
			>
				{isBrowser ? (
					<svg
						viewBox="0 0 500 150"
						preserveAspectRatio="none"
						style={{ height: "100%", width: "100%" }}
					>
						<path
							d="M-3.10,54.78 C177.48,194.91 349.20,-49.98 501.97,88.33 L500.00,150.00 L0.00,150.00 Z"
							style={{ stroke: "none", fill: "#E5E5E5" }}
						/>
					</svg>
				) : (
					<svg
						viewBox="0 0 400 150"
						preserveAspectRatio="none"
						style={{ height: "100%", width: "100%" }}
					>
						<path
							// fill="#0099ff"
							// fill-opacity="1111"
							d="M0,15.78 C0.48,5.91 230.20,80.98 501.97,8.33 L500.00,150.00 L0.00,150.00 Z"
							style={{ stroke: "none", fill: "#E5E5E5" }}
						></path>
					</svg>
				)}
			</div>
		</>
	);
};

export default Hero;
