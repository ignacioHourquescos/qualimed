import React from "react";
import Cards from "../Ui/Cards/Cards";
import styles from "./ProdCarrousel.module.scss";
import ContentLoader from "react-content-loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const ProdCarrousel = ({ data, loading }) => {
	return (
            <Swiper
								slidesPerView={"auto"}
								spaceBetween={30}
								modules={[Pagination]}
                                className={styles.cards}
							>
			{loading
				? numberOfSkeletonCards.map((e) => (
						<div className={styles.skeleton_container}>
							<ContentLoader
								speed={2}
								width={280}
								height={450}
								viewBox="0 0 315 423"
								backgroundColor="#f3f3f3"
								foregroundColor="#ecebeb"
							>
								<rect x="-10" y="260" rx="2" ry="2" width="333" height="33" />
								<rect x="-33" y="-24" rx="0" ry="0" width="354" height="474" />
								<rect x="-3" y="355" rx="2" ry="2" width="339" height="69" />
								<rect x="-13" y="303" rx="2" ry="2" width="333" height="33" />
							</ContentLoader>
						</div>
				  ))
				: data.map((element) => (
                    <SwiperSlide className={styles.swiperSlide}>
                            <Cards
                                // key={element.code}
                                title={element.title}
                                description={element.description}
                                imageUrl={element.img}
						    />
                    </SwiperSlide>
						
				  ))}
                  </Swiper>
	);
};

export default ProdCarrousel;

//AUXILIAR
const numberOfSkeletonCards = Array.apply(null, Array(20)).map(function (x, i) {
	return i;
});