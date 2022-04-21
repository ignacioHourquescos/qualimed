import React from 'react'
import Header from '../../../components/Header/Header'
import Products from '../../../components/Products/Products'
import styles from '../insumosMedicos/index.module.scss'

const index = () => {
  return (
    <>
      <Header/>
      <div className={styles.hero}>
        <div className={styles.rectangle}>
          <h3>Insumos Medicos</h3>
        </div>
      </div>
      <Products/>
    </>
  )
}

export default index
