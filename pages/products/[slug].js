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

  const idCategoryAdapter = () =>{
    if (idCategory == "insumosMedicos") return "INSUMOS MEDICOS"
    if (idCategory == "equipamiento") return "EQUIPAMIENTO"
    if (idCategory == "medicinaDeportiva") return "MEDICINA DEPORTIVA"    
  }

  const idCategoryAdapter2 = () =>{
    if (idCategory == "insumosMedicos") return "Insumos Medicos"
    if (idCategory == "equipamiento") return "Equipamiento"
    if (idCategory == "medicinaDeportiva") return "Medicina Deportiva"    
  }

  const testFunction = (e) =>{
    e.preventDefault();
    console.log("esta es la fucntion test " + e.value)
  }

  useEffect(() => {
    fetch("../api/getProducts")
      .then((response) => response.json())
      .then((data) => (setProducts(data[0]), setLoading(false)));
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
      <SubHeader title={idCategoryAdapter2()} img="equipHero1.png" />
      <div className={styles.container}>
        <Filter
          testFunction={testFunction}
          brands={DUMMYbrands} 
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
                (element.category == idCategoryAdapter()))}/>
                :
                   <Products
              data={products.filter(
                (element) => 
                (element.category == idCategoryAdapter()
                 && element.brand == selectedBrand
                 && element.title == lookUpValue)
                // ||
                // ( element.title == lookUpValue)
                ||
                 (element.category == idCategoryAdapter()
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



const DUMMYbrands = ["3M", "HIPOALERGIC", "MEDTRONIC"]

{/* <SubHeader title="Insumos médicos" img="insumosMed.png" />
<SubHeader title="Marcas" img="marcas.png" />      
<SubHeader title="Equipamiento" img="equipHero1.png" /> 
<SubHeader title="Medicina deportiva" img="medicinaDep2.png" />*/}


// const prodFilter = function getProdByName(){
//   searchText = searchText.toLowerCase();
//   return products.filter(product => product.name.toLowerCase().includes(searchText))
// }