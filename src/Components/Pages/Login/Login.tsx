import { useNavigate } from "react-router-dom";
import { HomeRoundedIcon } from "../../UI/IconsLibrary/IconsLibrary";
import macdonaldIcon from "./../../../assets/Image/Icon/macdonaldPNG.png";
import googleIcon from "./../../../assets/Image/googel-icon/google.256x256.png";
import Styles from "./Login.module.css";
import { dataBase } from "../../../Data/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useGlobalContext } from "../../Context/GlobalContext";

function Login() {
  // logged in user data
  const { loggedUser, setLoggedUser, setUserFavoriteList, setLoggedInUserFavoriteList } = useGlobalContext();

  // navigate from react-router-dom
  const navigate = useNavigate();

  // sign in with google
  const signInWithGoogle = async () => {
    // google auth provider
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(dataBase, provider);
      setLoggedUser(result.user);

      // Create user favorite list in backend
      const response = await fetch(`http://127.0.0.1:5000/api/v1/usersfavs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: dataBase.currentUser?.displayName,
          favoriteList: [],
        }),
      });
      const data = await response.json();
      // console.log(data, "data");

      setLoggedInUserFavoriteList(data.data);

      //

      window.localStorage.setItem("user", JSON.stringify(result.user.displayName));
      const btnGoToHome = document.querySelector("#btn-go-to-home");
      btnGoToHome?.classList.add(Styles.showHomeBtn);
    } catch (err) {
      console.log(err, "error");
    }
  };

  // sign out with google
  const logOutWithGoogle = async () => {
    try {
      await signOut(dataBase);
      setUserFavoriteList([]);
      setLoggedInUserFavoriteList([]);
      setLoggedUser({});

      // fetchAllMenuData("menus");
    } catch (err) {
      console.log(err, "error to sign out");
    }
  };

  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.brandContainer}>
        <img src={macdonaldIcon} alt="macdonald icon in login page" />
        {dataBase.currentUser ? <h1>Welcome {loggedUser?.displayName}</h1> : <h1>Sign in to McDonald's</h1>}
      </div>
      <button className={Styles.btn__login} onClick={dataBase.currentUser ? logOutWithGoogle : signInWithGoogle}>
        <img src={googleIcon} alt="google icon for login button" />
        {dataBase.currentUser?.displayName ? "Logout" : "Continue with google"}
      </button>
      {dataBase.currentUser ? <p>You can log out from here.</p> : <p>Let's login to your google account.</p>}
      <button id="btn-go-to-home" className={Styles.btn__home} onClick={() => navigate("/", { replace: true })}>
        <HomeRoundedIcon />
      </button>
    </div>
  );
}

export default Login;
