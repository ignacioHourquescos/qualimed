import React from 'react'
import Cards from '../Ui/Cards/Cards';
import styles from './Products.module.scss';
import { useFetch } from '../../hooks/useFetch';



const Products = () => {

  const { loading, data } =  useFetch(`https://qualimed.herokuapp.com/articulos`);
  return (

          
      <div className={styles.cards}>
        {
          loading  ? (
          <>
          <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '/>
          <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '/>
          <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '/>
          <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '/>
          <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '/>
          <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '/>
          </>
          )
          :
          (
          data.map(({id, description}) => ( 
                    <Cards img='/monitorSignosVitales.png' title="Monitor de signos vitales" description={description}/>

          
          ))
          )
        }
        
      </div>
      

  )
}

export default Products
