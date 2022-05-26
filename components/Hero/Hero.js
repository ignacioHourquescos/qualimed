import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import useForm from "../../hooks/useForm";
import styles from "./Hero.module.scss";

const Hero = () => {
	// const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		buscar: "",
	});

	const { buscar } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(login());
	};

	return (
		<>
		<div className={styles.hero}>
			<div className={styles.seccion1}>
				<img src="./logoHero.png"></img>

				<p>
					30 años dedicados a la venta de insumos y equipamiasdasdento médico
				</p>
				<div>
					<SearchOutlined className={styles.search}/>
					<input
					type="text"
					placeholder="    Buscar producto"
					name="buscar"
					autoComplete="off"
					value={buscar}
					onChange={handleInputChange}
				></input>
				</div>
				
			</div>
			<div className={styles.seccion2}>
				<div>
					<img src="./medicoHero.png"></img>
				</div>
			</div>
		</div>
	<div style={{height: '150px', overflow: 'hidden', margin: '-100px 0 0 0'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}><path d="M-3.10,54.78 C177.48,194.91 349.20,-49.98 501.97,88.33 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#E5E5E5'}} /></svg></div>
</>
		
	);
};

export default Hero;
