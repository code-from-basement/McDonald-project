import React from 'react'
import Styles from './TrendingNow.module.css'
import deluxe from "../../../assets/Image/Trending/otherPic/Trending-Aussie-Angus-Deluxe-Right-2024-0110.png"
import macCrispy from '../../../assets/Image/Trending/otherPic/Trending-McCrispy-Bacon-Deluxe-Left-2023-1113.png'

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
    </div>
  )
}

export default TrendingNow