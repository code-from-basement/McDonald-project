import Styles from "./MenuItem.module.css";
import macIcon from "../../../assets/Image/Icon/macdonaldPNG.png";

function MenuItem({ item }: any) {
  const { title, price, image } = item;
  return (
    <div className={Styles.menuItem}>
      <img className={Styles.menuItemMacLogo} src={macIcon} alt="mac icon" />
      <div className={Styles.menuItem__header}></div>
      <div className={Styles.menuItem__body}>
        <img className={Styles.menuItem__image} src={image} alt={title} />
      </div>
      <div className={Styles.menuItem__footer}>
        <h1 className={Styles.menuItem__title}>{title}</h1>
        <h2 className={Styles.menuItem__price}>{price}:-</h2>
      </div>
    </div>
  );
}

export default MenuItem;
