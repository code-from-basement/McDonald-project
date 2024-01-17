import { useState } from "react";
import { FavoriteBorderRoundedIcon, FavoriteRoundedIcon, InfoOutlinedIcon } from "./../IconsLibrary/IconsLibrary";
import AddToOverlay from "./AddToOverlay/AddToOverlay";
import Styles from "./MenuItem.module.css";

function MenuItem({ item }: any) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { title, price, image } = item;

  const FavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={Styles.menuItem}>
      {/* <div style={{ width: "100%", height: "100%", backgroundColor: "transparent", top: "0", left: "0", position: "absolute", zIndex: "900" }}>helo</div> */}
      <AddToOverlay item={item} />
      <div className={Styles.menuItem__card}>
        <div className={Styles.menuItem__header}>
          <button>
            <InfoOutlinedIcon />
          </button>
          <button onClick={FavoriteToggle}>{isFavorite ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}</button>
        </div>
        <div className={Styles.menuItem__body}>
          <img className={Styles.menuItem__image} src={image} alt={title} />
        </div>
        <div className={Styles.menuItem__footer}>
          <h1 className={Styles.menuItem__title}>{title}</h1>
          <h2 className={Styles.menuItem__price}>{price}:-</h2>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
