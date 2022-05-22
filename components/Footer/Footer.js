import React from 'react'
import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.lists}>
        <img src='/logoChico.png'></img>
        
        <div className={styles.seccions}>
          <h5>Inicio</h5>
          <li>Quienes somos</li>
          <li>Productos</li>
          <li>Tienda minorista</li>
          <li>Contacto</li>
          <img src="./instagram.png"></img>
        </div>
        <div style={{gridRow: 2}}>
          <h5>Teléfono</h5>
          <li>4716-2699</li>
          <li>4716-2652</li>
        </div>
        <div style={{gridRow: 2}}>
          <h5>E-mail</h5>
          <li>cotizaciones@qualimed.com.ar</li>
        </div>
        <div style={{gridRow: 2}}>
          <h5>Dirección</h5>
          <li><h6>Sede Central:</h6>Partido Gral. San Martin, Buenos Aires, Argentina. </li>
          <li><h6>Sucursales:</h6>Costa Atlántica, Buenos Aires, Argentina.<br/> Chascomús, Buenos Aires, Argentina. </li>
        </div>
        <img src="/instagram.png" style={{width: '26px', height: '26px'}} className={styles.insta}></img>
      </div>
      
      </div>

  )
}

export default Footer
