import React, {useState } from "react";
import Styles from "./AboutOurFood.module.css";
import imageOfMan from "../../../assets/Image/panelWrapper/Food quality & sourcing2.png";
import iceCreamImg from "../../../assets/Image/panelWrapper/230329_Limehouse_DDB_McDonalds_McSundae_Table_Small_061_sticker_R9_2.png";
import imageOfWomen from "../../../assets/Image/panelWrapper/Jobs & inclusion3.png";
import imageOfBoy from "../../../assets/Image/panelWrapper/Community connection3_0.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function AboutOurFood() {

  const [loading, setLoading] = useState(false);
  const onStart = () => {setLoading(true)};
  const onEnd = () => {setLoading(false)};
  const containerProps = {
    'aria-busy': loading
  };

  return (
    <div className={Styles.aboutOurFood}>
      <div className={Styles.banner}></div>
      <div className={Styles.detailsContainer}>
        <div className={Styles.detailsContainer_counter}>
          <h2>Our Impact</h2>
          <div className={Styles.counter}>
            <div className={Styles.counter_items}>
              <p>Restaurant</p>
              <CountUp onStart={onStart} onEnd={onEnd} containerProps={containerProps}  end={1020} duration={3} suffix="+" />
            </div>
            <div className={Styles.counter_items}>
              <p>Licensees</p>
              <CountUp onStart={onStart} onEnd={onEnd} containerProps={containerProps}  end={200} duration={3.5} delay={0.1} suffix="+" />
            </div>
            <div className={Styles.counter_items}>
              <p>Employees</p>
              <CountUp onStart={onStart} onEnd={onEnd} containerProps={containerProps}  end={110000} duration={3} delay={0.2} suffix="+" />
            </div>
          </div>          
        </div>
        <div className={Styles.detailsContainer_content}>
          <p>
            We’ve been a part of Australian communities for more than 50 years, serving great quality,
            great value food and creating feel-good Macca’s moments for our people, customers and communities.
          </p>
          <p>
            We know we have a responsibility and opportunity to drive positive outcomes from the farm to the front counter and beyond,
            in the areas that matter most to our customers, employees, suppliers, franchisees and communities.
          </p>
          <p>
            Changing for the better? We’re On It.
          </p>
        </div>
      </div>     
      <div className={Styles.panelWrapper}>
        <div className={Styles.row1}>
          <div className={Styles.imageContainerOdd}>
            <img src={imageOfMan} alt="a farmer man" />
          </div>
          <div className={Styles.cardContainerOdd}>
            <motion.div className={Styles.card} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className={Styles.card_content}>
                <h3>Food quality and sourcing</h3>
                <p>McDonald’s has been purchasing fresh produce, ingredients, and products from Aussie farmers
                   and suppliers for more than 50 years, serving up a homegrown menu, wherever possible.
                </p>
                <div className={Styles.card_content_link}>
                  <a href="#">Explore more</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className={Styles.row1}>
          <div className={Styles.cardContainerEven}>
            <motion.div className={Styles.card} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className={Styles.card_content}>
                    <h3>Our planet</h3>
                    <p>We are doing our part to protect the planet for communities today and into the future: from minimising how much plastic we use in our packaging, to driving climate action and partnering to advance sustainable agriculture.
                    </p>
                    <div className={Styles.card_content_link}>
                      <a href="#">Explore more</a>
                    </div>
                </div>
            </motion.div>
          </div>
          <div className={Styles.imageContainerEven}>
            <img src={iceCreamImg} alt="an ice cream" />
          </div>
        </div>
        <div className={Styles.row1}>
          <div className={Styles.imageContainerOdd}>
            <img src={imageOfBoy} alt="a happy boy" />
          </div>
          <div className={Styles.cardContainerOdd}>
            <motion.div className={Styles.card} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className={Styles.card_content}>
                  <h3>Community connection</h3>
                  <p>We are committed to playing an active role in local communities through providing jobs,
                    supporting local charities and sporting clubs, and contributing in times of need.
                  </p>
                  <div className={Styles.card_content_link}>
                    <a href="#">Explore more</a>
                  </div>
              </div> 
            </motion.div>
          </div>
        </div>
        <div className={Styles.row1}>
          <div className={Styles.cardContainerEven}>
            <motion.div className={Styles.card} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className={Styles.card_content}>
                    <h3>Jobs, inclusion & empowerment</h3>
                    <p>As one of the largest employers in Australia, we are serving up bright futures for our people by offering a supportive and inclusive working environment and world-class training programs.
                    </p>
                    <div className={Styles.card_content_link}>
                      <a href="#">Explore more</a>
                    </div>
              </div> 
            </motion.div>
          </div>
          <div className={Styles.imageContainerEven}>
            <img src={imageOfWomen} alt="two women at macDonald " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOurFood;
