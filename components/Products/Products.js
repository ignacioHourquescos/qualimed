import React from 'react'
import Cards from '../Ui/Cards/Cards';
import styles from './Products.module.scss';
import Link from 'next/link'



const Products = () => {
  return (

          
      <div className={styles.cards}>
        <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '/>
        <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '/>
        <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '/>
        <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '/>
        <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '/>
        <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '/>
      </div>
      

  )
}

export default Products
