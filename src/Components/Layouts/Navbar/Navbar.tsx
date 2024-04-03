import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/Image/Icon/macdonaldPNG.png";
import { useGlobalContext } from "../../Context/GlobalContext";
import { AccountCircleIcon, LocalMallOutlinedIcon, FavoriteBorderRoundedIcon } from "../../UI/IconsLibrary/IconsLibrary";
import { KeyboardArrowDownRoundedIcon, FavoriteRoundedIcon } from "./../../UI/IconsLibrary/IconsLibrary";

import Styles from "./Navbar.module.css";
import { useEffect } from "react";
import { dataBase } from "../../../Data/firebaseConfig";

function Navbar() {
  const { userFavoriteList } = useGlobalContext();
  // location from react-router-dom
  let location = useLocation();

  // logged in user data

  // hide navbar when login page is shown
  useEffect(() => {
    const loginIsShow = location.pathname === "/login";
    const navbarElement = document.querySelector("#navbar");
    if (!loginIsShow) {
      navbarElement?.classList.remove(Styles.hideNavbar);
    } else {
      navbarElement?.classList.add(Styles.hideNavbar);
    }
  }, [location.pathname]);

  // active class for navlink
  const activeClass = ({ isActive, isPending }: any) => {
    return isPending ? Styles.pending : isActive ? Styles.active : "";
  };

  // eventToggles and basketList from global context
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
          {dataBase.currentUser?.photoURL ? <img className={Styles.userPhoto} src={dataBase.currentUser.photoURL}></img> : <AccountCircleIcon />}
        </Link>
        <Link to="/favorite" className={Styles.favContainer}>
          {!userFavoriteList?.length ? <FavoriteBorderRoundedIcon /> : <FavoriteRoundedIcon style={{ color: "#da291c" }} />}
        </Link>
        <h5>{dataBase.currentUser?.displayName}</h5>
        <button onClick={() => togglerFunc("isBasketShow", !eventToggles.isBasketShow)} className={Styles.shoppingContainer}>
          <span className={Styles.basketNum}>{basketList.length}</span>
          <LocalMallOutlinedIcon />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
