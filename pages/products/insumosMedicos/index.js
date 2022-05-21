import React, {useState} from 'react'
import Header from '../../../components/Header/Header'
import Products from '../../../components/Products/Products'
import styles from './index.module.scss'
import { Collapse } from 'antd';

const index = () => {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const [state, setState] = useState(false);

  function callback(key) {
    console.log(key);
    setSideDrawerOpen(!sideDrawerOpen);
  }
  function colorice(key1) {
    console.log(key1);
    setState(!state);

  }

  const { Panel } = Collapse;


  return (
    <div style={{background: '#E5E5E5', overflow: 'hidden'  }}>
      <Header/>
      <div className={styles.hero}>
        <div className={styles.rectangle}>
          <div><h3>Insumos médicos</h3></div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.filter}>
          <input className={styles.input} placeholder='Buscar Producto'></input>
          <div className={styles.categories}>
            <h3>Categorías</h3>
            <Collapse onChange={callback} ghost>
              <Panel className={styles.categoryPanel} showArrow={false} header={<><img src='/ventilatorIcon.png'/><a style={{ color: sideDrawerOpen ? '#3E4095' : '#595858', fontWeight: '700'  }}>Equipamiento</a></>} key="1">
                <li>Equipos</li>
                <li>Alquileres</li>
                <li>Servicio técnico</li>
              </Panel>
              <li className={styles.category}><img src='/maskIcon.png' /><div><a>Insumos médicos</a></div></li>
              <li className={styles.category}><img src='/bandageIcon.png' /><div><a>Medicina deportiva</a></div></li>
              </Collapse>
              <Collapse onChange={colorice} ghost>
              <Panel  className={styles.categoryPanel} showArrow={false} header={<><img src='/labelIcon.png' /><a  style={{ color: state ? '#3E4095' : '#595858', fontWeight: '700' }}>Marcas</a></>} key="3">
                <li>Alere</li>
                <li>Braun</li>
                <li>Drager</li>
                <li>Fujifilm</li>
                <li>Nutricia</li>
                <li>Philips</li>
              </Panel>
            </Collapse>
          </div>
        </div>

        <div className={styles.products}>
          <Products/>
        </div>
      </div>
    </div>
  )
}

export default index
