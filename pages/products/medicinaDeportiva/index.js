import Header from "../../../components/Header/Header";
import Products from "../../../components/Products/Products";
import styles from "../medicinaDeportiva/index.module.scss";
import React, { useRef, useState, useEffect } from "react";
import SubHeader from "../../../components/SubHeader/SubHeader";
import CarrouselMobile from "../../../components/CarrouselMobile/CarrouselMobile";
import Filter from "../../../components/Filter/Filter";
import Footer from '/components/Footer/Footer';

const Index = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../api/getProducts")
      .then((response) => response.json())
      .then((data) => (setProducts(data[0]), setLoading(false)));
  }, []);

  return (
    <div
      style={{ background: "#E5E5E5", overflow: "hidden" }}
      className={styles.mainCont}
    >
      <Header />
      <SubHeader title="Medicina deportiva" img="medicinaDep2.png" />

      <div className={styles.container}>
        <Filter />
        <div className={styles.products}>
          <Products
            data={products.filter(
              (element) => element.category == "MEDICINA DEPORTIVA"
            )}
            loading={loading}
          />
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Index;
