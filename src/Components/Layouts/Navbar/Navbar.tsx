import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Image/Icon/macdonaldPNG.png";
import { useGlobalContext } from "../../Context/GlobalContext";
import { AccountCircleIcon, LocalMallOutlinedIcon } from "../../UI/IconsLibrary/IconsLibrary";
import { KeyboardArrowDownRoundedIcon } from "./../../UI/IconsLibrary/IconsLibrary";
import Styles from "./Navbar.module.css";
function Navbar() {
  const activeClass = ({ isActive, isPending }: any) => {
    return isPending ? Styles.pending : isActive ? Styles.active : "";
  };
  const { eventToggles, basketList }: any = useGlobalContext();
  const { togglerFunc, megaMenuOpen } = eventToggles;

  return (
    <nav className={Styles.navbar} id="navbar">
      <div className={Styles.leftContainer}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className={Styles.pagesContainer}>
          <button onClick={() => togglerFunc("megaMenuOpen", !eventToggles.megaMenuOpen)} className={megaMenuOpen ? `${Styles.activeMenu}` : ""}>
            Our Menu <KeyboardArrowDownRoundedIcon />
          </button>
          <NavLink to="/aboutourfood" className={activeClass}>
            About Our Food
          </NavLink>
          <NavLink to="/ourapp" className={activeClass}>
            Our App
          </NavLink>
          <NavLink to="/trendingnow" className={activeClass}>
            Trending Now
          </NavLink>
        </div>
      </div>
      <div className={Styles.rightContainer}>
        <Link to="/login" className={Styles.userContainer}>
          <AccountCircleIcon />
        </Link>
        <button onClick={() => togglerFunc("isBasketShow", !eventToggles.isBasketShow)} className={Styles.shoppingContainer}>
          <span className={Styles.basketNum}>{basketList.length}</span>
          <LocalMallOutlinedIcon />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
