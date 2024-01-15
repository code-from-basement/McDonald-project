import Styles from "./MenuItem.module.css";
import { InfoOutlinedIcon, FavoriteBorderRoundedIcon, FavoriteRoundedIcon } from "./../IconsLibrary/IconsLibrary";
import { useState } from "react";

function MenuItem({ item }: any) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { title, price, image } = item;

  const FavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={Styles.menuItem}>
      <div className={Styles.menuItem__header}>
        <button>
          <InfoOutlinedIcon />
        </button>
        <button onClick={FavoriteToggle}>{isFavorite ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}</button>
      </div>
      <div className={Styles.menuItem__body}>
        <img className={Styles.menuItem__image} src={image} alt={title} loading="lazy" />
      </div>
      <div className={Styles.menuItem__footer}>
        <h1 className={Styles.menuItem__title}>{title}</h1>
        <h2 className={Styles.menuItem__price}>{price}:-</h2>
      </div>
    </div>
  );
}

export default MenuItem;
