import React from "react";
import Styles from "./AboutOurFood.module.css";
import imageOfMan from "../../../assets/Image/panelWrapper/Food quality & sourcing2.png";
import iceCreamImg from "../../../assets/Image/panelWrapper/230329_Limehouse_DDB_McDonalds_McSundae_Table_Small_061_sticker_R9_2.png";
import imageOfWomen from "../../../assets/Image/panelWrapper/Jobs & inclusion3.png";
import imageOfBoy from "../../../assets/Image/panelWrapper/Community connection3_0.png";
import { motion } from "framer-motion";

function AboutOurFood() {
  return (
    <div className={Styles.aboutOurFood}>
      {/* <div className={Styles.bannerContainer}>
        <img src={banner} alt="Potato with the dark background" />
      </div> */}
      <div className={Styles.banner}></div>
      <div className={Styles.detailsContainer}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, cum dolores placeat itaque dolor quasi eaque quis labore sint nam veniam cupiditate at, reprehenderit voluptatibus a optio temporibus neque! Hic totam voluptatem
          quasi cum dolorem iusto similique libero dignissimos. Laboriosam enim sequi dolor dicta, explicabo distinctio consequatur, nesciunt repellat necessitatibus minus, quisquam officia ex iste ut ratione debitis cumque rerum voluptates
          fugit unde? Nisi laboriosam blanditiis expedita voluptatem magni est, voluptates voluptate doloribus libero! In, veniam sunt! Consectetur distinctio quasi, assumenda nemo odit explicabo eaque eum ex a recusandae ea. Quam quisquam
          eveniet eaque necessitatibus aspernatur quaerat. Hic magni sint laborum natus rem fugiat expedita quos quasi consequatur earum architecto nesciunt, iusto labore, unde eos recusandae quis deleniti eum magnam officiis dolores?
          Officia velit, nisi corporis perspiciatis in, at temporibus doloribus, suscipit quisquam explicabo dolore accusantium! Aut, modi molestias recusandae pariatur, quis reiciendis excepturi voluptatem fugiat dignissimos minima odio
          quo.
        </p>
      </div>
      <div className={Styles.panelWrapper}>
        <div className={Styles.row1}>
          <div className={Styles.imageContainerOdd}>
            <img src={imageOfMan} alt="a farmer man" />
          </div>
          <div className={Styles.cardContainerOdd}>
            <motion.div className={Styles.card} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}></motion.div>
          </div>
        </div>
        <div className={Styles.row1}>
          <div className={Styles.cardContainerEven}>
            <motion.div className={Styles.card} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}></motion.div>
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
            <motion.div className={Styles.card} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}></motion.div>
          </div>
        </div>
        <div className={Styles.row1}>
          <div className={Styles.cardContainerEven}>
            <motion.div className={Styles.card} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}></motion.div>
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
