import React from "react";

import Basket from "../Basket";
import Groceries from "../Groceries";
import Header from "../Header";
import { useHooks } from "./hooks";
import styles from "./styles.module.scss";

const Home = () => {
  const { groceries, basket, setBasket } = useHooks();
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.body}>
        <Groceries data={groceries} basket={basket} setBasket={setBasket} />
        <Basket data={basket} setBasket={setBasket} />
      </div>
    </div>
  );
};

export default Home;
