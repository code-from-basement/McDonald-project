import React from 'react'
import Styles from './TrendingNow.module.css'
import deluxe from "../../../assets/Image/Trending/otherPic/Trending-Aussie-Angus-Deluxe-Right-2024-0110.png"
import macCrispy from '../../../assets/Image/Trending/otherPic/Trending-McCrispy-Bacon-Deluxe-Left-2023-1113.png'
import macSauce from "../../../assets/Image/Trending/otherPic/big-mac-sauce-uae-en.png"
import macJr from "../../../assets/Image/Trending/otherPic/mac-jr-en-uae.png"
import grandMac from "../../../assets/Image/Trending/otherPic/grand-mac-en-uae.png"




function TrendingNow() {
  return (
    <div className={Styles.trendingNow}>
      <h1>Trending Now</h1>
      <div className={Styles.banner}></div>
      <div className={Styles.macContainer}>
        <div className={Styles.macContainer_left}>
          <img src={macCrispy} alt='A pic of McCrispy hamburger' />
          <h3>McCrispy® Bacon Deluxe</h3>
          <div className={Styles.macContainer_link}>
            <a href="#">Learn more</a>
          </div>
        </div>
        <div className={Styles.macContainer_right}>
          <img src={deluxe} alt='A pic of Aussie Angus Deluxe hamburger' />
          <h3>Aussie Angus Deluxe</h3>
          <div className={Styles.macContainer_link} >
            <a href="#">Learn more</a>
          </div>
        </div>        
      </div>
      <div className={Styles.looseMenu}>
        <div className={Styles.looseMenu_container}>
          <h3>Loose Change Menu</h3>
          <div className={Styles.looseMenu_container__boxes}>
            <div className={Styles.smallBox}>
              <img src={macSauce} alt='A pic of big mac sauce.'/>
              <h3>App Exclusive</h3>
              <p>The iconic taste is now available as a dip, the new limited time Big Mac Sauce! Add it to your order only on the McDonald’s App. </p>
              {/* <button>click here</button> */}
            </div>
            <div className={Styles.smallBox}>
              <img src={grandMac} alt='A pic of grand Mac.'/>
              <h3>App Exclusive</h3>
              <p>More beef, more cheese, more sauce… Order the new limited time Grand Big Mac! </p>
              {/* <button>click here</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.looseMenuDown}>
        <div className={Styles.looseMenu_container}>
            <div className={Styles.smallBox}>
              <img src={macJr} alt='A pic of mac Jr.'/>
              <h3>App Exclusive</h3>
              <p>All the flavor… one less layer! Introducing the new limited time Mac Jr. </p>
              {/* <button>click here</button> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingNow