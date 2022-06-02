import Header from '/components/Header/Header';
import Footer from '/components/Footer/Footer';
import styles from "./slug.module.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Cards from '../../components/Ui/Cards/Cards';
import Link from "next/link";
import CarrouselMobile from '../../components/CarrouselMobile/CarrouselMobile';

const Slug = ({detail}) => {
  const {img, title, description, application, techcnial, code} = detail;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  const URL = 'https://wa.me';
	let number = "+54 011 47162699";
	number = number.replace(/[^\w\s]/gi, '').replace(/ /g, '');
    let url = `${URL}/${number}`;

    const enviarMsj = (event) =>{
        event.preventDefault();
        url += `?text=${encodeURI("Hola me gustaria consultarles por "+ title +" " + ' el codigo es ' + code)}`;

        window.open(url);

    }


  return (
    <div className={styles.contAll}>
      <Header />
        <div className={styles.title}><h1>{title}</h1></div>

        <div className={styles.container}>
        <div className={styles.detail}>
            <div className={styles.img_container}><img src={img} /></div>
            <div className={styles.detailInfo}>
              <b>Descripcion</b><br/>
              {description}<br/><br/>
              <b>Aplicaciones</b><br/>
              {application}<br/><br/>
              <b>Ficha tecnica</b><br/>
              {techcnial}
            </div>
            <div className={styles.contact}>

                <div className={styles.cotizacion}>
                    <h5>{title}</h5>
                    <p>{description.slice(0, 50)}...</p>
                    <button onClick={enviarMsj}>Cotización via whatsapp</button>
                    <button className={styles.btnMail} style={{background:'#8183CA'}}>Cotización via mail</button>
                    <div className={styles.shopMobile}><img src='/cart2.png'/>Ver producto en tienda minorista</div>
                </div>
                <div className={styles.shop}>
                  <img src='/cart2.png'/>
                  <Link target="_blank" href={{pathname:"https://qualimed2021.mercadoshops.com.ar/"}}>
								    Ver producto en tienda minorista
							      </Link>
              </div>
            </div>
        </div>
        <div className={styles.related}>
        <div className={styles.seccions}>
            <div className={styles.swiper}>
              <CarrouselMobile title="Productos relacionados" spaceBetween={60} />  
            </div>
          </div>

        </div>

      </div>

      <div className={styles.footer}><Footer /></div>
    </div>
  )
}

export default Slug;
