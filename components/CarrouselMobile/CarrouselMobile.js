import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Cards from "../Ui/Cards/Cards";
import styles from "./CarrouselMobile.module.scss";
import ProdCarrousel from "./ProdCarrousel";

const CarrouselMobile = ({title, spaceBetween}) => {

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("../api/getProducts")
			.then((response) => response.json())
			.then((data) => (setProducts(data[0]), setLoading(false)));
	}, []);
	
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
  )
}

export default CarrouselMobile
