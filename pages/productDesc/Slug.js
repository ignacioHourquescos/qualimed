import Header from '/components/Header/Header';
import Footer from '/components/Footer/Footer';
import styles from "./slug.module.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Cards from '../../components/Ui/Cards/Cards';

const Slug = ({detail}) => {
  const {img, title, description, application, techcnial} = detail;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };


  return (
    <div className={styles.contAll}>
      <Header />
        <div className={styles.title}><h1>{title}</h1></div>

        <div className={styles.container}>
        <div className={styles.detail}>
            <img src={img} />
            <div className={styles.detailInfo}>
              Drescripcion:<br/>
              {description}<br/>
              Aplicaciones:<br/>
              {application}<br/>
              Ficha tecnica:<br/>
              {techcnial}
            </div>
            <div className={styles.contact}>

                <div className={styles.cotizacion}>
                    <h5>{title}</h5>
                    <p>{description.slice(0, 50)}...</p>
                    <button>Cotización via whatsapp</button>
                    <button style={{background:'#8183CA'}}>Cotización via mail</button>
                </div>
                <div className={styles.shop}><img src='/cart2.png'/>Ver producto en tienda minorista</div>
            </div>
        </div>
        <div className={styles.related}>
        <div className={styles.seccions}>
            <h3>Productos relacionados</h3>
              {/* {
                loading &&
                data.map(({id, description}) => (
                  <div>
                    <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/>
                  </div>
                    )
                  )
            
              } */}
            <div className={styles.swiper}>
              <Swiper
                      slidesPerView={"auto"}
                      spaceBetween={30}
                      modules={[Pagination]}
                      
                    >
                      <SwiperSlide className={styles.swiperSlide}><Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/></SwiperSlide>
                      <SwiperSlide className={styles.swiperSlide}><Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/></SwiperSlide>
                      <SwiperSlide className={styles.swiperSlide}><Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/></SwiperSlide>
                      <SwiperSlide className={styles.swiperSlide}><Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/></SwiperSlide>
                      <SwiperSlide className={styles.swiperSlide}><Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/></SwiperSlide>
                      <SwiperSlide className={styles.swiperSlide}><Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/></SwiperSlide>
                      <SwiperSlide className={styles.swiperSlide}><Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/></SwiperSlide>
              
                    </Swiper>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Slug;
