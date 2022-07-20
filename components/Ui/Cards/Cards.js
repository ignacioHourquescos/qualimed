import React from "react";
import styles from "./Cards.module.scss";
import Link from "next/link";
import ContentLoader from "react-content-loader";
import { Skeleton } from "antd";
import { Spin } from "antd";

const Cards = ({ imageUrl, title, description, id, brief, loading }) => {
	return (
		<>
			{/* <ContentLoader
					speed={2}
					width={280}
					height={450}
					viewBox="0 0 315 423"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb"
				>
					<rect x="-10" y="260" rx="2" ry="2" width="333" height="33" />
					<rect x="-33" y="-24" rx="0" ry="0" width="354" height="474" />
					<rect x="-3" y="355" rx="2" ry="2" width="339" height="69" />
					<rect x="-13" y="303" rx="2" ry="2" width="333" height="33" />
				</ContentLoader> */}

			<div className={styles.card}>
				{loading ? (
					<Spin />
				) : (
					<>
						<img src={imageUrl} alt="insumos medicos" />
						<div className={styles.data_container}>
							<h5>{title}</h5>
							<p>{brief}</p>
						</div>
						<Link
							as={`/productDesc/${encodeURIComponent(title)}`}
							href={`/productDesc/${encodeURIComponent(title)}`}
							passHref
						>
							<button type="submit">Ver mas</button>
						</Link>
					</>
				)}
			</div>
		</>
	);
};

export default Cards;
