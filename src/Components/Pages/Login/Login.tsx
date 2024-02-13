import { useNavigate } from "react-router-dom";
import { HomeRoundedIcon } from "../../UI/IconsLibrary/IconsLibrary";
import macdonaldIcon from "./../../../assets/Image/Icon/macdonaldPNG.png";
import googleIcon from "./../../../assets/Image/googel-icon/google.256x256.png";
import Styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.brandContainer}>
        <img src={macdonaldIcon} alt="macdonald icon in login page" />
        <h1>Sign in to McDonald's</h1>
      </div>
      <button className={Styles.btn__login}>
        <img src={googleIcon} alt="google icon for login button" />
        Continue with google
      </button>
      <p>Let's login to your google account</p>
      <button className={Styles.btn__home} onClick={() => navigate("/", { replace: true })}>
        <HomeRoundedIcon />
      </button>
    </div>
  );
}

export default Login;
