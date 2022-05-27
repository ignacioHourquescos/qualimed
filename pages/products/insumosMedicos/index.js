import Header from "../../../components/Header/Header";
import Products from "../../../components/Products/Products";
import styles from "../equipamiento/index.module.scss";
import React, { useRef, useState, useEffect } from "react";
import SubHeader from "../../../components/SubHeader/SubHeader";
import CarrouselMobile from "../../../components/CarrouselMobile/CarrouselMobile";
import Filter from "../../../components/Filter/Filter";

const index = () => {
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
      <SubHeader title="Insumos médicos" img="barbijo.png" />

      <div className={styles.container}>
        <Filter />
        <div className={styles.products}>
          <Products
            data={products.filter(
              (element) => element.category == "INSUMOS MEDICOS"
            )}
            loading={loading}
          />
        </div>

      </div>
    </div>
  );
};

export default index;
