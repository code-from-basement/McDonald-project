import macdonaldIcon from "./../../../assets/Image/Icon/macdonaldPNG.png";
import googleIcon from "./../../../assets/Image/googel-icon/google.256x256.png";
import Styles from "./Login.module.css";

function Login() {
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
    </div>
  );
}

export default Login;
