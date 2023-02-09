
import React, { useEffect, useState } from "react";
import style from "./card.module.css";

function Card() {
  const [data, setData] = useState([]);
  async function getData() {
    let res = await fetch(`https://fakestoreapi.com/products`);
    let data = await res.json();
    // console.log(data)
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={style.card_grid}>
      {data.map((e) => {
        return (
          <div className={style.card_box}>
            <input className={style.card_checkbox} type='checkbox'/>
            <img src={e.image} alt={e.title} />
            <h2>{e.title.slice(0, 5)}</h2>
            <p>{e.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
