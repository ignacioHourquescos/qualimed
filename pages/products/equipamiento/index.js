import Header from "../../../components/Header/Header";
import Products from "../../../components/Products/Products";
import styles from "../equipamiento/index.module.scss";
import { Collapse } from "antd";
import React, { useRef, useState, useEffect } from "react";
import SubHeader from "../../../components/SubHeader/SubHeader";
import CarrouselMobile from "../../../components/CarrouselMobile/CarrouselMobile";

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
					<div className={styles.categories}>
					<input className={styles.input} placeholder="Buscar Producto"></input>
					<hr/>
						<h3>Categorías</h3>
						<Collapse onChange={callback} ghost expandIconPosition='right'>
							<Panel
								className={styles.categoryPanel}
								showArrow={true}
								header={
									<><img src='/ventilatorIcon.png'/>
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
										<a
											className={styles.marcas}
											style={{
												color: state ? "#595858" : "#3E4095" ,
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
			<CarrouselMobile title='Equipos' />
			<CarrouselMobile title='Alquileres' />
			<CarrouselMobile title='Servicio técnico' />

					
					
				</div>
			</div>
		</div>
	)
}

export default index
