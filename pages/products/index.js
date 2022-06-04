import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";

import { getProducts } from "../api/getProducts";

const Index = () => {
	useEffect(() => {
		fetch("api/getProducts").then((response) => console.log(response.json()));
	}, []);

	return (
		<>
			<Header />
			<div>
				<div>
					<h3>Equipamiento</h3>
				</div>
			</div>
			<Products />
		</>
	);
};

export default Index;
