import React from "react";
import Cards from "../Ui/Cards/Cards";
import styles from "./ProdCarrousel.module.scss";
import ContentLoader from "react-content-loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const ProdCarrousel = ({ data, loading, spaceBetween }) => {
  //AUXILIAR
const numberOfSkeletonCards = Array.apply(null, Array(20)).map(function (x, i) {
	return i;
});

	return (
		<>
            <Swiper
								slidesPerView={"auto"}
								spaceBetween={spaceBetween}
								modules={[Pagination]}
                                className={styles.cards}
							>
			{loading
				? numberOfSkeletonCards.map((e, idx) => (
						<div className={styles.skeleton_container} 	key={`prodCar_${idx}`}>
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
				: data.map((element, idx) => (
                    <SwiperSlide className={styles.swiperSlide} key={`SS_${idx}`}>
                            <Cards
								key={`SS_${idx}`}                                
								title={element.title}
                                description={element.description}
                                imageUrl={element.img}
						    />
                    </SwiperSlide>
						
				  ))}
                  </Swiper>
				
		</>
	)

	
}

export default ProdCarrousel;

