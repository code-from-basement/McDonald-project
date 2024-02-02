import { useNavigate } from "react-router-dom";
import { AddRoundedIcon, FavoriteBorderRoundedIcon, InfoOutlinedIcon, RemoveRoundedIcon } from "./../IconsLibrary/IconsLibrary";
import Styles from "./MenuItem.module.css";
import { useReducer } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";

const initialState = {
  qty: 1,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "increment":
      return { ...state, status: "incremented", qty: action.payload <= 10 ? action.payload : 10 };
    case "decrement":
      return { ...state, status: "decremented", qty: action.payload < 1 ? 1 : action.payload };
    default:
      throw new Error("Function not implemented.");
  }
};

function MenuItem({ item }: any) {
  const { setBasketList, basketList }: any = useGlobalContext();
  const navigate = useNavigate();
  const { title, price, image, id, nutrition } = item;

  const onClickNavigation = () => {
    navigate(`/${title}`);
  };
  const [{ qty, isAdded, isRemoved }, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className={Styles.menuItem}>
        <div className={Styles.menuItem__header}>
          <div className={Styles.header__title}>
            <h2>{title}</h2>
            <p>
              {nutrition.calories} kj - {nutrition.fat}g fat
            </p>
          </div>
          <div className={Styles.header__btn}>
            <h2>{price}:-</h2>
            <button>
              <FavoriteBorderRoundedIcon />
            </button>
            <button className={Styles.info__btn} onClick={onClickNavigation}>
              <InfoOutlinedIcon />
            </button>
          </div>
        </div>
        <div className={Styles.menuItem__body} style={{ backgroundImage: `url(${image})` }}></div>
        <div className={Styles.menuItem__footer}>
          <div className={Styles.qtySection}>
            <button
              onClick={() => {
                dispatch({ type: "decrement", payload: qty - 1 });
              }}
            >
              <RemoveRoundedIcon />
            </button>
            <input type="number" min="1" max="10" value={qty} />
            <button onClick={() => dispatch({ type: "increment", payload: qty + 1 > 10 ? 10 : qty + 1 })}>
              <AddRoundedIcon />
            </button>
          </div>
          <div className={Styles.addBtn}>
            <button onClick={onClickAddItemHandler}>
              <AddRoundedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
