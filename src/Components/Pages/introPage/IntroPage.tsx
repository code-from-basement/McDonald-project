import React from "react";
import Styles from "./IntroPage.module.css";
import mahyarImage from "./../../../assets/Image/profileImage/mahyar-nafisi-profile-image.webp";
import roudabehImage from "./../../../assets/Image/profileImage/roudabeh-adnani-profile-image.webp";
import { useGlobalContext } from "../../Context/GlobalContext";

function IntroPage() {
  const { eventToggles, setEventToggles } = useGlobalContext();
  const { isIntroPageShow } = eventToggles;

  const onClickGoToMainWebsite = () => {
    setTimeout(() => {
      setEventToggles((PrevData: any) => {
        return { ...PrevData, isIntroPageShow: false };
      });
    }, 500);
  };

  return (
    <div className={Styles.introPage}>
      <section className={Styles.container}>
        <div className={Styles.card__header}>
          <h1>welcome</h1>
          <p>
            This website has been created with the primary goal of providing educational content and resources. It is designed to serve as a platform for learning and sharing knowledge in a specific domain. The content
            on this website is carefully curated and structured to provide valuable information, tutorials, and interactive exercises to help users enhance their understanding of the subject matter.
          </p>
        </div>
        <div className={Styles.card__body}>
          <div className={Styles.profile}>
            <div className={Styles.profile__image}>
              <img src={mahyarImage} alt="" />
            </div>
            <div className={Styles.profile__content}>
              <h2>Mahyar Nafisi</h2>
              <p>Full Stack Javascript developer, how like to learn more enjoying to work in team.</p>
              <em>React, Node JS, Express JS, TS and JS</em>
            </div>
          </div>
          <div className={Styles.profile}>
            <div className={Styles.profile__image}>
              <img src={roudabehImage} alt="" />
            </div>
            <div className={Styles.profile__content}>
              <h2>Roudabeh Adnani</h2>
              <p>Software developer, how like to learn more enjoying to work in team.</p>
              <em>React, Java, TS and JS</em>
            </div>
          </div>
        </div>
        <div className={Styles.card__footer}>
          <button onClick={onClickGoToMainWebsite} name="navigate to main website" className={Styles.footer__btn}>
            To the website
          </button>
        </div>
      </section>
    </div>
  );
}

export default IntroPage;
