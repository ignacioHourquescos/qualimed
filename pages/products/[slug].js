import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import styles from "./index.module.scss";
import React, { useState, useEffect } from "react";
import CarrouselMobile from "../../components/CarrouselMobile/CarrouselMobile";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import { useMediaQuery } from "react-responsive";
import Hero2 from "../../components/Hero2/Hero2";
import getProducts from "../api/getProducts";

export const getStaticPaths = async () => {
  const paths = [
    { params: { slug: "equipamiento" } },
    { params: { slug: "insumosMedicos" } },
    { params: { slug: "medicinaDeportiva" } },
    { params: { slug: "equipamientoVenta" } },
    { params: { slug: "equipamientoAlquiler" } },
    { params: { slug: "equipamientoServicioTecnico" } },
  ];

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const data = await getProducts();
  const array = data.map((d) => ({
    code: d[0],
    category: !d[1] ? "" : d[1],
    brand: d[2],
    title: d[3],
    brief: d[4],
    description: d[5],
    application: d[6],
    techcnial: d[7],
    img: !d[8]
      ? "barbijo.png"
      : "https://drive.google.com/uc?export=view&id=" + d[8],
    ml: !d[9] ? "" : d[9],
  }));
  return {
    props: {
      allProducts: array,
      slug,
    },
  };
}

const Index = ({ allProducts, slug }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState();
  const [lookUpValue, setLookUpValue] = useState();
  const [initialValues, setInitialValues] = useState(true);
  const [routerContent, setRouterContent] = useState([]);
  const [brandsList, setBrandsList] = useState([]);
  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });

  const brandFilter = (brand) => {
    if (!brand) {
      setProducts(allProducts);
      setBrandsList(
        allProducts.filter((element) =>
          element.category.includes(categoryToParamConverter(slug))
        )
      );
    } else {
      setProducts(
        allProducts.filter((item) => item.brand.includes(brand.toString()))
      );
      setBrandsList(
        allProducts.filter((element) =>
          element.category.includes(categoryToParamConverter(slug))
        )
      );
    }
  };

  const changeToAllProducts = () => {
    setInitialValues(true);
    setSelectedBrand();
    setLookUpValue();
    setProducts(allProducts);
  };

  useEffect(() => {
    brandFilter();
    setLoading(false);
  }, [slug]);

  useEffect(() => {
    if (slug == "insumosMedicos")
      setRouterContent([
        "INSUMOS MEDICOS",
        setInitialValues(true),
        "Insumos Medicos",
        "../insumosMedMin.jpg",
      ]);
    if (slug == "equipamiento")
      setRouterContent([
        "EQUIPAMIENTO",
        setInitialValues(true),
        "Equipamiento",
        "../Equipamiento2.jpg",
      ]);
    if (slug == "medicinaDeportiva")
      setRouterContent([
        "MEDICINA DEPORTIVA",
        setInitialValues(true),
        "Medicina Deportiva",
        "../MedDepSub.jpg",
      ]);
    if (slug == "equipamientoVenta")
      setRouterContent([
        "EQUIPAMIENTO VENTA",
        setInitialValues(true),
        "Equipamiento Venta",
        "../Equipamiento2.jpg",
      ]);
    if (slug == "equipamientoAlquiler")
      setRouterContent([
        "EQUIPAMIENTO ALQUILER",
        setInitialValues(true),
        "Equipamiento Alquiler",
        "../Equipamiento2.jpg",
      ]);
    if (slug == "equipamientoServicioTecnico")
      setRouterContent([
        "EQUIPAMIENTO SERVICIO TECNICO",
        setInitialValues(true),
        "Equipamiento Servicio Técnico",
        "../Equipamiento2.jpg",
      ]);
  }, [slug]);

  const testFunction = (e) => {
    e.preventDefault();
  };

  const resetValues = () => {
    setInitialValues(true);
    setSelectedBrand();
    setLookUpValue();
  };

  const brandClickHandler = (element) => {
    brandFilter(element);
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
              changeToAllProducts={changeToAllProducts}
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
