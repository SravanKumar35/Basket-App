import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./styles.module.scss";
import { useHooks } from "./hooks";

const Item = ({ name, type, count, handleClick, deleteBasketItem }) => {
  const { isHover, handleHover } = useHooks();
  return (
    <div
      className={styles.main}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className={styles.left}>
        {type === "grocery" ? (
          <AddBoxIcon
            className={styles.addIcon}
            sx={{ color: isHover ? "#00838d" : "white" }}
            onClick={handleClick}
          />
        ) : (
          <RemoveCircleIcon
            className={styles.removeIcon}
            sx={{ color: isHover ? "red" : "white" }}
            onClick={handleClick}
          />
        )}
        {type === "basket" && <span className={styles.count}>{count}</span>}
        <span>{name}</span>
      </div>
      {type === "basket" && (
        <div className={styles.delete}>
          <DeleteIcon onClick={deleteBasketItem} />
        </div>
      )}
    </div>
  );
};

export default Item;
