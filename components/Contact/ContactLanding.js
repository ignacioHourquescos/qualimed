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
			<div className={styles.wave_bottom}>{waveSvg_Bottom}</div>
		</>
	);
};

export default ContactLanding;

const waveSvg_Bottom = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
		<path
			fill="#3E4095"
			fill-opacity="1"
			d="M0,288L80,288C160,288,320,288,480,256C640,224,800,160,960,144C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
		></path>
	</svg>
);
