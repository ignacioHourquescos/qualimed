import React from "react";
import styles from "./Cards.module.scss";
import Link from "next/link";

const Cards = ({imageUrl, title, description, id}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl}/>
      <h5>{title}</h5>
      <p>{description.slice(0, 50)}...</p>
          <Link as={`/productDesc/${title}`} href="/productDesc/[id]" >
            <button type='submit'>Ver mas</button>
          </Link>
    </div>
  )
}

export default Cards;
