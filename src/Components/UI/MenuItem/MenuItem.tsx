import { useState } from "react";
import { FavoriteBorderRoundedIcon, FavoriteRoundedIcon, InfoOutlinedIcon } from "./../IconsLibrary/IconsLibrary";
import AddToOverlay from "./AddToOverlay/AddToOverlay";
import Styles from "./MenuItem.module.css";
import { useGlobalContext } from "../../Context/GlobalContext";

function MenuItem({ item }: any) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAddonOverlay, setShowAddonOverlay] = useState(false);
  const { title, price, image } = item;

  const FavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };
  const onCLickShowAddOnOverlay = () => {
    setShowAddonOverlay(!showAddonOverlay);
  };

  console.log(showAddonOverlay);
  return (
    <div className={Styles.menuItem}>
      {showAddonOverlay && <AddToOverlay item={item} />}
      <div className={Styles.menuItem__card} onClick={onCLickShowAddOnOverlay}>
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
