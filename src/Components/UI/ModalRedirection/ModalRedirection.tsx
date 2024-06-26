import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";
import { animationOpacity1, animationOpacity2, animationOpacity3 } from "../Animation/AnimationStyles";
import { ButtonPrimary, ButtonSecondary } from "../Buttons/Buttons";
import macIcon from "./../../../assets/Image/Icon/macdonaldPNG.png";
import Styles from "./ModalRedirection.module.css";

function ModalRedirection() {
  const { setEventToggles }: any = useGlobalContext();
  // const { isModalRedirectionShow } = eventToggles;

  const navigate = useNavigate();

  const onClickModalCloseHandler = () => {
    setEventToggles((prevData: any) => {
      return { ...prevData, isModalRedirectionShow: false };
    });
  };

  const onClickRedirectToLoginHandler = () => {
    setEventToggles((prevData: any) => {
      return { ...prevData, isModalRedirectionShow: false };
    });
    setTimeout(() => {
      navigate("/login");
    }, 600);
  };

  return (
    <div className={Styles.modal}>
      <motion.div {...animationOpacity1} className={Styles.overlay} onClick={onClickModalCloseHandler}>
        &nbsp;
      </motion.div>
      <motion.div {...animationOpacity2} className={Styles.card}>
        <motion.img {...animationOpacity3} src={macIcon} alt="" />
        <div className={Styles.card__header}>
          <h2>Favorite menu</h2>
        </div>
        <div className={Styles.card__body}>
          <p>To add this item to your favorite list you need to login first. </p>
        </div>
        <div className={Styles.card__footer}>
          <ButtonSecondary onClick={onClickModalCloseHandler} type={""}>
            Continue Offline
          </ButtonSecondary>
          <ButtonPrimary onClick={onClickRedirectToLoginHandler} type={""}>
            Get Login
          </ButtonPrimary>
        </div>
      </motion.div>
    </div>
  );
}

export default ModalRedirection;
