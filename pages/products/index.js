import React, {useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import Products from '../../components/Products/Products'
import styles from '../products/index.module.scss'


const index = () => {


  useEffect(()=>{
    fetch('https://sheets.googleapis.com/v4/spreadsheets/1CMfYFGhXhIBEMO-Ob9CZucRujqTdkRSIkD7hM-xaYew/values/MASTER?alt=json')

    .then(response => console.log(response.json()))
  },[])



  return (
    <>
      <Header/>
      <div className={styles.hero}>
        <div className={styles.rectangle}>
          <h3>Equipamiento</h3>
        </div>
      </div>
      <Products/>
    </>
  )
}

export default index
