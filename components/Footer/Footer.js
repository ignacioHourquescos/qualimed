import React from 'react'
import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.lists}>
        <img src='/logoChico.png'></img>
        
        <div style={{gridRow: 2}}>
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
        </div>
        <div style={{gridRow: 2}}>
          <h6>E-mail</h6>
          <li>cotizaciones@qualimed.com.ar</li>
        </div>
        <div style={{gridRow: 2}}>
          <h6>Ubicación</h6>
          <li><h6>Sede Central:</h6>
            <p>Partido Gral. San Martin, Buenos Aires, Argentina.</p>
          </li>
          <li><h6>Sucursales:</h6>
            <p>Costa Atlántica, Buenos Aires, Argentina.<br/> Chascomús, Buenos Aires, Argentina.</p>
          </li>
        </div>
      </div>
      
      </div>

  )
}

export default Footer
