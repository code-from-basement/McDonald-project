import { useNavigate } from "react-router-dom";
import { HomeRoundedIcon } from "../../UI/IconsLibrary/IconsLibrary";
import macdonaldIcon from "./../../../assets/Image/Icon/macdonaldPNG.png";
import googleIcon from "./../../../assets/Image/googel-icon/google.256x256.png";
import Styles from "./Login.module.css";
import { dataBase } from "../../../Data/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useGlobalContext } from "../../Context/GlobalContext";

function Login() {
  const { loggedUser, setLoggedUser } = useGlobalContext();
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(dataBase, provider);
      setLoggedUser(result.user);
      const btnGoToHome = document.querySelector("#btn-go-to-home");
      btnGoToHome?.classList.add(Styles.showHomeBtn);
    } catch (err) {
      console.log(err, "error");
    }
  };
  const logOutWithGoogle = async () => {
    try {
      await signOut(dataBase);
      setLoggedUser({});
    } catch (err) {
      console.log(err, "error to sign out");
    }
  };
  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.brandContainer}>
        <img src={macdonaldIcon} alt="macdonald icon in login page" />
        {loggedUser.photoURL ? <h1>Welcome {loggedUser.displayName}</h1> : <h1>Sign in to McDonald's</h1>}
      </div>
      <button className={Styles.btn__login} onClick={loggedUser.photoURL ? logOutWithGoogle : signInWithGoogle}>
        <img src={googleIcon} alt="google icon for login button" />
        {loggedUser.photoURL ? "Logout" : "Continue with google"}
      </button>
      {loggedUser.photoURL ? <p>You can log out from here.</p> : <p>Let's login to your google account.</p>}
      <button id="btn-go-to-home" className={Styles.btn__home} onClick={() => navigate("/", { replace: true })}>
        <HomeRoundedIcon />
      </button>
    </div>
  );
}

export default Login;
