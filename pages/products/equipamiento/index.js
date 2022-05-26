import Header from "../../../components/Header/Header";
import Products from "../../../components/Products/Products";
import styles from "../equipamiento/index.module.scss";
import { Collapse } from "antd";
import Slider from "react-slick";
import { useFetch } from "../../../hooks/useFetch";
import Cards from "../../../components/Ui/Cards/Cards";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SubHeader from "../../../components/SubHeader/SubHeader";

const index = () => {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
	const [state, setState] = useState(false);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("../api/getProducts")
			.then((response) => response.json())
			.then((data) => (setProducts(data[0]), setLoading(false)));
	}, []);

	const settings = {
		className: "center",
		centerMode: true,
		infinite: false,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 500,
	};

	function callback(key) {
		console.log(key);
		setSideDrawerOpen(!sideDrawerOpen);
	}
	function colorice(key1) {
		console.log(key1);
		setState(!state);
	}

	const { Panel } = Collapse;

	const description = "lorem";

	return (
		<div
			style={{ background: "#E5E5E5", overflow: "hidden" }}
			className={styles.mainCont}
		>
			<Header />
			<SubHeader title="Equipamientos" img="equipHero1.png" />

			<div className={styles.container}>
				<div className={styles.filter}>
					<input className={styles.input} placeholder="Buscar Producto"></input>
					<div className={styles.categories}>
						<h3>Categorías</h3>
						<Collapse onChange={callback} ghost>
							<Panel
								className={styles.categoryPanel}
								showArrow={false}
								header={
									<>
										<img src="/ventilatorIcon.png" />
										<a
											style={{
												color: sideDrawerOpen ? "#3E4095" : "#595858",
												fontWeight: "700",
											}}
										>
											Equipamiento
										</a>
									</>
								}
								key="1"
							>
								<li>Equipos</li>
								<li>Alquileres</li>
								<li>Servicio técnico</li>
							</Panel>
							<li className={styles.category}>
								<img src="/maskIcon.png" />
								<div>
									<a>Insumos médicos</a>
								</div>
							</li>
							<li className={styles.category}>
								<img src="/bandageIcon.png" />
								<div>
									<a>Medicina deportiva</a>
								</div>
							</li>
						</Collapse>
						<Collapse onChange={colorice} ghost defaultActiveKey={['1']} expandIconPosition='right'>
							<Panel
								className={styles.categoryPanel}
								showArrow={true}
								header={
									<>
										<img src="/labelIcon.png" />
										<a
											className={styles.marcas}
											style={{
												color: state ? "#3E4095" : "#595858",
												fontWeight: "700",
											}}
										>
											Marcas
										</a>
									</>
								}
								key="1"
							>
								<li>Alere</li>
								<li>Braun</li>
								<li>Drager</li>
								<li>Fujifilm</li>
								<li>Nutricia</li>
								<li>Philips</li>
							</Panel>
						</Collapse>
					</div>
				</div>

				<div className={styles.products}>
					<Products
						data={products.filter(
							(element) => element.category == "EQUIPAMIENTO"
						)}
						loading={loading}
					/>
				</div>

        <div className={styles.carrousel}>
          <div className={styles.seccions}>
            <h3>Equipos</h3>
              {/* {
				<div className={styles.carrousel}>
					<div className={styles.seccions}>
						<h3>Equipos</h3>
						{/* {
                loading &&
                data.map(({id, description}) => (
                  <div>
                    <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/>
                  </div>
                    )
                  )
            
              } */}
						<div className={styles.swiper}>
							<Swiper
								slidesPerView={"auto"}
								spaceBetween={30}
								modules={[Pagination]}
							>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
					<div className={styles.seccions}>
						<h3>Alquileres</h3>
						{/* {
                loading &&
                data.map(({id, description}) => (
                  <div>
                    <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/>
                  </div>
                    )
                  )
        
              } */}
						<div className={styles.swiper}>
							<Swiper
								slidesPerView={"auto"}
								spaceBetween={30}
								modules={[Pagination]}
								className={styles.swiper}
							>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
					<div className={styles.seccions}>
						<h3>Servicio técnico</h3>
						{/* {
                loading &&
                data.map(({id, description}) => (
                  <div>
                    <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/>
                  </div>
                    )
                  )
        
              } */}
						<div className={styles.swiper}>
							<Swiper
								slidesPerView={"auto"}
								spaceBetween={30}
								modules={[Pagination]}
								className={styles.swiper}
							>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
								<SwiperSlide className={styles.swiperSlide}>
									<Cards
										img="/monitorSignosVitales.png"
										title="Monitor de signos vitales"
										description={description}
									/>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
