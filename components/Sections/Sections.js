import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import styles from "./Sections.module.scss";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const Sections = () => {
	const isDesktop = useMediaQuery({ query: "(min-width: 700px)" });

	const [desktop, setDesktop] = useState(true);

	useEffect(() => {
		if (!isDesktop) {
			setDesktop(false);
		}
	}, [isDesktop]);

	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "0px 80px ",
		slidesToShow: 3,
		speed: 500,
		slidesToScroll: 1,
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 1800,
		// autoplay: true,
		// speed: 2000,
		// autoplaySpeed: 2000,
		// cssEase: "linear"
		// height:"50%",

		// lazyLoad: true,
	};
	const settings1 = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "0px 80px ",
		slidesToShow: 1,
		speed: 700,
		slidesToScroll: 1,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		// autoplay: true,
		// speed: 2000,
		// autoplaySpeed: 2000,
		// cssEase: "linear"
		// height:"50%",

		// lazyLoad: true,
	};

	return (
		<>
			<div className={styles.container}>
				<h5>Categorias </h5>
				<div className={styles.carrousel_container}>
					{desktop ? (
						<Slider {...settings}>
							<div>
								<Link
									href="/products/equipamiento"
									passHref
									alt="insumos medicos"
								>
									<img src="./monitor.png" alt="insumos medicos" />
								</Link>
							</div>
							<div>
								<Link
									href="/products/medicinaDeportiva"
									passHref
									alt="insumos medicos"
								>
									<img src="./medicinaDep1.png" alt="insumos medicos" />
								</Link>
							</div>
							<div>
								<Link
									href="/products/insumosMedicos"
									passHref
									alt="insumos medicos"
								>
									<img src="./seccionLand.png" alt="insumos medicos" />
								</Link>
							</div>
							<div>
								<Link
									href="/products/equipamiento"
									passHref
									alt="insumos medicos"
								>
									<img src="./monitor.png" alt="insumos medicos" />
								</Link>
							</div>
							<div>
								<Link
									href="/products/medicinaDeportiva"
									passHref
									alt="insumos medicos"
								>
									<img src="./medicinaDep1.png" alt="insumos medicos" />
								</Link>
							</div>
							<div>
								<Link
									href="/products/insumosMedicos"
									passHref
									alt="insumos medicos"
								>
									<img src="./seccionLand.png" alt="insumos medicos" />
								</Link>
							</div>
						</Slider>
					) : (
						<Slider {...settings1}>
							<div>
								<Link
									href="/products/equipamiento"
									passHref
									alt="insumos medicos"
								>
									<img src="./monitor.png" alt="insumos medicos" />
								</Link>
							</div>
							<div>
								<Link
									href="/products/medicinaDeportiva"
									passHref
									alt="insumos medicos"
								>
									<img src="./medicinaDep1.png" alt="insumos medicos" />
								</Link>
							</div>
							<div>
								<Link
									href="/products/insumosMedicos"
									passHref
									alt="insumos medicos"
								>
									<img src="./seccionLand.png" alt="insumos medicos" />
								</Link>
							</div>
						</Slider>
					)}
				</div>
			</div>
			{/* <div className={styles.wave}><div></div></div>  */}
		</>
	);
};

export default Sections;

const waveSvg = (
	<svg
		className={styles.wave_shadow}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1440 320"
	>
		<path
			fill="#E5E5E5"
			fillOpacity="1"
			d="M0,160L120,144C240,128,480,96,720,117.3C960,139,1200,213,1320,250.7L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
		></path>
	</svg>
);
