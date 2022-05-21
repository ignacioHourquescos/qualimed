import React from 'react'
import styles from './Cards.module.scss';
import Link  from "next/link";

const Cards = ({img, title, description}) => {
  return (
    <div className={styles.card}>
      <img src={img}/>
      <h5>{title}</h5>
      <p>{description}</p>
          <Link href="../productDesc/slug" passHref prefetch={ false}>
            <button>Ver mas</button>
          </Link>
    </div>
  )
}

export default Cards
