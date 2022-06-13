import Header from "../../components/Header/Header"
import Products from "../../components/Products/Products";
import styles from "./index.module.scss";
import React, { useRef, useState, useEffect } from "react";
import SubHeader from "../../components/SubHeader/SubHeader";
import CarrouselMobile from "../../components/CarrouselMobile/CarrouselMobile";
import Filter from "../../components/Filter/Filter";
import Footer from '../../components/Footer/Footer';
import { useRouter} from "next/router";
import { useMediaQuery } from "react-responsive";

const Index = () => {

  const router = useRouter();
  const idCategory = router.query.slug;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState();
  const [lookUpValue, setLookUpValue] = useState();
  const [initialValues, setInitialValues] = useState(true)
  const [routerContent, setRouterContent] = useState([])
  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });

  useEffect(() => {
      if (idCategory == "insumosMedicos") setRouterContent(["INSUMOS MEDICOS", setInitialValues(true), "Insumos Medicos", "./insumosMed1.jpg"])
      if (idCategory == "equipamiento")  setRouterContent( ["EQUIPAMIENTO", setInitialValues(true), "Equipamiento", "./Equipamiento2.jpg"])
      if (idCategory == "medicinaDeportiva")  setRouterContent(["MEDICINA DEPORTIVA", setInitialValues(true), "Medicina Deportiva", "./MedDepSub.jpg"])
      if (idCategory == "equipamientoVenta")  setRouterContent(["EQUIPAMIENTO VENTA", setInitialValues(true), "Equipamiento", "./Equipamiento2.jpg"])
      if (idCategory == "equipamientoAlquiler")  setRouterContent(["EQUIPAMIENTO ALQUILER", setInitialValues(true), "Equipamiento", "./Equipamiento2.jpg"])
      if (idCategory == "equipamientoSt")  setRouterContent(["EQUIPAMIENTO ST", setInitialValues(true), "Equipamiento", "./Equipamiento2.jpg"])

    
  }, [idCategory])
  
  const testFunction = (e) =>{
    e.preventDefault();
    console.log("esta es la fucntion test " + e.value)
  }

  useEffect(() => {
    fetch("../api/getProducts")
      .then((response) => response.json())
      .then((data) => (setProducts(data[0]), setLoading(false)))
      
  }, []);

  const resetValues = () => {
      setInitialValues(true)
      setSelectedBrand()
      setLookUpValue()
    
  }
   
  // const withoutSpaces = (element) => {
  //   if (!element == null) {
  //    return replace(/ /g, '')
  //   }
  // }

  const brandClickHandler = (element) =>{
    setSelectedBrand(element)
    setLookUpValue("  ")
    setInitialValues(false)
  }

  const lookUpValueHandler = (element) =>{
    setLookUpValue(element)
    setSelectedBrand()
    setInitialValues(false)
    
  }
  console.log(products)

  return (
    <div
      style={{ background: "#E5E5E5", overflow: "hidden" }}
      className={styles.mainCont}
    >
      <Header />
      <SubHeader title={routerContent[2]} img={routerContent[3]} />
      <div className={styles.container}>
        <Filter
          resetValues={resetValues}
          loading={loading}
          testFunction={testFunction}
          brands={products.map(e => e.brand)} 
          brandClickHandler={brandClickHandler}  
          lookUpValueHandler={lookUpValueHandler}
          />
        <div className={styles.products}>
          {/* {  */}
            {/* searchText = "" ? */}
              {
                initialValues
                ?
                <Products data={products.filter(
                (element) => 
                (element.category.includes(routerContent[0])))}/>
                :
                   <Products
              data={products.filter(
                (element) => 
                (element.category.includes(routerContent[0])
                 && element.brand == selectedBrand
                 && (element.title.toLowerCase()).includes(lookUpValue.toLowerCase()))
                ||
                ( (element.title.toLowerCase()).includes(lookUpValue.toLowerCase()))
                ||
                 (element.category.includes(routerContent[0])
                 && element.brand == selectedBrand)
              )}
              loading={loading}
             
            />
              }
 
           
        </div>

        <div className={styles.carrousel}>
          <CarrouselMobile spaceBetween={30} title="Venta" />
          <CarrouselMobile spaceBetween={30} title="Alquileres" />
          <CarrouselMobile spaceBetween={30} title="Servicio técnico" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Index;




{/* <SubHeader title="Insumos médicos" img="insumosMed.png" />
<SubHeader title="Marcas" img="marcas.png" />      
<SubHeader title="Equipamiento" img="equipHero1.png" /> 
<SubHeader title="Medicina deportiva" img="medicinaDep2.png" />*/}


// const prodFilter = function getProdByName(){
//   searchText = searchText.toLowerCase();
//   return products.filter(product => product.name.toLowerCase().includes(searchText))
// }