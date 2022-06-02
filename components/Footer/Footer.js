import React from 'react'
import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.lists}>
        <img src='/QualimedPNG1.svg' style={{ margin: '0 0 0 -5%'}} />
        
        <div className={styles.seccions}>
            <li><Link href="/"><a>Inicio</a></Link></li>
            <li><Link href="/about"><a>Quienes somos</a></Link></li>
            <li><Link href="/products/marcas"><a>Productos</a></Link></li>
            <li><Link href="/contact"><a>Tienda minorista</a></Link></li>
            <li><Link href="/contact"><a>Contacto</a></Link></li>        
            <Link target="_blank" href={{pathname:"https://www.instagram.com/qualimed.insumos/"}}><img src={('/instagram.png')} style={{cursor: 'pointer'}}/></Link>
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
        <Link target="_blank" href={{pathname:"https://www.instagram.com/qualimed.insumos/"}}><img src={'/instagram.png'} style={{width: '26px', height: '26px', cursor: 'pointer'}} className={styles.insta} /></Link>
      </div>
      
      </div>

  )
}

export default Footer
