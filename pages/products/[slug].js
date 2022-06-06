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

  const [filter, setFilter] = useState("");


  // useEffect(() => {
  // //   if (router.asPath == "/products/equipamiento") {
  // //     setFilter('EQUIPAMIENTO')
  // //   } else{
  // //     setFilter(router.query.searchText)
  // //   }
  // // }, [])
  //   console.log(searchText)
  // }, [searchText])
  
  const testFunction = (e) =>{
    e.preventDefault();
    console.log("esta es la fucntion test " + e.value)
  }

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../api/getProducts")
      .then((response) => response.json())
      .then((data) => (setProducts(data[0]), setLoading(false)));
  }, []);

  const prodFilter = function getProdByName(){
      searchText = searchText.toLowerCase();
      return products.filter(product => product.name.toLowerCase().includes(searchText))
    }

  return (
    <div
      style={{ background: "#E5E5E5", overflow: "hidden" }}
      className={styles.mainCont}
    >
      <Header />
      <SubHeader title={idCategoryAdapter2()} img="equipHero1.png" />

      <div className={styles.container}>
        <Filter testFunction={testFunction}/>
        <div className={styles.products}>
          {/* {  */}
            {/* searchText = "" ? */}
              <Products
              data={products.filter(
                // (element) => element.title == filter
                (element) => element.category == idCategoryAdapter()
              )}
              loading={loading}
            />
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