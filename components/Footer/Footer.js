import React from 'react'
import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.lists}>
        <img src='/logoChico.png'></img>
        
        <div className={styles.seccions}>
          <h6>Inicio</h6>
          <li>Quienes somos</li>
          <li>Productos</li>
          <li>Tienda minorista</li>
          <li>Contacto</li>
        </div>
        <div style={{gridRow: 2}}>
          <h6>Teléfono</h6>
          <li>4716-2699</li>
          <li>4716-2652</li>
          <li>4716-1704</li>
        </div>
        <div style={{gridRow: 2}}>
          <h6>E-mail</h6>
          <li>info@qualimed.com.ar</li>
          <li>asantiago@qualimed.com.ar</li>
          <li>psantiago@qualimed.com.ar</li>
        </div>
        <div style={{gridRow: 2}}>
          <h6>Dirección</h6>
          <li>Infanta Isabel 2473, 1650 Villa Libertad<br/>
Buenos Aires, Argentina</li>
        </div>
      </div>
      
      </div>

  )
}

export default Footer
