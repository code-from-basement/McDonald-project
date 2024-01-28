import React from 'react'
import Styles from './TrendingNow.module.css'
import deluxe from "../../../assets/Image/Trending/otherPic/Trending-Aussie-Angus-Deluxe-Right-2024-0110.png"
import macCrispy from '../../../assets/Image/Trending/otherPic/Trending-McCrispy-Bacon-Deluxe-Left-2023-1113.png'
import macSauce from "../../../assets/Image/Trending/otherPic/big-mac-sauce-uae-en.png"
import macJr from "../../../assets/Image/Trending/otherPic/mac-jr-en-uae.png"
import grandMac from "../../../assets/Image/Trending/otherPic/grand-mac-en-uae.png"
import familyMenuImg from "../../../assets/Image/Trending/otherPic/Trending_FamilyMenu_v004.png"
import confettiImg from "../../../assets/Image/Trending/otherPic/pieces4.svg"
import { NavigateNextRoundedIcon } from '../../UI/IconsLibrary/IconsLibrary'
import { ButtonPrimary } from '../../UI/Buttons/Buttons'
import {motion} from "framer-motion"
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'; 


function TrendingNow() {
  const { width, height }= useWindowSize();

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
      <div className={Styles.familyMenuContainer}>
        <Confetti width={width} height={height} numberOfPieces={190} tweenDuration={9000}
          colors={["#ffbc03","#ffd76a","#ffebb4","#ba2318","#f8d0cd","#f0908a","#7abf95","#c6e4d1","#e33225","#fff3d2","#fdefee","#ffcb3d"]}
          gravity={0.09} style={{position: 'absolute', top:1720, left: 0}}  />
        <h2>Family menu</h2>
        <img src={familyMenuImg} alt='mac box food'/>
        <h3>Happy Meal® menu</h3>
        <p>Kids love a treat. So it’s good to know there’s a menu just for them.</p>
        <div className={Styles.familyMenuContainer_link}>
          <a href='#'>Explore Happy Meal</a>
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
              <button className={Styles.btn_order}>
                <div className={Styles.btn_order__icon}>
                  <NavigateNextRoundedIcon />
                </div>
                <div className={Styles.btn_order__text}>
                  Order now
                </div>
              </button>
            </div>
            <div className={Styles.smallBox}>
              <img src={grandMac} alt='A pic of grand Mac.'/>
              <h3>App Exclusive</h3>
              <p>More beef, more cheese, more sauce… Order the new limited time Grand Big Mac! </p>
              <button className={Styles.btn_order}>
                <div className={Styles.btn_order__icon}>
                  <NavigateNextRoundedIcon />
                </div>
                <div className={Styles.btn_order__text}>
                  Order now
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.looseMenuDown}>
        <div className={Styles.looseMenu_container}>
        <div className={Styles.looseMenu_container__boxes}>
            <div className={Styles.smallBox}>
              <img src={macJr} alt='A pic of mac Jr.'/>
              <h3>App Exclusive</h3>
              <p>All the flavor… one less layer! Introducing the new limited time Mac Jr. </p>
              <button className={Styles.btn_order}>
                <div className={Styles.btn_order__icon}>
                  <NavigateNextRoundedIcon />
                </div>
                <div className={Styles.btn_order__text}>
                  Order now
                </div>
              </button>
            </div>
            <motion.div className={Styles.smallBox_textContainer}
              initial={{x: 300}}
              whileInView={{
                        x: -20,
                        transition:{
                          duration: 3,
                          type: "spring",
                          bounce: 0.6
                        }
                      }}
              // viewport={{
              //   once: true,
              // }}
              // animate={{
              //           x: -20,
              //           transition:{                         
              //             duration: 3,
              //             type: "spring",
              //             bounce: 0.5
              //           }
              //         }}
            >
              <h3>Enjoy your meal</h3>
              <ButtonPrimary type="" onClick={() => {}}>
                  Order now <NavigateNextRoundedIcon />
              </ButtonPrimary>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingNow