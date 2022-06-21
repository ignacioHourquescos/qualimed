import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
	return (
		<>
			<div className={styles.wave_bottom}>{waveSvg_Bottom}</div>
			<div className={styles.footer}>
				<div className={styles.lists}>
					<div className={styles.logo}>
						<img
							src="/QualimedPNG1.svg"
							style={{ margin: "0 0 0 -5%" }}
							alt="insumos medicos"
						/>
					</div>
					<div className={styles.seccions}>
						<li>
							<Link href="/" passHref>
								<a>Inicio</a>
							</Link>
						</li>
						<li>
							<Link href="/about" passHref>
								<a>Quienes somos</a>
							</Link>
						</li>
						<li>
							<Link href="/products/marcas" passHref>
								<a>Productos</a>
							</Link>
						</li>
						<li>
							<Link href="/contact" passHref>
								<a>Tienda minorista</a>
							</Link>
						</li>
						<li>
							<Link href="/contact" passHref>
								<a>Contacto</a>
							</Link>
						</li>
						<Link
							target="_blank"
							href={{ pathname: "https://www.instagram.com/qualimed.insumos/" }}
							passHref
						>
							<img
								src={"/instagram.png"}
								style={{ cursor: "pointer" }}
								alt="insumos medicos"
							/>
						</Link>
					</div>
					<div style={{ gridRow: 2 }}>
						<h5>Teléfono</h5>
						<li>4716-2699</li>
						<li>4716-2652</li>
					</div>
					<div style={{ gridRow: 2 }}>
						<h5>E-mail</h5>
						<li>cotizaciones@qualimed.com.ar</li>
					</div>
					<div style={{ gridRow: 2 }}>
						<h5>Dirección</h5>
						<li>
							<h6>Sede Central:</h6>Partido Gral. San Martin, Buenos Aires,
							Argentina.{" "}
						</li>
						<li>
							<h6>Sucursales:</h6>Costa Atlántica, Buenos Aires, Argentina.
							<br /> Chascomús, Buenos Aires, Argentina.{" "}
						</li>
					</div>
					<Link
						target="_blank"
						href={{ pathname: "https://www.instagram.com/qualimed.insumos/" }}
						passHref
					>
						<img
							src={"/instagram.png"}
							style={{ width: "26px", height: "26px", cursor: "pointer" }}
							className={styles.insta}
						/>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Footer;
const waveSvg_Bottom = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
		<path
			fill="#3B3E8D"
			fillOpacity="1"
			d="M0,288L80,288C160,288,320,288,480,256C640,224,800,160,960,144C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
		></path>
	</svg>
);
