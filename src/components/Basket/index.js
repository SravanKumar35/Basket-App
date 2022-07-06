import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./styles.module.scss";
import Item from "../Item";

const Basket = ({ data, setBasket }) => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <div className={styles.left}>
          <ShoppingBasketIcon />
          <span>Basket</span>
        </div>
        <div className={styles.right}>
          <DeleteIcon
            onClick={() => {
              setBasket({});
            }}
          />
        </div>
      </div>
      <div>
        {Object.keys(data).map((item, index) => {
          return (
            <Item
              key={index}
              name={item}
              type="basket"
              count={data[item].count}
              handleClick={() => {
                let temp = { ...data[item] };
                if (temp.count > 1) {
                  setBasket({
                    ...data,
                    [item]: {
                      ...data[item],
                      count: data[item].count - 1,
                    },
                  });
                } else {
                  delete data[item];
                  setBasket({ ...data });
                }
              }}
              deleteBasketItem={() => {
                delete data[item];
                setBasket({ ...data });
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Basket;
