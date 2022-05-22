import React from "react";
import styles from "./ContactLanding.module.scss";
const ContactLanding = () => {
	return (
		<>
			<div className={styles.contact}>
				<div className={styles.circle}>
					<div className={styles.content}>
						<h5>Contacto</h5>
						<p>Contáctenos y responderemos su consulta en la brevedad.</p>
						<input
							type="text"
							placeholder=" Nombre / Empresa"
							name="name"
							autoComplete="on"
						></input>
						<div style={{ width: "100%" }}>
							{/* <input
							type="number"
							placeholder=" Teléfono"
							name="celphone"
							autoComplete="on"
						></input> */}
							{/* <input type='text'
                placeholder=" Correo"
                name="email"
                autoComplete="on"></input> */}
						</div>
						<textarea
							type="text"
							placeholder=" Consulta"
							name="message"
						></textarea>
						<button>Enviar</button>
					</div>
				</div>
			</div>
			{/* <div className={styles.wave_bottom}>{waveSvg_Bottom}</div> */}
		</>
	);
};

export default ContactLanding;

const waveSvg_Bottom = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
		<path
			fill="#E5E5E5"
			fill-opacity="1"
			d="M0,160L120,144C240,128,480,96,720,117.3C960,139,1200,213,1320,250.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
		></path>
	</svg>
);
