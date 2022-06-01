import React, { useRef, useState, useEffect } from "react";
import { Collapse } from "antd";
import styles from "./Filter.module.scss";


const Filter = () => {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
	const [state, setState] = useState(false);

    function callback(key) {
		console.log(key);
		setSideDrawerOpen(!sideDrawerOpen);
	}
	function colorice(key1) {
		console.log(key1);
		setState(!state);
	}

    const { Panel } = Collapse;

  return (
    <div className={styles.filter}>
					<div className={styles.categories}>
					<input className={styles.input} placeholder="Buscar"></input>
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
  )
}

export default Filter
