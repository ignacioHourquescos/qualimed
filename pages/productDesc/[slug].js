import Header from "/components/Header/Header";
import Footer from "/components/Footer/Footer";
import styles from "./slug.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import React, { useRef, useState, useEffect } from "react";
import Hero2 from "../../components/Hero2/Hero2";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from "../../components/Ui/Loader/Loader";

const Index = () => {
	// const {img, title, description, application, techcnial, code} = products;
	const [loaded, setLoaded] = useState(false);
	const form = useRef();
	const router = useRouter();
	const idEvent = router.query.slug;
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [displayUserForm, setDisplayUserForm] = useState(false);
	const [sending, setSending] = useState(false);

	useEffect(() => {
		const idEvent = router.query.slug;

		// if (!router.isReady) return null;

		if (router.isReady) {
			const getProducts = () => {
				var array = [];
				let categoriesArray = [];
				let brandsArray = [];

				let sheetName = "MASTER";
				let fileCode = "1CMfYFGhXhIBEMO-Ob9CZucRujqTdkRSIkD7hM-xaYew"; //codigo de la derecha
				let APIkey = "AIzaSyAQGQq6Vbh7blIY3J7XwzVrUBDe3tQelm8";

				fetch(
					`https://sheets.googleapis.com/v4/spreadsheets/${fileCode}/values/${sheetName}?alt=json&key=${APIkey}`
				)
					.then((response) => response.json())

					.then((data) => {
						for (var i = 1; i < data.values.length; i++) {
							array.push({
								code: data.values[i][0],
								category: !data.values[i][1] ? "" : data.values[i][1],
								brand: data.values[i][2],
								title: data.values[i][3],
								subtitle: data.values[i][4],
								description: data.values[i][5],
								application: data.values[i][6],
								techcnial: data.values[i][7],
								img: !data.values[i][8]
									? "barbijo.png"
									: "https://drive.google.com/uc?export=view&id=" +
									  data.values[i][8],
								ml: !data.values[i][9] ? "" : data.values[i][9],
							});

							categoriesArray.push(data.values[i][0]);
							brandsArray.push(data.values[i][2]);
						}
						setProducts(array);
						console.log("idEvent", idEvent);
						console.log("idEvent Decoded", decodeURIComponent(idEvent));
						console.log("array", array);
						const arrayFiltered = array.find(
							// (element) => element.title == decodeURIComponent(idEvent)
							(element) => element.code == idEvent
						);
						setProducts(arrayFiltered);
						console.log("PORDUCTDESC", arrayFiltered);
						// res.send(
						// 	JSON.stringify([
						// 		array,
						// 		categoriesArray.filter((v, i, a) => a.indexOf(v) === i),
						// 		brandsArray.filter((v, i, a) => a.indexOf(v) === i),
						// 	])
						// );
					})
					.then((data) => {
						setLoading(false);
					});
			};

			getProducts();
		}
	}, [router.isReady, router.query]);

	useEffect(() => {}, []);

	const sendEmail = (e, captchaValue) => {
		e.preventDefault();
		setSending(true);
		console.log("mensaje enviado");
		emailjs
			.sendForm(
				"service_2qdstih",
				"template_fldorhe",
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
					setDisplayUserForm(false);
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

	const enviarMsj = () => {
		event.preventDefault();
		url += `?text=${encodeURI(
			"Hola, me interesaría tener mas información acerca de: " +
				products.title +
				" " +
				" ( codigo de producto:  " +
				products.code +
				")"
		)}`;

		window.open(url);
	};

	return (
		<div className={styles.contAll}>
			<Header />
			<Hero2 title={idEvent} color="white" />

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
						{/* <img
							src={imageUrl}
							className={styles.image_container}
							style={loaded ? {} : { display: "none" }}
							onLoad={() => setLoaded(true)}
							alt="insumos medicos"
						/> */}
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
							<div className={styles.cotizacion}>
								<h5>{products.title}</h5>
								<p>{products.subtitle}</p>
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
											method="POST"
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
												value={`Me gustaria tener mas informaciona cerca de  ${products.title} codigo de producto: ${products.code}`}
												required
											></textarea>
											<div className={styles.captcha_container}>
												<ReCAPTCHA sitekey="6LcswQQhAAAAAAKJ6eLBf5qhExGmYKgsKnOXC3v6" />
											</div>
											<button type="submit" value="Send">
												{!sending ? "Enviar" : "Enviando..."}
											</button>
										</form>
									</div>
								) : (
									""
								)}
								{/* <Link
										target="_blank"
										href={{
											pathname: "https://qualimed2021.mercadoshops.com.ar/",
										}}
										passHref
									/> */}
								{/* <Link href="https://www.qualimed.com.ar"></Link> */}

								<a
									className={styles.shopMobile}
									href={
										products.ml
											? products.ml
											: "https://qualimed2021.mercadoshops.com.ar/"
									}
									target={"_blank"}
									rel={"noreferrer"}
								>
									{/* <img src="/cart2.png" alt="insumos medicos" /> */}
									Ver producto en tienda minorista
								</a>
							</div>
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
