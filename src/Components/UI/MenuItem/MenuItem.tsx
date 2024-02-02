import { useNavigate } from "react-router-dom";
import { AddRoundedIcon, FavoriteBorderRoundedIcon, InfoOutlinedIcon, RemoveRoundedIcon } from "./../IconsLibrary/IconsLibrary";
import Styles from "./MenuItem.module.css";

function MenuItem({ item }: any) {
  const navigate = useNavigate();
  const { title, price, image, id, nutrition } = item;

  const onClickNavigation = () => {
    navigate(`/${title}`);
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
            <button>
              <RemoveRoundedIcon />
            </button>
            <input type="number" max="2" />
            <button>
              <AddRoundedIcon />
            </button>
          </div>
          <div className={Styles.addBtn}>
            <button>
              <AddRoundedIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
