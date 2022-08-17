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
<<<<<<< HEAD

const Index = () => {
	// const {img, title, description, application, techcnial, code} = products;
	const [loaded, setLoaded] = useState(false);
	const form = useRef();
	const router = useRouter();
	const { slug } = router.query;
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [displayUserForm, setDisplayUserForm] = useState(false);
	const [sending, setSending] = useState(false);

	useEffect(() => {
		console.log("CODE PARAMS", slug);
		const fetchData = async () => {
			const response = await fetch("/api/getProducts", {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			});
			const data = await response.json();
			console.log("DATA", data[0]);

			const arrayFiltered = data[0].find((element) => element.code == slug);
			console.log("DATA", arrayFiltered);
			setProducts(arrayFiltered);
		};
		fetchData();
		setLoading(false);
	}, []);

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
			<Hero2 title={products.title} color="white" />

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
=======
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
    fallback: false,
  };
};
>>>>>>> 5fe8196aa9ec59822bab802ef164a60299e46c20

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const data = await getProducts();
  const arrayFiltered = data.find(
    (element) => element[0].toString().toLowerCase().trim() == slug
  );
  return {
    props: { data: arrayFiltered },
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
