import { motion } from "framer-motion";
import { useGlobalContext } from "../../Context/GlobalContext";
import { basketMenuAnimationStyles } from "../Animation/AnimationStyles";
import { DeleteRoundedIcon, NavigateNextRoundedIcon } from "../IconsLibrary/IconsLibrary";
import Styles from "./BasketMenu.module.css";
import EmptyCart from "./EmptyCart/EmptyCart";
import TotalSection from "./TotalSection/TotalSection";

function BasketMenu() {
  const { eventToggles, basketList, setBasketList } = useGlobalContext();
  const { togglerFunc, isBasketEmpty } = eventToggles;

  const onClickRemoveItemHandler = (_id: number) => {
    setBasketList((prevData: any) => {
      return prevData.filter((item: any) => item._id !== _id);
    });
  };

  const onChangeItemQty = (e, _id) => {
    if (e.target.value <= 10 && e.target.value > 0) {
      setBasketList((prevData: any) => {
        return prevData.map((item: any) => (item._id === _id ? { ...item, qty: e.target.value } : item));
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

      {!basketList.length && <EmptyCart />}
      {basketList.length && (
        <div className={Styles.basketListContainer}>
          <ul className={Styles.basketList}>
            {basketList?.map((item: any) => {
              const { _id, title, price, image, qty } = item;
              return (
                <li className={Styles.basketItem} key={_id}>
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
                    <input className={Styles.input__qty} type="number" max="10" min="1" value={item.qty} onChange={(e) => onChangeItemQty(e, _id)} />
                    <button className={Styles.btn__delete} onClick={() => onClickRemoveItemHandler(_id)}>
                      <DeleteRoundedIcon />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {basketList.length && (
        <div className={Styles.totalContainer}>
          <TotalSection />
        </div>
      )}
    </motion.div>
  );
}

export default BasketMenu;
