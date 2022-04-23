import React from 'react'
import Header from '../../../components/Header/Header'
import Products from '../../../components/Products/Products'
import styles from '../insumosDeportivos/index.module.scss'

const index = () => {
  return (
    <>
      <Header/>
      <div className={styles.hero}>
        <div className={styles.rectangle}>
          <h3>Insumos Deportivos</h3>
        </div>
      </div>
      <div className={styles.container}>
      
      <input className={styles.input} placeholder='Buscar Producto'></input>
      
      <Products/>
    </div>
    </>
  )
}

export default index