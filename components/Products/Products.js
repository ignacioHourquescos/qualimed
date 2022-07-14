import React from "react";
import Cards from "../Ui/Cards/Cards";
import styles from "./Products.module.scss";
import ContentLoader from "react-content-loader";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Products = ({ data, loading }) => {
	//AUXILIAR
	const numberOfSkeletonCards = Array.apply(null, Array(20)).map(function (
		x,
		i
	) {
		return i;
	});
	return (
		<div className={styles.cards}>
			{false ? (
				<Spin />
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
