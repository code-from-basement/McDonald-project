import React, { useEffect } from "react";
import Styles from "./favorite.module.css";
import { useGlobalContext } from "../../Context/GlobalContext";
import { dataBase } from "../../../Data/firebaseConfig";

function FavoritePage() {
  const { fullMenuListData, userFavoriteList, setUserFavoriteList } = useGlobalContext();

  useEffect(() => {
    if (dataBase.currentUser === null) {
      return;
    } else {
      const findFavoriteItem = fullMenuListData?.filter((item: any) => item.isFavorite === true);
      setUserFavoriteList(findFavoriteItem);
    }
  }, []);
  console.log(userFavoriteList);

  return (
    <div className={Styles.favPage}>
      FavoritePage
      <h2>{dataBase.currentUser?.displayName} favorite menu:</h2>
    </div>
  );
}

export default FavoritePage;
