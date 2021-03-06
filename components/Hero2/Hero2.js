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
			{/* <div
				className={styles.wave}
				style={{
					height: "150px",
					overflow: "hidden",
					margin: "-120px 0 0 0",
				}}
			> */}
			{/* <svg
					viewBox="0 0 400 150"
					preserveAspectRatio="none"
					style={{
						height: "100%",
						width: "100%",
						display: "block",
						verticalAlign: "Bottom",
					}}
				> */}
			{/* {isBrowser ? (
						<path
							d="M-3.10,54.78 C177.48,194.91 349.20,-49.98 501.97,88.33 L500.00,150.00 L0.00,150.00 Z"
							style={{
								stroke: "none",
								fill: "#E5E5E5",
								verticalAlign: "Bottom",
							}}
						/>
					) : (
						<path
							// d="M0,15.78 C0.48,5.91 230.20,80.98 501.97,8.33 L500.00,150.00 L0.00,150.00 Z"
							d="0"
							style={{
								stroke: "none",
								fill: color ? color : "#E5E5E5",
								verticalAlign: "Bottom",
							}}
						></path>
					)} */}
			{/* </svg> */}
			{/* </div> */}
		</>
	);
};

export default Hero;
