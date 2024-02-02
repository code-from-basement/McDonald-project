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

  const [{ qty }, dispatch] = useReducer(reducer, initialState);
  const onClickAddItemHandler = () => {
    if (basketList.length === 0) {
      setBasketList((prevData: any) => {
        return [...prevData, { id, image, title, price, qty }];
      });
    } else {
      const isItemInBasket = basketList.find((item: any) => item.title === title);
      if (!isItemInBasket) {
        setBasketList((prevData: any) => {
          return [...prevData, { id, image, title, price, qty }];
        });
      } else if(isItemInBasket) {
        const getItemQty = basketList.filter((item)=> item.title === title);
        console.log(getItemQty,"getItemQty")
        setBasketList((prevData: any)=>{
          return prevData.map((item:any)=>{return item.title === getItemQty[0].title ? {...item, qty:item.qty + qty} : item})
        });
        
      }
    }
  };

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
            <input type="number" value={qty} onChange={()=>{}} />
            <button onClick={() => dispatch({ type: "increment", payload: qty + 1 })}>
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