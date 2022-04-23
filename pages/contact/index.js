import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './index.module.scss';
import {EnvironmentOutlined, MailOutlined, MobileOutlined, WhatsAppOutlined} from '@ant-design/icons'

const index = () => {
  return (
    <div>
      <Header/>
      <div className={styles.title}><h1>Contactate con nosotros</h1></div>
      <div className={styles.container}>
        <div className={styles.contact}>
          <div className={styles.wpp}>
            <WhatsAppOutlined className={styles.wppImg}/>
            <div><h4>WhatsApp</h4><p>+54 116890-4568</p></div>
          </div>
          <div className={styles.tel}>
          <MobileOutlined  className={styles.wppImg}/>
          <div><h4>Teléfono</h4><p>4716-2652<br/>
                                   4716-2699<br/>
                                   4716-1704</p></div>
          </div>
          <div className={styles.email}>
          <MailOutlined className={styles.wppImg}/>
          <div><h4>Email</h4>
                              <p>info@qualimed.com.ar<br/>
                                asantiago@qualimed.com.ar<br/>
                                psantiago@qualimed.com.ar</p></div>
          </div>
          <div className={styles.direction}>
          <EnvironmentOutlined className={styles.pointImg}/>
            <div><h4>Dirección</h4>
                              <p>Infanta Isabel 2473, 1650 Villa Libertad<br/>
                              Buenos Aires, Argentina<br/></p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.599795016996!2d-58.562708684175384!3d-34.58899166422712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb82cacb853bf%3A0x955574e27436a603!2sInfanta%20Isabel%202473%2C%20B1650%20Villa%20Libertad%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1650740531071!5m2!1ses!2sar" width="100%" height="75%" className={styles.map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                  
            </div>
          </div>
          <div className={styles.imgBig}></div>    
        </div>
        <Footer/>
      </div>

    </div>
  )
}

export default index
