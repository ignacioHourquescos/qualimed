import React, {useState} from "react";
import styles from "./ContactLanding.module.scss";
const URL = 'https://wa.me';


const ContactLanding = () => {

	const [wapMessage, setWapMessage ] = useState({
		Name: '',
		Message: '' 
	  });

	  const handleInputChange = (event) =>{
        setWapMessage({
          ...wapMessage, 
          [event.target.name] : event.target.value 
        })
    }

	let number = "+54 9 11 2537-9689";
	number = number.replace(/[^\w\s]/gi, '').replace(/ /g, '');
    let url = `${URL}/${number}`;

    const enviarMsj = (event) =>{
        event.preventDefault();
        url += `?text=${encodeURI("Hola me llamo "+ wapMessage.Name +" " + ' me gustaria pedirles: ' + wapMessage.Message)}`;

        window.open(url);

    }

	return (
		<>
			<div className={styles.contact}>
				<div className={styles.circle}>
					<div className={styles.content}>
						<h5>Contacto</h5>
						<p>Contáctenos y responderemos su consulta en la brevedad.</p>
						<form action="#" onSubmit={enviarMsj} >
							<input
								type="text"
								placeholder=" Nombre / Empresa"
								name="Name"
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
						</form>
						
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
			fill="#3B3E8D"
			fillOpacity="1"
			d="M0,288L80,288C160,288,320,288,480,256C640,224,800,160,960,144C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
		></path>
	</svg>
);
