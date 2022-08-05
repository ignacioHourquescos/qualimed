import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import styles from "./index.module.scss";
import React, { useRef, useState, useEffect } from "react";
import CarrouselMobile from "../../components/CarrouselMobile/CarrouselMobile";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import Hero2 from "../../components/Hero2/Hero2";


const Index = ({}) => {
	const router = useRouter();
	const idCategory = router.query.slug;
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedBrand, setSelectedBrand] = useState();
	const [lookUpValue, setLookUpValue] = useState();
	const [initialValues, setInitialValues] = useState(true);
	const [routerContent, setRouterContent] = useState([]);
	const [brandsList, setBrandsList] = useState([]);
	const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });

	const getProducts = (brand) => {
		var array = [];
		let categoriesArray = [];
		let brandsArray = [];

		let sheetName = "MASTER";
		let fileCode = "1CMfYFGhXhIBEMO-Ob9CZucRujqTdkRSIkD7hM-xaYew"; //codigo de la derecha
		let APIkey = "AIzaSyAQGQq6Vbh7blIY3J7XwzVrUBDe3tQelm8";
		setLoading(true);
		fetch(
			`https://sheets.googleapis.com/v4/spreadsheets/${fileCode}/values/${sheetName}?alt=json&key=${APIkey}`
		)
			.then((response) => response.json())

			.then((data) => {
				for (var i = 1; i < data.values.length; i++) {
					array.push({
						code: data.values[i][0],
						category: !data.values[i][1] ? "" : data.values[i][1],
						brand: data.values[i][2],
						title: data.values[i][3],
						brief: data.values[i][4],
						description: data.values[i][5],
						application: data.values[i][6],
						techcnial: data.values[i][7],
						img: !data.values[i][8]
							? "/placeholder.png"
							: "https://drive.google.com/uc?export=view&id=" +
							  data.values[i][8],
						ml: !data.values[i][9] ? "" : data.values[i][9],
					});

					categoriesArray.push(data.values[i][0]);
					brandsArray.push(data.values[i][2]);
				}
				if (!brand) setProducts(array);
				else
					setProducts(array.filter((item) => item.brand == brand.toString()));
				setBrandsList(
					array.filter(
						(element) =>
							element.category == categoryToParamConverter(idCategory)
					)
				);
			})
			.then((data) => {
				setLoading(false);
			});
	};

	useEffect(() => {
		getProducts();
	}, [idCategory]);

	useEffect(() => {
		if (idCategory == "insumosMedicos")
			setRouterContent([
				"INSUMOS MEDICOS",
				setInitialValues(true),
				"Insumos Medicos",
				"../insumosMedMin.jpg",
			]);
		if (idCategory == "equipamiento")
			setRouterContent([
				"EQUIPAMIENTO",
				setInitialValues(true),
				"Equipamiento",
				"../Equipamiento2.jpg",
			]);
		if (idCategory == "medicinaDeportiva")
			setRouterContent([
				"MEDICINA DEPORTIVA",
				setInitialValues(true),
				"Medicina Deportiva",
				"../MedDepSub.jpg",
			]);
		if (idCategory == "equipamientoVenta")
			setRouterContent([
				"EQUIPAMIENTO VENTA",
				setInitialValues(true),
				"Equipamiento Venta",
				"../Equipamiento2.jpg",
			]);
		if (idCategory == "equipamientoAlquiler")
			setRouterContent([
				"EQUIPAMIENTO ALQUILER",
				setInitialValues(true),
				"Equipamiento Alquiler",
				"../Equipamiento2.jpg",
			]);
		if (idCategory == "equipamientoServicioTecnico")
			setRouterContent([
				"EQUIPAMIENTO SERVICIO TECNICO",
				setInitialValues(true),
				"Equipamiento Servicio Técnico",
				"../Equipamiento2.jpg",
			]);
	}, [idCategory]);

	const testFunction = (e) => {
		e.preventDefault();
	};

	const resetValues = () => {
		setInitialValues(true);
		setSelectedBrand();
		setLookUpValue();
	};

	// const withoutSpaces = (element) => {
	//   if (!element == null) {
	//    return replace(/ /g, '')
	//   }
	// }

	const brandClickHandler = (element) => {
		getProducts(element);
		console.log("MARCA ELEGIDA", element);
		console.log("PRODUCTS", products);
		// const fitleredProducts = products.filter(
		// 	(item) => item.brand == element.toString()
		// );
		// setProducts(fitleredProducts);
		// setBrandSelection(brandSelection+1)
		// setInitialValues(false);
		// setSelectedBrand(element);
		// setLookUpValue("  ");
	};

	const lookUpValueHandler = (element) => {
		setLookUpValue(element);
		setSelectedBrand();
		setInitialValues(false);
	};

	return (
		<>
			<Header />
			<Hero2 title={routerContent[2]} img={routerContent[3]} color="white" />

			<div className={styles.container}>
				<div
					style={{ background: "#E5E5E5", overflow: "hidden" }}
					className={styles.mainCont}
				>
					<div className={styles.container2}>
						<Filter
							resetValues={resetValues}
							loading={loading}
							testFunction={testFunction}
							brands={brandsList.map((e) => e.brand)}
							brandClickHandler={brandClickHandler}
							lookUpValueHandler={lookUpValueHandler}
						/>
						<div className={styles.products}>
							{initialValues ? (
								<Products
									data={products.filter((element) =>
										element.category.includes(routerContent[0])
									)}
									loading={loading}
								/>
							) : (
								<Products
									data={products.filter(
										(element) =>
											(element.category.includes(routerContent[0]) &&
												element.brand == selectedBrand &&
												element.title
													.toLowerCase()
													.includes(lookUpValue.toLowerCase())) ||
											element.title
												.toLowerCase()
												.includes(lookUpValue.toLowerCase()) ||
											(element.category.includes(routerContent[0]) &&
												element.brand == selectedBrand)
									)}
									loading={loading}
								/>
							)}
						</div>

						<div className={styles.carrousel}>
							<CarrouselMobile spaceBetween={30} title="Venta" />
							<CarrouselMobile spaceBetween={30} title="Alquileres" />
							<CarrouselMobile spaceBetween={30} title="Servicio técnico" />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Index;

const categoryToParamConverter = (value) => {
	switch (value) {
		case "equipamiento":
			return "EQUIPAMIENTO";
		case "insumosMedicos":
			return "INSUMOS MEDICOS";
		case "medicinaDeportiva":
			return "MEDICINA DEPORTIVA";
		case "equipamientoAlquiler":
			return "EQUIPAMIENTO ALQUILER";
		case "equipamientoServicioTecnico":
			return "EQUIPAMIENTO SERVICIO TECNICO";
		case "equipamientoAlquiler":
			return "EQUIPAMIENTO ALQUILER";
	}
};
