import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

import styles from "./styles.module.scss";
import Item from "../Item";

const Groceries = ({ data, basket, setBasket }) => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <LocalGroceryStoreIcon />
        <span>Groceries</span>
      </div>
      <div className={styles.list}>
        {data.map((item, index) => (
          <Item
            name={item}
            key={index}
            type="grocery"
            handleClick={() => {
              if (basket[item]) {
                let temp = basket[item];
                delete basket[item];
                temp.count++;
                setBasket({ ...basket, [item]: temp });
              } else {
                let newBasketItem = {
                  name: item,
                  count: 1,
                };
                setBasket({ ...basket, [item]: newBasketItem });
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Groceries;
