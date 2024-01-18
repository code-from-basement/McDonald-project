import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FavoriteBorderRoundedIcon, FavoriteRoundedIcon, InfoOutlinedIcon } from "./../IconsLibrary/IconsLibrary";
import AddToOverlay from "./AddToOverlay/AddToOverlay";
import Styles from "./MenuItem.module.css";
import { Opacity } from "@mui/icons-material";

function MenuItem({ item }: any) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAddonOverlay, setShowAddonOverlay] = useState(false);
  const [productSelected, setProductSelected] = useState();
  const { title, price, image, id } = item;

  const FavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };
  //

  const overlayMasterSwitch = {
    switchFalse: () => {
      setShowAddonOverlay(false);
    },
    switchTrue: () => {
      setProductSelected(true);
    },
  };
  const onCLickShowAddOnOverlay = () => {
    setShowAddonOverlay(!showAddonOverlay);

    console.log("pass");
  };
  //
  console.log(productSelected);

  return (
    <motion.div className={Styles.menuItem} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }}>
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
    </motion.div>
  );
}

export default MenuItem;
