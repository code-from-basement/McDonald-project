import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/Image/Icon/macdonaldPNG.png";
import { useGlobalContext } from "../../Context/GlobalContext";
import { AccountCircleIcon, LocalMallOutlinedIcon } from "../../UI/IconsLibrary/IconsLibrary";
import { KeyboardArrowDownRoundedIcon } from "./../../UI/IconsLibrary/IconsLibrary";
import Styles from "./Navbar.module.css";
import { useEffect } from "react";
function Navbar() {
  let location = useLocation();
  const { loggedUser, setLoggedUser } = useGlobalContext();
  console.log(loggedUser, "from navbar");

  useEffect(() => {
    const loginIsShow = location.pathname === "/login";
    const navbarElement = document.querySelector("#navbar");
    if (!loginIsShow) {
      navbarElement?.classList.remove(Styles.hideNavbar);
    } else {
      navbarElement?.classList.add(Styles.hideNavbar);
    }
  }, [location.pathname]);

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
          {loggedUser?.photoURL ? <img className={Styles.userPhoto} src={loggedUser.photoURL}></img> : <AccountCircleIcon />}
        </Link>
        <h5>{loggedUser.displayName}</h5>
        <button onClick={() => togglerFunc("isBasketShow", !eventToggles.isBasketShow)} className={Styles.shoppingContainer}>
          <span className={Styles.basketNum}>{basketList.length}</span>
          <LocalMallOutlinedIcon />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
