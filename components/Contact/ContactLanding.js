import React, { useRef, useState } from "react";
import styles from "./ContactLanding.module.scss";
const URL = "https://wa.me";
import emailjs from "@emailjs/browser";

const ContactLanding = () => {
	const form = useRef();
	const [sending, setSending] = useState(false);
	const [wapMessage, setWapMessage] = useState({
		Name: "",
		Message: "",
		Mail: "",
		Telefono: "",
	});

	const handleInputChange = (event) => {
		setWapMessage({
			...wapMessage,
			[event.target.name]: event.target.value,
		});
	};

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
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<>
			<div className={styles.contact}>
				<div className={styles.circle}>
					<div className={styles.content}>
						<h5>CONTACTO</h5>
						<p>
							Puede contactarse con Qualimed a través del siguiente formulario
							y nos pondremos en contacto con usted a la brevedad.
						</p>
						{/* <form action="#" onSubmit={enviarMsj}>
							<input
								type="text"
								placeholder=" &nbsp; Nombre / Empresa"
								name="Name"
								autoComplete="on"
								onChange={handleInputChange}
								required
							></input>
							<input
								type="text"
								placeholder=" &nbsp;Correo"
								name="Correo"
								autoComplete="on"
								onChange={handleInputChange}
								required
							></input>
							<input
								type="text"
								placeholder=" &nbsp;Telefono"
								name="Telefono"
								autoComplete="on"
								onChange={handleInputChange}
								required
							></input>
							<textarea
								type="text"
								placeholder=" &nbsp;Consulta"
								name="Message"
								onChange={handleInputChange}
								required
							></textarea>
							<button type="submit">Enviar</button>
						</form> */}

						<form ref={form} onSubmit={sendEmail}>
							<input
								type="text"
								placeholder=" &nbsp; Nombre / Empresa"
								name="user_name"
								autoComplete="on"
								onChange={handleInputChange}
								required
							></input>
							<input
								type="text"
								placeholder=" &nbsp;Correo"
								name="user_email"
								autoComplete="on"
								onChange={handleInputChange}
								required
							></input>
							<input
								type="text"
								placeholder=" &nbsp;Telefono"
								name="telefono"
								autoComplete="on"
								onChange={handleInputChange}
								required
							></input>
							<textarea
								type="text"
								placeholder=" &nbsp;Consulta"
								name="message"
								onChange={handleInputChange}
								required
							></textarea>
							{/* <input type="submit" value="Send" /> */}
							<button type="submit" value="Send">
								{!sending ? "Enviar" : "Enviando..."}
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactLanding;
