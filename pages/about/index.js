import React from "react";
import Header from "../../components/Header/Header";
import styles from "./index.module.scss";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero2/Hero";
import { Button, Col, Row, Statistic } from "antd";

const index = () => {
	return (
		<div className={styles.body}>
			<Header />
			<Hero title="Acerca de nosotros" />
			<div className={styles.container}>
				<div className={styles.main}>
					<div className={styles.punchLine}>{data.data1}</div>
					<div className={styles.statistics}>
						<span>+30 años</span>
						<span>+15 marcas</span>
						<span>+3 sucursales</span>
					</div>
				</div>

				<div className={styles.action}>
					<div className={styles.imageContainer}>
						<div className={styles.image} />
					</div>
					<div className={styles.text}>{data.data2}</div>
				</div>
				<div className={styles.punchLine}>{data.punchLine}</div>

				<div className={styles.action}>
					<div className={styles.imageContainer}>
						<div className={styles.image2} />
					</div>
					<div className={styles.text}>
						{data.data3}
						<br />
						<br />
						{data.data4}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default index;

const data = {
	punchLine:
		"Ofrecemos atención personalizada, soporte post venta y distribución de los productos tanto para instituciones, revendedores o pequeños emprendimientos.",
	data1:
		" Somos una empresa familiar con más de 30 años dedicados a la venta de insumos y equipamiento médico, brindando asistencia personalizada a instituciones públicas y privadas.",
	data2:
		"Nos especializamos en la venta mayorista de Insumos Médicos,  Equipamiento Hospitalario y Medicina Deportiva. Buscamos brindar  soluciones para nuestros clientes y cubrir todas sus necesidades en el  rubro, ofreciendo productos de alta calidad, primeras marcas  nacionales e internacionales y equipamiento tecnológico de primer  nivel. También contamos con nuestra área de servicio técnico para  equipamiento; realizando instalaciones, mantenimiento y reparaciones.",
	data3:
		"Qualimed S.A se encuentra constantemente incorporando productos y nuevas tecnologías para mejorar la calidad del sector de la salud; como también desarrollando nuevas plataformas de venta y atención para brindar el mejor servicio a nuestros clientes.",
	data4:
		"Nuestra sede central se encuentra ubicada en el Partido de San Martin, Buenos Aires, Argentina. Contamos con sucursales mayoristas en la Costa Atlántica, el Partido de Chascomús y realizamos ventas a todo el país a través de las empresas de logística más importante.",
};
