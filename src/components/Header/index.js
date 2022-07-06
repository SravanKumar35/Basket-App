import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <ShoppingBasketIcon sx={{ fontSize: 80 }} />
      </div>
      <span>Hello, Basket</span>
    </div>
  );
};

export default Header;
