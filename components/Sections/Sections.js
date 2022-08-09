import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./Sections.module.scss";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const Sections = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 700px)" });

  const [desktop, setDesktop] = useState(true);

  useEffect(() => {
    if (!isDesktop) {
      setDesktop(false);
    }
  }, [isDesktop]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px 80px ",
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1800,
  };
  const settings1 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px 80px ",
    slidesToShow: 1,
    speed: 700,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className={styles.container}>
        <h5>CATEGORIAS </h5>
        <div className={styles.carrousel_container}>
          {desktop ? (
            <Slider {...settings}>
              <div>
                <Link
                  href="/products/equipamiento"
                  passHref
                  alt="insumos medicos"
                >
                  <img src="./monitor.png" alt="insumos medicos" />
                </Link>
              </div>
              <div>
                <Link
                  href="/products/medicinaDeportiva"
                  passHref
                  alt="insumos medicos"
                >
                  <img src="./medicinaDep1.png" alt="insumos medicos" />
                </Link>
              </div>
              <div>
                <Link
                  href="/products/insumosMedicos"
                  passHref
                  alt="insumos medicos"
                >
                  <img src="./seccionLand.png" alt="insumos medicos" />
                </Link>
              </div>
              <div>
                <Link
                  href="/products/equipamiento"
                  passHref
                  alt="insumos medicos"
                >
                  <img src="./monitor.png" alt="insumos medicos" />
                </Link>
              </div>
              <div>
                <Link
                  href="/products/medicinaDeportiva"
                  passHref
                  alt="insumos medicos"
                >
                  <img src="./medicinaDep1.png" alt="insumos medicos" />
                </Link>
              </div>
              <div>
                <Link
                  href="/products/insumosMedicos"
                  passHref
                  alt="insumos medicos"
                >
                  <img src="./seccionLand.png" alt="insumos medicos" />
                </Link>
              </div>
            </Slider>
          ) : (
            <Slider {...settings1}>
              <div>
                <Link
                  href="/products/equipamiento"
                  passHref
                  alt="insumos medicos"
                >
                  <img src="./monitor.png" alt="insumos medicos" />
                </Link>
              </div>
              <div>
                <Link
                  href="/products/medicinaDeportiva"
                  passHref
                  alt="insumos medicos"
                >
                  <img src="./medicinaDep1.png" alt="insumos medicos" />
                </Link>
              </div>
              <div>
                <Link
                  href="/products/insumosMedicos"
                  passHref
                  alt="insumos medicos"
                >
                  <img src="./seccionLand.png" alt="insumos medicos" />
                </Link>
              </div>
            </Slider>
          )}
        </div>
      </div>
    </>
  );
};

export default Sections;
