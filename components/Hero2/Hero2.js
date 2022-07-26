import React from "react";
import styles from "./Hero2.module.scss";
import { isBrowser, isMobile } from "react-device-detect";
const Hero = ({ title, img, color }) => {
	return (
		<>
			<div className={styles.hero}>
				<div className={styles.seccion2}>
					<h3>{title}</h3>
					<div>
						{/* <img src={`${img}`} alt="insumos medicos"></img> */}
						<div className={styles.layout}></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
