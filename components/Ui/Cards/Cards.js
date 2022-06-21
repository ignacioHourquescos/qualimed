import React from "react";
import styles from "./Cards.module.scss";
import Link from "next/link";

const Cards = ({ imageUrl, title, description, id, brief }) => {
	return (
		<div className={styles.card}>
			<img src={imageUrl} alt="insumos medicos" />
			<h5>{title}</h5>
			<p>{brief}</p>
			<Link as={`/productDesc/${title}`} href="/productDesc/[id]" passHref>
				<button type="submit">Ver mas</button>
			</Link>
		</div>
	);
};

export default Cards;
