import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import styles from "./index.module.scss";
import React, { useRef, useState, useEffect } from "react";
import CarrouselMobile from "../../components/CarrouselMobile/CarrouselMobile";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import Hero from "../../components/Hero2/Hero";

const Index = ({}) => {
	const router = useRouter();
	const idCategory = router.query.slug;
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedBrand, setSelectedBrand] = useState();
	const [lookUpValue, setLookUpValue] = useState();
	const [initialValues, setInitialValues] = useState(true);
	const [routerContent, setRouterContent] = useState([]);
	const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });

	const getProducts = () => {
		var array = [];
		let categoriesArray = [];
		let brandsArray = [];

		let sheetName = "MASTER";
		let fileCode = "1CMfYFGhXhIBEMO-Ob9CZucRujqTdkRSIkD7hM-xaYew"; //codigo de la derecha
		let APIkey = "AIzaSyAQGQq6Vbh7blIY3J7XwzVrUBDe3tQelm8";

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
							? "barbijo.png"
							: "https://drive.google.com/uc?export=view&id=" +
							  data.values[i][8],
						ml: !data.values[i][9] ? "" : data.values[i][9],
					});

					categoriesArray.push(data.values[i][0]);
					brandsArray.push(data.values[i][2]);
				}
				setProducts(array);
			})
			.then((data) => {
				setLoading(false);
			});
	};

	useEffect(() => {
		getProducts();
	}, []);

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
				"Equipamiento",
				"../Equipamiento2.jpg",
			]);
		if (idCategory == "equipamientoAlquiler")
			setRouterContent([
				"EQUIPAMIENTO ALQUILER",
				setInitialValues(true),
				"Equipamiento",
				"../Equipamiento2.jpg",
			]);
		if (idCategory == "equipamientoSt")
			setRouterContent([
				"EQUIPAMIENTO ST",
				setInitialValues(true),
				"Equipamiento",
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
		setSelectedBrand(element);
		setLookUpValue("  ");
		setInitialValues(false);
	};

	const lookUpValueHandler = (element) => {
		setLookUpValue(element);
		setSelectedBrand();
		setInitialValues(false);
	};

	return (
		<>
			<Header />
			<Hero title={routerContent[2]} img={routerContent[3]} color="white" />

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
							brands={products.map((e) => e.brand)}
							brandClickHandler={brandClickHandler}
							lookUpValueHandler={lookUpValueHandler}
						/>
						<div className={styles.products}>
							{/* {  */}
							{/* searchText = "" ? */}
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
