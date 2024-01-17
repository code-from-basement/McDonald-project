import { AddRoundedIcon } from "../../IconsLibrary/IconsLibrary";
import Styles from "./AddToOverlay.module.css";

function AddToOverlay({ item }) {
  const { title, price, image } = item;
  return (
    <div className={Styles.addToOverlay}>
      <div className={Styles.btn__qty}>
        <span>1</span>
      </div>
      <div className={Styles.btn__addOn}>
        <div className={Styles.icon}>
          <span>
            <AddRoundedIcon />
          </span>
          <span>Add On</span>
        </div>
        <div className={Styles.price}>
          <h2>{`${price}:-`}</h2>
        </div>
      </div>
      {/* <QuantitySelector /> */}
    </div>
  );
}

export default AddToOverlay;
