import React from "react";
import Cards from "../Ui/Cards/Cards";
import styles from "./Products.module.scss";
import { Spin } from "antd";

const Products = ({ data, loading }) => {
	return (
		<div className={styles.cards}>
			{loading ? (
				<></>
			) : (
				data.map((element, idx) => (
					<Cards
						key={`bc_${idx}`}
						loading={loading}
						title={element.title}
						description={element.description}
						imageUrl={element.img}
						brief={element.brief}
					/>
				))
			)}
		</div>
	);
};

export default Products;
