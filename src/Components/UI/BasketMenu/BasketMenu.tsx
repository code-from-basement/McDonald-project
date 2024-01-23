import { motion } from "framer-motion";
import { useGlobalContext } from "../../Context/GlobalContext";
import { basketMenuAnimationStyles } from "../Animation/AnimationStyles";
import { DeleteRoundedIcon, NavigateNextRoundedIcon } from "../IconsLibrary/IconsLibrary";
import Styles from "./BasketMenu.module.css";
import EmptyCart from "./EmptyCart/EmptyCart";
import { useEffect, useState } from "react";

function BasketMenu() {
  const { eventToggles, basketList, setBasketList } = useGlobalContext();
  const { itemQtyNum, setItemQtyNum } = useState();
  const { togglerFunc, isBasketEmpty } = eventToggles;

  const onClickRemoveItemHandler = (id: number) => {
    setBasketList((prevData: any) => {
      return prevData.filter((item: any) => item.id !== id);
    });
  };

  const onChangeItemQty = (e, id) => {
    if (e.target.value >= 1) {
      setBasketList((prevData) => {
        return prevData.map((item) => (item.id === id ? { ...item, qty: e.target.value } : item));
      });
    }
    return;
  };

  return (
    <motion.div {...basketMenuAnimationStyles} className={Styles.basketMenu}>
      <button onClick={() => togglerFunc("isBasketShow", !eventToggles.isBasketShow)} className={Styles.btn__close}>
        <NavigateNextRoundedIcon />
      </button>
      <h2 className={Styles.basketMenu__title}>Order List:</h2>
      {isBasketEmpty && <EmptyCart />}
      {!isBasketEmpty && (
        <div className={Styles.basketListContainer}>
          <ul className={Styles.basketList}>
            {basketList?.map((item: any) => {
              const { id, title, price, image, qty } = item;
              return (
                <li className={Styles.basketItem} key={id}>
                  <div className={Styles.basketItem__sideLeft}>
                    <img src={image} alt={title} />
                  </div>
                  <div className={Styles.basketItem__main}>
                    <h2>
                      {qty} x {title}
                    </h2>
                  </div>
                  <div className={Styles.basketItem__sideRight}>
                    <h2>{price * qty} Kr</h2>
                    <input
                      className={Styles.input__qty}
                      type="number"
                      value={itemQtyNum}
                      onChange={(e) => onChangeItemQty(e, id)}
                      placeholder={item.qty}
                    />
                    <button className={Styles.btn__delete} onClick={() => onClickRemoveItemHandler(id)}>
                      <DeleteRoundedIcon />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </motion.div>
  );
}

export default BasketMenu;
