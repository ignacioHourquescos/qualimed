import Header from '/components/Header/Header';
import Footer from '/components/Footer/Footer';
import styles from "./slug.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import CarrouselMobile from '../../components/CarrouselMobile/CarrouselMobile';
import { useRouter} from "next/router";
import React, { useRef, useState, useEffect } from "react";



const Slug = () => {
  // const {img, title, description, application, techcnial, code} = detail;
  
  const router = useRouter();
  const idEvent = router.query.slug;
const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
   fetch("../api/getProducts")
    .then((response) => response.json())
    .then((data) => (setProducts(data[0]), setLoading(false)));
}, []);

    const URL = 'https://wa.me';
    let number = "+54 011 47162699";
    number = number.replace(/[^\w\s]/gi, '').replace(/ /g, '');
    let url = `${URL}/${number}`;

    const enviarMsj = (event) =>{
        event.preventDefault();
        url += `?text=${encodeURI("Hola me gustaria consultarles por "+ title +" " + ' el codigo es ' + code)}`;

        window.open(url);

    }

    if (!loading) {
      let detail = products.find( (element) => element.title == idEvent );

  return (
    <div className={styles.contAll}>
      <Header />
        <div className={styles.title}><h1>{detail.title}</h1></div>
        {
          loading
          ?
          ""
          :
          <div className={styles.container}>
        <div className={styles.detail}>
            <div className={styles.img_container}><img src={detail.img} /></div>
            <div className={styles.detailInfo}>
              <b>Descripcion</b><br/>
              {detail.description}<br/><br/>
              <b>Aplicaciones</b><br/>
              {detail.application}<br/><br/>
              <b>Ficha tecnica</b><br/>
              {detail.techcnial}
            </div>
            <div className={styles.contact}>

                <div className={styles.cotizacion}>
                    <h5>{detail.title}</h5>
                    <p>{detail.description.slice(0, 50)}...</p>
                    <button onClick={enviarMsj}>Cotización via whatsapp</button>
                    <button className={styles.btnMail} style={{background:'#8183CA'}}>Cotización via mail</button>
                    <Link target="_blank" href={{pathname:"https://qualimed2021.mercadoshops.com.ar/"}} passHref>
                      <div className={styles.shopMobile}><img src='/cart2.png'/>Ver producto en tienda minorista</div>
                      </Link>
                </div>
     
            </div>
        </div>
        <div className={styles.related}>
        <div className={styles.seccions}>
            <div className={styles.swiper}>
              <CarrouselMobile title="Productos relacionados" spaceBetween={100} />  
            </div>
          </div>

        </div>

      </div>
        }


      <div className={styles.footer}><Footer /></div>
    </div>
  )
    }
}

export default Slug;
