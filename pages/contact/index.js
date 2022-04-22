import React from 'react'
import Header from '../../components/Header/Header'
import styles from './index.module.scss'
const index = () => {
  return (
    <div>
      <Header/>
      <div className={styles.title}><h1>Contactate con nosotros</h1></div>
      <div className={styles.container}>
        <div className={styles.wpp}></div>
        <div className={styles.tel}></div>
        <div className={styles.email}></div>
        <div className={styles.direction}></div>
        <div className={styles.imgBig}><img src='/fotoContact.png'></img></div>
      </div>
    </div>
  )
}

export default index
