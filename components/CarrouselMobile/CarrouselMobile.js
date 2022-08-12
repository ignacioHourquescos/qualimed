import React, { useState } from "react";
import "swiper/css";
import styles from "./CarrouselMobile.module.scss";
import ProdCarrousel from "./ProdCarrousel";

const CarrouselMobile = ({ title, spaceBetween }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	return (
		<div className={styles.seccions}>
			<h3>{title}</h3>
			<div className={styles.swiper}>
				{
					<ProdCarrousel
						data={products.filter(
							(element) => element.category == "EQUIPAMIENTO"
						)}
						loading={loading}
						spaceBetween={spaceBetween}
					/>
				}
			</div>
		</div>
	);
};

export default CarrouselMobile;
