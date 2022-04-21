import React from 'react'
import styles from './Cards.module.scss';

const Cards = ({img, title, description}) => {
  return (
    <div className={styles.card}>
      <img src={img}/>
      <h5>{title}</h5>
      <p>{description}</p>
      <button>Ver mas</button>
    </div>
  )
}

export default Cards
