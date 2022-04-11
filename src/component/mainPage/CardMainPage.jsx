import React from "react";
import style from './mainPage.module.scss'
function CardMainPage({ name }) {
  return <div className={style.card}>{name}</div>;
}

export default CardMainPage;
