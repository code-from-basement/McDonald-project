import { motion, useScroll } from "framer-motion";
import Star from "../../../assets/Image/Careers/benefits--discounts.png";
import Direction from "../../../assets/Image/Careers/benefits--learning.png";
import Hamburger from "../../../assets/Image/Careers/benefits--meals.png";
import Line from "../../../assets/Image/Careers/benefits--reviews.png";
import Reward from "../../../assets/Image/Careers/benefits--reward.png";
import Clock from "../../../assets/Image/Careers/benefits--schedule.png";
import Piece from "../../../assets/Image/Careers/benefits--traineeships.png";
import Sun from "../../../assets/Image/Careers/benefits--wellbeing.png";
import logo from "../../../assets/UI/McD_GoldenArches_cropped.svg";
import cardWave from "../../../assets/UI/gooe.svg";
import guy from "../../../assets/Image/Careers/3-new.jpg";
import Hat from "../../../assets/Image/Careers/hat.png";
import People from "../../../assets/Image/Careers/5.jpg";
import ManPic from "../../../assets/Image/Careers/6.jpg";
import { ArrowForwardIosRoundedIcon, ExpandMoreRoundedIcon, LocationOnIcon, PauseIcon, SearchIcon } from "../../UI/IconsLibrary/IconsLibrary";
import Styles from "./OurApp.module.css";
import { animateBackground, animateFadeIn, animationTitleEffect, bannerOpacityMotion, floatImgAnimationStyle } from "../../UI/Animation/AnimationStyles";
import { useRef, useState } from "react";
import { useCollapse } from "react-collapsed";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CollapsedBar from "./CollapsedBar";

function OurApp() {
  const { scrollYProgress }: any = useScroll();
  const [selectedItem, setSelectedItem] = useState(null);

  //define array for collapsed bar items
  const collapsedItems = [
    {
      title: "Crew",
      id: 1,
      collapseDetail:
        "Crew provide an exceptional customer experience which includes delivering exceptional quality, service and cleanliness (QSC) to all guests. We understand that everyone should be able to work with their strengths, and at Macca’s®, we like to provide you with the opportunity to earn your money the way you want! So whether you like putting a smile on people’s dial, building delicious burgers, or making a mean macchiato, we have a role that will work for you! Crew are trained and verified to work in the Front Counter, Customer Areas, Kitchen, Drive-Thru or McCafe areas of the restaurant.",
    },
    {
      title: "Maintenance Person",
      id: 2,
      collapseDetail:
        "If you like working with your hands and looking after all the internal and external areas of the restaurant, the maintenance role is for you. You need to be organised, have a keen eye for cleanliness as you will be responsible for janitorial duties, cleaning restaurant equipment, minor maintenance responsibilities and maintaining the restaurant surrounds.",
    },
    {
      title: "Crew Coach",
      id: 3,
      collapseDetail:
        "Crew have the opportunity to develop and progress into the Crew Coach position. The Crew Coach provides guidance and direction to fellow Crew and utilises all policies and procedures to provide the best quality coaching, to ensure outstanding delivery of QSC, under the supervision of the Shift Manager.",
    },
    {
      title: "Shift ManagerCrew",
      id: 4,
      collapseDetail:
        "The first step in the McDonald’s management journey is to become a Shift Manager. Shift Managers are operations experts and run shifts delivering outstanding QSC at all times. Shift Managers supervise employees to ensure restaurant operations and procedures are adhered to and ensure the delivery of an exceptional and memorable Macca’s® experience.",
    },

    {
      title: "Department Manager & Assistant Restaurant Manager",
      id: 5,
      collapseDetail:
        "In addition to delivering outstanding QSC every shift, Department Managers and Assistant Restaurant Managers have an additional responsibility of leading a team as either a Customer Experience, People Performance or Product Quality Manager.",
    },
    {
      title: "Restaurant Manager",
      id: 6,
      collapseDetail:
        "The Restaurant Manager is the leader of the restaurant, and is responsible for the overall profitability, sales, people development and operations of the restaurant. The Restaurant Manager works closely with their management team to coordinate the functions and systems that are critical to business success.",
    },
  ];
  // swiper functionality for pause and stop
  const [swiperPaused, setSwiperPaused] = useState(false);
  const swiperRef = useRef(null);
  const toggleSwiper = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      if (swiper && swiperPaused) {
        swiper.autoplay.start();
      } else if (swiper) {
        swiper.autoplay.stop();
      }
      setSwiperPaused(!swiperPaused);
    }
  };

  //define items
  const items: any = [
    {
      id: 1,
      title: "Wellbeing Program",
      detail: "We promote the ‘5 Ways of Wellbeing’ in our restaurants as we recognise employee safety is a key priority.",
      image: Sun,
    },
    {
      id: 2,
      title: "Discounts at Major Retailers",
      detail: "Our MyBenefits program gives all employees product discounts from over 1000 retails (like JB HIFI, Woolworths and Myer).",
      image: Star,
    },
    {
      id: 3,
      title: "Traineeships",
      detail: "Check out the Traineeship tab for more information on how you can learn and earn.",
      image: Piece,
    },
    {
      id: 4,
      title: "Performance Reviews",
      detail: "We have a culture of continuous improvement, so feedback is critical and staying in touch with your Manager is key.      ",
      image: Line,
    },
    {
      id: 5,
      title: "Flexible Scheduling",
      detail: "We create opportunities for all employees to work flexibly in a way that is meaningful and fits into your lifestyle.      .",
      image: Clock,
    },
    {
      id: 6,
      title: "Rewards and Recognition",
      detail: "We appreciate our people and have a range of rewards to showcase employees.",
      image: Reward,
    },
    {
      id: 7,
      title: "Discounted Meals",
      detail: "Enjoy 20% off your Macca’s meal.",
      image: Hamburger,
    },
    {
      id: 8,
      title: "Learning and Development",
      detail: "You have the opportunity to grow and progress by learning transferable work and life skills.",
      image: Direction,
    },
  ];

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <div className={Styles.ourApp}>
      <motion.div className={Styles.progress} style={{ scaleX: scrollYProgress }} />
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
            <button onClick={() => {}} disabled>
              Search Restaurant Opportunities
            </button>
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
      <div className={Styles.maccasContainer}>
        <div className={Styles.maccasContainer__stickyColumn}></div>
        <div className={Styles.maccasContainer__upRow}>
          <div className={Styles.maccasContainer__upRow__left}>
            <h2>Working at Macca’s</h2>
            <p>
              We love nothing more than watching our employees grow. Did you know that a lot of our most successful Managers started their careers as Crew Members? You can do it too, and the best part is you get to earn while you learn! If
              you've got the appetite to succeed, we’ll give you the opportunity.
            </p>
            <div className={Styles.maccasContainer__button}>
              <button>
                Join our Crew
                <span>
                  <ArrowForwardIosRoundedIcon />
                </span>
              </button>
              <button>
                Search Corporate Careers
                <span>
                  <ArrowForwardIosRoundedIcon />
                </span>
              </button>
            </div>
          </div>
          <div className={Styles.maccasContainer__upRow__right}>
            <motion.div {...animateFadeIn}>
              <img src={guy} alt="a guy" />
            </motion.div>
            <div className={Styles.maccasContainer__upRow__right_sticky}></div>
          </div>
        </div>
        <div className={Styles.maccasContainer__downRow__container}>
          <div className={Styles.maccasContainer__downRow__container_left}>
            {collapsedItems.slice(0, 3).map((item: any) => {
              return <CollapsedBar item={item} key={item.id} />;
            })}
          </div>
          <div className={Styles.maccasContainer__downRow__container_right}>
            {collapsedItems.slice(3, 7).map((item: any) => {
              return <CollapsedBar item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
      <div className={Styles.ourJobs_container}>
        <div className={Styles.ourJobs_container_left}>
          <div className={Styles.ourJobs_container_left_box}>
            <Swiper
              ref={swiperRef}
              className={Styles.ourJobs_container_left_box_slider}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: false,
                dynamicBullets: true,
                dynamicFraction: true,
              }}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
            >
              <SwiperSlide className={Styles.slide__details}>
                <h2>Freedom to</h2>
                <p>earn and learn</p>
              </SwiperSlide>
              <SwiperSlide className={Styles.slide__details}>
                <h2>Freedom to</h2>
                <p>fit work around your life</p>
              </SwiperSlide>
              <SwiperSlide className={Styles.slide__details}>
                <h2>Freedom to</h2>
                <p>be you</p>
              </SwiperSlide>
            </Swiper>
            <button className={swiperPaused ? Styles.buttonPaused : Styles.buttonStart} onClick={toggleSwiper}>
              {swiperPaused ? "START" : "PAUSE"} <PauseIcon />
            </button>
          </div>
          <div className={Styles.ourJobs_container_left_wave}>
            <img src={cardWave} />
          </div>
        </div>
        <div className={Styles.ourJobs_container_right}>
          <h2>
            <motion.div {...animationTitleEffect}>
              Our jobs work for you, and that’s our <span>people promise</span>.
            </motion.div>
          </h2>
          <p>
            At Maccas®, we attract people who love to create and serve seriously great food, possess an infectious attitude, provide <span>world-class customer service,</span> and most importantly, like to have fun while they’re working!
            Whether it is building skills for life or giving you flexibility to fit in with your lifestyle, we create jobs that work for you.
          </p>
          <p>
            Maccas® is always looking for <span>motivated, passionate people</span> who prioritize health and safety as much as we do, so apply now to join the Macca’s family and an organisation formally recognised as an Employer of Choice
            four years running.
          </p>
        </div>
      </div>

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
          {items.map((item: any, id: any) => (
            <button key={id} className={`${Styles.scrollPanelContainer__left_l1} ${selectedItem && selectedItem.title === item.title ? Styles.active : ""}`} onClick={() => handleItemClick(item)}>
              <img src={item.image} alt={item.title} />
              {/* <div className={Styles['active-indicator']}></div> */}
              <span className={Styles['active-indicator']}></span>
              <h3>{item.title}</h3>
            </button>
          ))}
        </div>
        <div className={Styles.scrollPanelContainer__right}>
          {selectedItem ? (
            <div className={Styles.scrollPanelContainer__right_card}>
              <img src={selectedItem.image} alt={selectedItem.title} />
              <h3>{selectedItem.detail}</h3>
            </div>
          ) : (
            <div className={Styles.scrollPanelContainer__right_card}>
              <img src={items[0].image} alt="a pic of sun" />
              <h3>{items[0].detail}</h3>
            </div>
          )}
        </div>
      </div>
      <div className={Styles.safetyContainer}>
        <motion.div {...floatImgAnimationStyle} className={Styles.safetyContainer__image} />
        <div className={Styles.safetyContainer__cardContainer}>
          <div className={Styles.safetyContainer__card}>
            <h2>Your Safety</h2>
            <p>
              At McDonald’s the safety and wellbeing of our people, customers and the food and drink we serve is our <strong>highest priority</strong>.
            </p>
            <p>
              Each McDonald’s restaurant follows strict cleaning, sanitation and hygiene procedures that meet or exceed the rigorous requirements outlined in the Food Standards Code. We are committed to protecting the safety of our people
              and customers through our hygiene and cleanliness standards, social distancing practices and convenience of contact-free service and delivery. Additionally, we have implemented a range of communication methods to keep
              employees up to date with the latest guidance and advice.
            </p>
            <h4>You can have confidence that your wellbeing and safety comes first when you join the Macca’s family.</h4>
          </div>
          <div className={Styles.safetyContainer__button}>
            <button>
              View All Restaurant Jobs
              <span>
                <ArrowForwardIosRoundedIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className={Styles.ourPeople}>
        <div className={Styles.ourPeople__banner}></div>
        <div className={Styles.ourPeople__image}>
          <img src={People} alt="careers of macDonald's" />
        </div>
        <div className={Styles.ourPeople__card}>
          <h2>Our People</h2>
          <p>Our people are our greatest asset and since we opened our first restaurant, we’ve had the privilege of providing a job full of opportunities to more than 1.3 million Australians.</p>
          <p>We believe in equipping those who work with us, with technical and soft skills that give them the foundations to forge a career within McDonald’s and beyond.</p>
          <p>We create opportunities for all employees to work flexibly in a way that is meaningful and fulfilling for them, whilst recognising and valuing our people in an enjoyable, energising environment.</p>
        </div>
        <div className={Styles.ourPeople__image2}>
          <img src={ManPic} alt="a pic of man" />
        </div>
      </div>
      <div className={Styles.our_Restaurants}>
        <motion.div {...bannerOpacityMotion} className={Styles.bannerImg}></motion.div>
        <div className={Styles.our_Restaurants_card}>
          <img src={Hat} alt="a pic of hat" />
          <h2>Our Restaurants</h2>
          <p>
            We have over 1020 restaurants in Australia so there are some things that will be different from restaurant to restaurant. Some of our restaurants are owned and operated by local Licensees, whilst others are operated by
            McDonald’s Australia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurApp;
