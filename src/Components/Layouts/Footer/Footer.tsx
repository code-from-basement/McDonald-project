import { Link } from "react-router-dom";
import Styles from "./Footer.module.css";
import React from "react";
import AppStoreImg from "../../../assets/Image/footerImages/app-store.png";
import GooglePlayImg from "../../../assets/Image/footerImages/google-play.png";
import { FacebookRoundedIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from "../../UI/IconsLibrary/IconsLibrary";

const year = new Date().getFullYear();

function Footer() {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footerContainer}>
        <div className={Styles.footer__nav_section}>
          <div className={Styles.footer__nav_box}>
            <h2>
              i'm lovin' it<span>®</span>
            </h2>
          </div>
          <div className={Styles.footer__nav_box}>
            <div className={Styles.footer__nav_box_title}>
              <p>Our Company</p>
              <ul>
                <li>
                  <Link to="/">Our Company</Link>
                </li>
                <li>
                  <Link to="/">Our Community</Link>
                </li>
                <li>
                  <Link to="/">Our History</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={Styles.footer__nav_box}>
            <div className={Styles.footer__nav_box_title}>
              <p>Careers</p>
              <ul>
                <li>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <Link to="/">Training and Education</Link>
                </li>
                <li>
                  <Link to="/">Apply Now</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={Styles.footer__nav_box}>
            <div className={Styles.footer__nav_box_title}>
              <p>Contact Us</p>
              <ul>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={Styles.footer__nav_box}>
            <div className={Styles.footer__nav_box_title}>
              <p>Newsroom</p>
              <ul>
                <li>
                  <Link to="/">Newsroom</Link>
                </li>
                <li>
                  <Link to="/">Local</Link>
                </li>
                <li>
                  <Link to="/">Regional</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={Styles.footer__promotion}>
          <div className={Styles.footer__promotion_social}>
            <Link to="">
              <FacebookRoundedIcon />
            </Link>
            <Link to="">
              <TwitterIcon />
            </Link>
            <Link to="">
              <InstagramIcon />
            </Link>
            <Link to="">
              <YouTubeIcon />
            </Link>
          </div>
          <div className={Styles.footer__promotion_apps}>
            <img src={AppStoreImg} alt="app-store-logo" />
            <img src={GooglePlayImg} alt="google-play-logo" />
            {/* <p>Apple and the Apple logo are trade marks of Apple Inc., registered in the U.S.
               and other countries. App Store is a service mark of Apple Inc.,
                registered in the U.S. and other countries. Google Play and the Google Play logo are
                 trade marks of Google LLC.
            </p> */}
          </div>
        </div>
        <hr />
        <div className={Styles.footer__legal}>
          <div className={Styles.footer__legal_links}>
            <Link to="/countryselector">Country Selector</Link>
            <Link to="/contactus">Contact us</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
          </div>
          <div className={Styles.footer__legal_copyright}>
            <img src="src/assets//Image//Icon//macdonaldPNG.png" alt="logo" />
            <p className={Styles.copyright}>{`© ${year} McDonald's. All Rights Reserved`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
