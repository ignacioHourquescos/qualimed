import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import ProductsLanding from "../components/Products/ProductsLanding";
import ContactLanding from "../components/Contact/ContactLanding";
import Branding from "../components/Branding/Branding";
import Sections from "../components/Sections/Sections";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Qualimed</title>
				<meta name="Qualimed" content="Insumos y equipamiento médico" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<meta
					name="description"
					content="30 años dedicados a la venta de insumos y equipamiento médico, brindando asistencia personalizada a instituciones públicas y privadas. Venta mayorista de Insumos Médicos, Equipamiento Hospitalario y Medicina Deportiva."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1"
				/>
				<meta
					name="keywords"
					content="insumos médicos, equipamiento hospitalario, medicina deportiva"
				/>
				<meta name="author" content="Qualimed" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Qualimed" />
				<meta
					property="og:description"
					content="Insumos y Equipamiento Médicos"
				/>
				<meta property="og:url" content="https://www.qualimed.com.ar" />
				<meta property="og:site_name" content="Qualimed" />

				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
					crossOrigin="anonymous"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					charset="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					charset="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
			</Head>
			<Header />
			<Hero />
			<Sections />
			<ProductsLanding />
			<Branding />
			<ContactLanding />
			<Footer />
		</div>
	);
}
