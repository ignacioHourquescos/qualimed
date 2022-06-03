import Header from "../../../components/Header/Header";
import Products from "../../../components/Products/Products";
import styles from "../equipamiento/index.module.scss";
import React, { useRef, useState, useEffect } from "react";
import SubHeader from "../../../components/SubHeader/SubHeader";
import CarrouselMobile from "../../../components/CarrouselMobile/CarrouselMobile";
import Filter from "../../../components/Filter/Filter";
import Footer from '/components/Footer/Footer';

<<<<<<< HEAD
const index = () => {

  const {searchText} = Filter;

  const [test, setTest] = useState("");

  useEffect(() => {
    
    console.log(searchText)
  }, [searchText])
  
  const testFunction = (e) =>{
    e.preventDefault();
    console.log("esta es la fucntion test " + e )
  }

=======
const Index = () => {
>>>>>>> fc43a4fa89c376b932af6e3774f15287c2bf42fa
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
      <SubHeader title="Equipamiento" img="equipHero1.png" />

      <div className={styles.container}>
        <Filter testFunction={testFunction}/>
        <div className={styles.products}>
          {/* { 
            searchText = "" ?
              <Products
              data={products.filter(
                (element) => element.category == "EQUIPAMIENTO"
              )}
              loading={loading}
            />
          :
          <Products
              data={products.filter(
                (element) => element.title.toLowerCase() == searchText.toLowerCase()
              )}
              loading={loading}
            />
            
          } */}
        </div>

        <div className={styles.carrousel}>
          <CarrouselMobile spaceBetween={30} title="Equipos" />
          <CarrouselMobile spaceBetween={30} title="Alquileres" />
          <CarrouselMobile spaceBetween={30} title="Servicio técnico" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Index;
