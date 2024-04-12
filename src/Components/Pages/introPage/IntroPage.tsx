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
            This website has been developed primarily to provide <b>educational content and skill's level</b>. It functions as a portfolio and showcase. The content has been gathered from McDonald's main website.
            However, it's important to note that this website is independent and not associated with McDonald's. It was created by <b>Mahyar Nafisi and Roudabeh Adnani </b> as a project showcase.
          </p>
        </div>
        <div className={Styles.card__body}>
          <div className={Styles.profile}>
            <div className={Styles.profile__image}>
              <img src={mahyarImage} alt="" />
            </div>
            <div className={Styles.profile__content}>
              <h2>Mahyar Nafisi</h2>
              <p>Full Stack Javascript developer, who enjoys learning and thrives in a team environment.</p>
              <em>React, Node JS, Express JS, TS and JS</em>
              <hr />
              <a href="mailto:mahyar.nafisi@gmail.com">mahyar.nafisi@gmail.com</a>
              <a href="tel:+46760779693">+46760779693</a>
            </div>
          </div>
          <div className={Styles.profile}>
            <div className={Styles.profile__image}>
              <img src={roudabehImage} alt="" />
            </div>
            <div className={Styles.profile__content}>
              <h2>Roudabeh Adnani</h2>
              <p>Full-stack developer, who enjoys developing and bringing ideas to life.</p>
              <em>React, Java, TS and JS</em>
              <hr />
              <a href="mailto:rodabeh.adnani@gamil.com">rodabeh.adnani@gmail.com</a>
              <a href="">+46764359935</a>
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