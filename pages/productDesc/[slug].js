import Header from "/components/Header/Header";
import Footer from "/components/Footer/Footer";
import styles from "./slug.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import React, { useRef, useState, useEffect } from "react";
import Hero2 from "../../components/Hero2/Hero2";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from "../../components/Ui/Loader/Loader";
import getProducts from "../api/getProducts";
import Cotizacion from "../../components/Ui/Cotizacion/Cotizacion";

export const getStaticPaths = async () => {
	const data = await getProducts();
	const paths = data.map((product) => {
		return {
			params: {
				slug:
					product[0].toString().toLowerCase().trim() ||
					"ECG80".toString().toLowerCase().trim(),
			},
		};
	});

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async (context) => {
	const slug = context.params.slug;
	const data = await getProducts();
	const arrayFiltered = data.find(
		(element) => element[0].toString().toLowerCase().trim() == slug
	);
	return {
		props: { data: arrayFiltered },
		revalidate: 1,
	};
};

const Index = ({ data }) => {
	const [loaded, setLoaded] = useState(false);
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState(null);

	useEffect(() => {
		if (data) {
			setProducts({
				code: data[0],
				category: !data[1] ? "" : data[1],
				brand: data[2],
				title: data[3],
				brief: data[4],
				description: data[5],
				application: data[6],
				techcnial: data[7],
				img: !data[8]
					? "barbijo.png"
					: "https://drive.google.com/uc?export=view&id=" + data[8],
				ml: !data[9] ? "" : data[9],
			});
			setLoading(false);
		}
	}, [data]);

	return (
		<div className={styles.contAll}>
			<Header />
			{!products ? (
				<Hero2 title={"Loading..."} color="white" />
			) : (
				<Hero2 title={products.title} color="white" />
			)}
			{loading ? (
				""
			) : (
				<div className={styles.container}>
					<div className={styles.detail}>
						{loaded ? null : (
							<div className={styles.loader_container}>
								<Loader />
							</div>
						)}
						<div className={styles.img_container}>
							<img
								src={products.img}
								alt="insumos medicos"
								className={styles.image_container}
								style={loaded ? {} : { display: "none" }}
								onLoad={() => setLoaded(true)}
								// alt="insumos medicos"
							/>
						</div>
						<div className={styles.detailInfo}>
							<h4>Descripción</h4>
							<br />
							{products.description}
							<br />
							<br />
							<h4>Aplicación</h4>
							<br />
							{products.application}
							<br />
							<br />
							<h4>Ficha Técnica</h4>
							<br />
							{products.techcnial}
						</div>
						<div className={styles.contact}>
							<Cotizacion
								title={products.title}
								subtitle={products.subtitle}
								code={products.code}
								merlibre={products.ml}
							/>
						</div>
					</div>
					{/* <div className={styles.related}>
							<div className={styles.seccions}>
								<div className={styles.swiper}>
									<CarrouselMobile
										title="Productos relacionados"
										spaceBetween={100}
									/>
								</div>
							</div>
						</div> */}
				</div>
			)}

			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	);
};

export default Index;
