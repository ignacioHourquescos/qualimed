import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./index.module.scss";
import {
	EnvironmentOutlined,
	MailOutlined,
	MobileOutlined,
	WhatsAppOutlined,
} from "@ant-design/icons";

const index = () => {

	
	return (
		<div className={styles.body}>
			<Header />
			<div className={styles.title}>
				<h1>Contactate con nosotros</h1>
			</div>
			<div className={styles.container}>
				<div className={styles.imgBig}></div>
				<div className={styles.contact}>
						<div className={styles.email}>
							<MailOutlined className={styles.wppImg} />
							<div>
								<h5>Email</h5>
								<p>cotizaciones@qualimed.com.ar</p>
							</div>
						</div>
						<div className={styles.tel}>
							<MobileOutlined className={styles.wppImg} />
							<div>
								<h5>Teléfono</h5>
								<p>
									4716-2652
									<br />
									4716-2699
								</p>
							</div>
						</div>
						<div className={styles.wpp}>
							<WhatsAppOutlined className={styles.wppImg} />
							<div>
								<h5>WhatsApp</h5>
								<p>+54 9 11 2537-9689</p>
							</div>
						</div>
				</div>
					<div className={styles.direction}>
						<EnvironmentOutlined className={styles.pointImg} />
						<div>
							<h5>Dirección</h5>
							<p>
								Infanta Isabel 2473, 1650 Villa Libertad
								<br />
								Buenos Aires, Argentina
								<br />
							</p>
							</div>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.599795016996!2d-58.562708684175384!3d-34.58899166422712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb82cacb853bf%3A0x955574e27436a603!2sInfanta%20Isabel%202473%2C%20B1650%20Villa%20Libertad%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1650740531071!5m2!1ses!2sar"
								className={styles.map}
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"
							></iframe>
						
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default index;
