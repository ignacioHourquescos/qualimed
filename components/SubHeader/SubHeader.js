import styles from "./SubHeader.module.scss";
import React, { useRef, useState, useEffect } from "react";
import { isBrowser, isMobile } from "react-device-detect";

const index = ({ title, img }) => {
	return (
		<>
			{isBrowser ? (
				<div
					className={styles.hero}
					style={{ backgroundImage: `url("/${img}")` }}
				>
					<div className={styles.rectangle}>
						<h3>{title}</h3>
					</div>
				</div>
			) : (
				<div
					className={styles.hero}
					style={{
						backgroundImage: `linear-gradient(90deg, rgba(146, 143, 202, 0.7) 44.27%, rgba(146, 143, 202, 0) 100%), url("/${img}")`,
					}}
				>
					<div className={styles.rectangle}>
						<h3>{title}</h3>
					</div>
				</div>
			)}
		</>
	);
};

export default index;
