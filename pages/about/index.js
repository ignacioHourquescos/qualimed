import React from 'react'
import Header from '../../components/Header/Header'
import styles from './index.module.scss';
import Footer from '../../components/Footer/Footer'

const index = () => {
  return (
    <div className={styles.body}>
      <Header/>
      <div className={styles.title}><h1>Nosotros</h1></div>
      <div className={styles.container}>
          <div className={styles.seccion1}>
            <p>
              Somos una empresa familiar con más de 30 años dedicados a la venta de insumos y equipamiento médico, brindando asistencia personalizada a instituciones públicas y privadas.
              <br/><br/>
              Nos especializamos en la venta mayorista de Insumos Médicos, Equipamiento Hospitalario y Medicina Deportiva. Buscamos brindar soluciones para nuestros clientes y cubrir todas sus necesidades en el rubro, ofreciendo productos de alta calidad, primeras marcas nacionales e internacionales y equipamiento tecnológico de primer nivel. También contamos con nuestra área de servicio técnico para equipamiento; realizando instalaciones, mantenimiento y reparaciones.
              <br/><br/>
            </p>
          </div>
          <div className={styles.seccion2}></div>
          <div className={styles.seccion5}>
            {/* <div className={styles.subSeccion1}><h2>Sobre Nosotros</h2></div> */}
            <div className={styles.subSeccion2}>
              <p>
              Ofrecemos atención personalizada, soporte post venta y distribución de los productos tanto para instituciones, revendedores o pequeños emprendimientos. 
              </p>
            </div>
            {/* <div className={styles.subSeccion3}></div> */}
          </div>
          <div className={styles.seccion3}>
           <p>
            Qualimed S.A se encuentra constantemente incorporando productos y nuevas tecnologías para mejorar la calidad del sector de la salud; como también desarrollando nuevas plataformas de venta y atención para brindar el mejor servicio a nuestros clientes.
            <br/><br/>
            Nuestra sede central se encuentra ubicada en el Partido de San Martin, Buenos Aires, Argentina. Contamos con sucursales mayoristas en la Costa Atlántica, el Partido de Chascomús y realizamos ventas a todo el país a través de las empresas de logística más importantes
           </p>
          </div>
            <div className={styles.seccion4}></div>

      </div>
      <Footer/>
    </div>
  )
}

export default index
