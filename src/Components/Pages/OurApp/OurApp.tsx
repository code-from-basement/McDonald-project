import React, { useEffect, useState } from "react";
import Styles from "./OurApp.module.css";
import { LocationOnIcon, SearchIcon } from "../../UI/IconsLibrary/IconsLibrary";
import cardWave from "../../../assets/UI/gooe.svg";
import logo from "../../../assets/UI/McD_GoldenArches_cropped.svg";
import Sun from "../../../assets/Image/Careers/benefits--wellbeing.png"
import Star from "../../../assets/Image/Careers/benefits--discounts.png"

function OurApp() {
  return (
    <div className={Styles.ourApp}>
      <div className={Styles.joinOurCrew}>
        <div className={Styles.joinOurCrew_leftContainer}>
          <h2>Join Our Crew</h2>
          <h4>at Maccas®</h4>
        </div>
        <div className={Styles.joinOurCrew_rightContainer}>
          <div className={Styles.joinOurCrew_rightContainer_card}>
            <h3>I'm looking for</h3>
            <div className={Styles.inputRow}>
              <span>
                <SearchIcon />
              </span>
              <input type="search" placeholder="Type to search" />
            </div>
            <h3>Positions near</h3>
            <div className={Styles.inputRow}>
              <span>
                <LocationOnIcon />
              </span>
              <input type="text" placeholder="Post Code or Suburb" />
            </div>
            <button onClick={() => {}}>Search Restaurant Opportunities</button>
          </div>
          <div className={Styles.imageContainer}>
            <img src={cardWave} alt="" />
          </div>
        </div>
      </div>
      <div className={Styles.logoContainer}>
        <img src={logo} alt="macDonald's logo" />
      </div>
      <div className={Styles.banner}></div>
      <div className={Styles.goldenArchesContainer}>
        <h2>WORKING AT THE GOLDEN ARCHES</h2>
        <div className={Styles.goldenArchesContainer_imageContainer}>
          <div className={Styles.goldenArchesContainer_imageContainer__image}></div>
          <div className={Styles.goldenArchesContainer_imageContainer__card}></div>
          <div className={Styles.goldenArchesContainer_imageContainer__cardAbove}>
            <h3>Benefits</h3>
            <p>We promote ‘5 Ways of Wellbeing’ in our restaurants, a wide range of benefits, and flexible ways of working that work for you.</p>
          </div>
        </div>
      </div>
      <div className={Styles.scrollPanelContainer}>
        <div className={Styles.scrollPanelContainer__left}>
          <button className={Styles.scrollPanelContainer__left_l1}>
            <img src={Sun} alt="a pic of sun"/>
            <h3>Wellbeing Program</h3>
          </button>
          <button className={Styles.scrollPanelContainer__left_l1}>
            <img src={Star} alt="a pic of star"/>
            <h3>Discounts at Major Retailers</h3>
          </button>
          <button className={Styles.scrollPanelContainer__left_l1}>
            <img src={Sun} alt="a pic of sun"/>
            <h3>Wellbeing Program</h3>
          </button>
          <button className={Styles.scrollPanelContainer__left_l1}>
            <img src={Sun} alt="a pic of sun"/>
            <h3>Wellbeing Program</h3>
          </button>
          <button className={Styles.scrollPanelContainer__left_l1}>
            <img src={Sun} alt="a pic of sun"/>
            <h3>Wellbeing Program</h3>
          </button>
          <button className={Styles.scrollPanelContainer__left_l1}>
            <img src={Sun} alt="a pic of sun"/>
            <h3>Wellbeing Program</h3>
          </button>

        </div>
        <div className={Styles.scrollPanelContainer__right}></div>


      </div>
    </div>
  );
}

export default OurApp;
