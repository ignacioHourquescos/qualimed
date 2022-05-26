import React from "react";
import styles from "./Cards.module.scss";
import Link from "next/link";

const Cards = ({img, title, description, id}) => {
  return (
    <div className={styles.card}>
      <img src={img}/>
      <h5>{title}</h5>
      <p>{description.slice(0, 50)}...</p>
          <Link as={`/productDesc/${title}`} href="/productDesc/[id]" >
            <button>Ver mas</button>
          </Link>
    </div>
  )
}

