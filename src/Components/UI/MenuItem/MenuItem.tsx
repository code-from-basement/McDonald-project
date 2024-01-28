import { AddRoundedIcon, FavoriteBorderRoundedIcon, InfoOutlinedIcon, RemoveRoundedIcon } from "./../IconsLibrary/IconsLibrary";
import Styles from "./MenuItem.module.css";

function MenuItem({ item }: any) {
  const { title, price, image, id, nutrition } = item;
  const titleMod = title.replace("®", "");
  console.log(titleMod);

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
            <h2>{price}Kr</h2>
            <button>
              <FavoriteBorderRoundedIcon />
            </button>
            <button>
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
