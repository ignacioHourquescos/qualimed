import Header from "../../components/Header/Header"
import Products from "../../components/Products/Products";
import styles from "./index.module.scss";
import React, { useRef, useState, useEffect } from "react";
import SubHeader from "../../components/SubHeader/SubHeader";
import CarrouselMobile from "../../components/CarrouselMobile/CarrouselMobile";
import Filter from "../../components/Filter/Filter";
import Footer from '../../components/Footer/Footer';
import { useRouter} from "next/router";

const Index = () => {

  const router = useRouter();
  const idCategory = router.query.slug;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState();
  const [lookUpValue, setLookUpValue] = useState();
  const [initialValues, setInitialValues] = useState(true)
  const [routerContent, setRouterContent] = useState([])
  
  useEffect(() => {
      if (idCategory == "insumosMedicos") setRouterContent(["INSUMOS MEDICOS", setInitialValues(true), "Insumos Medicos"])
      if (idCategory == "equipamiento")  setRouterContent( ["EQUIPAMIENTO", setInitialValues(true), "Equipamiento"])
      if (idCategory == "medicinaDeportiva")  setRouterContent(["MEDICINA DEPORTIVA", setInitialValues(true), "Medicina Deportiva"  ])
    
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


  

  const brandClickHandler = (element) =>{
    setSelectedBrand(element)
    setLookUpValue()
    setInitialValues(false)
  }

  const lookUpValueHandler = (element) =>{
    setLookUpValue(element)
    setSelectedBrand()
    setInitialValues(false)
    
  }

  return (
    <div
      style={{ background: "#E5E5E5", overflow: "hidden" }}
      className={styles.mainCont}
    >
      <Header />
      <SubHeader title={routerContent[2]} img="equipHero1.png" />
      <div className={styles.container}>
        <Filter
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
                (element.category == routerContent[0]))}/>
                :
                   <Products
              data={products.filter(
                (element) => 
                (element.category == routerContent[0]
                 && element.brand == selectedBrand
                 && (element.title.replace(/ /g, '').toLowerCase()).includes(lookUpValue.replace(/ /g, '').toLowerCase()))
                ||
                ( (element.title.replace(/ /g, '').toLowerCase()).includes(lookUpValue.replace(/ /g, '').toLowerCase()))
                ||
                 (element.category == routerContent[0]
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