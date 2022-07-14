import Header from "/components/Header/Header";
import Footer from "/components/Footer/Footer";
import styles from "./slug.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import CarrouselMobile from "../../components/CarrouselMobile/CarrouselMobile";
import { useRouter } from "next/router";
import React, { useRef, useState, useEffect } from "react";
import Hero from "../../components/Hero2/Hero";
import emailjs from "@emailjs/browser";

const Slug = () => {
	// const {img, title, description, application, techcnial, code} = detail;
	const form = useRef();
	const router = useRouter();
	const idEvent = router.query.slug;
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [displayUserForm, setDisplayUserForm] = useState(false);
	const [sending, setSending] = useState(false);

	useEffect(() => {
		fetch("../api/getProducts")
			.then((response) => response.json())
			.then((data) => (setProducts(data[0]), setLoading(false)));
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();
		setSending(true);
		console.log("mensaje enviado");
		emailjs
			.sendForm(
				"service_2qdstih",
				"template_a2ty4bh",
				form.current,
				"user_GqWB6DWgQTHICnHQEnvCU"
			)
			.then(
				(result) => {
					console.log(result.text);
					setSending(false);
					setDisplayUserForm(false);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const displayUserFormHandler = () => {
		setDisplayUserForm(true);
	};

	const URL = "https://wa.me";
	let number = "+54 011 47162699";
	number = number.replace(/[^\w\s]/gi, "").replace(/ /g, "");
	let url = `${URL}/${number}`;

	const enviarMsj = (event, detail) => {
		event.preventDefault();
		url += `?text=${encodeURI(
			"Hola me gustaria consultarles por el producto: " +
				products.find((element) => element.title == idEvent).title +
				" " +
				" ( codigo de producto:  " +
				products.find((element) => element.title == idEvent)?.code +
				")"
		)}`;

		window.open(url);
	};

	if (!loading) {
		let detail = products.find((element) => element.title == idEvent);

		return (
			<div className={styles.contAll}>
				<Header />
				<Hero title={idEvent} img="../contacto.jpg" color="white" />

				{loading ? (
					""
				) : (
					<div className={styles.container}>
						<div className={styles.detail}>
							<div className={styles.img_container}>
								<img src={detail.img} alt="insumos medicos" />
							</div>
							<div className={styles.detailInfo}>
								<b>Descripcion</b>
								<br />
								{}
								<br />
								<br />
								<b>Aplicaciones</b>
								<br />
								{detail.application}
								<br />
								<br />
								<b>Ficha tecnica</b>
								<br />
								{detail.techcnial}
							</div>
							<div className={styles.contact}>
								<div className={styles.cotizacion}>
									<h5>{detail.title}</h5>
									<p>{detail.description.slice(0, 50)}...</p>
									<br />
									<button onClick={enviarMsj}>Cotización via whatsapp</button>

									<button
										className={styles.btnMail}
										style={{ background: "#8183CA" }}
										onClick={displayUserFormHandler}
									>
										Cotización via mail
									</button>

									{displayUserForm ? (
										<div className={styles.userForm}>
											<form
												className={styles.form}
												ref={form}
												onSubmit={sendEmail}
											>
												<input
													className={styles.input}
													type="text"
													placeholder=" &nbsp; Nombre / Empresa"
													name="user_name"
													autoComplete="on"
													required
												></input>
												<input
													className={styles.input}
													type="text"
													placeholder=" &nbsp;Correo"
													name="user_email"
													autoComplete="on"
													// onChange={handleInputChange}
													required
												></input>
												<textarea
													style={{ display: "none" }}
													type="text"
													placeholder=" &nbsp;Consulta"
													name="message"
													value={`Me gustaria tener mas informaciona cerca de  ${detail.title} codigo de producto: ${detail.code}`}
													required
												></textarea>
												<button type="submit" value="Send">
													{!sending ? "Enviar" : "Enviando..."}
												</button>
											</form>
										</div>
									) : (
										""
									)}
									<Link href="https://www.qualimed.com.ar"></Link>

									<div className={styles.shopMobile}>
										<img src="/cart2.png" alt="insumos medicos" />
										Ver producto en tienda minorista
									</div>
								</div>
							</div>
						</div>
						<div className={styles.related}>
							<div className={styles.seccions}>
								<div className={styles.swiper}>
									<CarrouselMobile
										title="Productos relacionados"
										spaceBetween={100}
									/>
								</div>
							</div>
						</div>
					</div>
				)}

				<div className={styles.footer}>
					<Footer />
				</div>
			</div>
		);
	}
};

export default Slug;

// export async function getStaticPaths(slug) {
// 	return {
// 		paths: [
// 			{ params: { slug: "productos" } }, // See the "paths" section below
// 			{ params: { slug: "equipamiento" } }, // See the "paths" section below
// 			{ params: { slug: "insumosMedicos" } }, // See the "paths" section below
// 			,
// 		],
// 		fallback: false, // See the "fallback" section below
// 	};
// }

// export async function getStaticProps(context) {
// 	const server = "http://www.qualimed.com.ar";
// 	const res = await fetch(`${server}/api/getProducts`);
// 	const posts = await res.json();
// 	return {
// 		props: {
// 			posts,
// 		}, // will be passed to the page component as props
// 	};
// }
