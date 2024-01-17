import { useState } from "react";
import { AddRoundedIcon, NavigateNextRoundedIcon } from "../../IconsLibrary/IconsLibrary";
import Styles from "./AddToOverlay.module.css";
import QuantitySelector from "./QuantitySelector/QuantitySelector";

function AddToOverlay({ item }: any) {
  const [showQtySelector, setShowQtySelector] = useState(false);
  const { title, price } = item;

  const onCLickShowQtySelector = () => {
    setShowQtySelector(!showQtySelector);
  };

  return (
    <div className={Styles.addToOverlay}>
      <button className={Styles.btn__qty} onClick={onCLickShowQtySelector}>
        <h2>1</h2>
        <NavigateNextRoundedIcon />
      </button>
      <button className={Styles.btn__addOn} name={title} onClick={(e) => console.log(e.target)}>
        <AddRoundedIcon />
        <h2>{`${price}:-`}</h2>
      </button>

      {showQtySelector && <QuantitySelector />}
    </div>
  );
}

export default AddToOverlay;
