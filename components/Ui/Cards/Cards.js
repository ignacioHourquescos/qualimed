import React from "react";
import styles from "./Cards.module.scss";
import Link from "next/link";

const Cards = ({ imageUrl, title, description }) => {
	return (
		<div className={styles.card}>
			<img src={imageUrl} />
			<h5>{title}</h5>
			<p>{description.slice(0, 50)}...</p>
			<Link href="../productDesc/slug" passHref prefetch={false}>
				<button>Ver mas</button>
			</Link>
		</div>
	);
};

export default Cards;
