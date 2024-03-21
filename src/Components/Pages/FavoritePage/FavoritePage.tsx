import React, { useEffect } from "react";
import Styles from "./favorite.module.css";
import { useGlobalContext } from "../../Context/GlobalContext";
import { dataBase } from "../../../Data/firebaseConfig";

function FavoritePage() {
  const { fullMenuListData, userFavoriteList, setUserFavoriteList } = useGlobalContext();

  // useEffect(() => {
  //   if (dataBase.currentUser === null) {
  //     return;
  //   } else {
  //     const findFavoriteItem = fullMenuListData?.filter((item: any) => item.isFavorite === true);
  //     setUserFavoriteList(findFavoriteItem);
  //   }
  // }, []);

  const noFavItem = <h2>There no favorite item selected</h2>;
  //

  return (
    <div className={Styles.favPage}>
      <section className={Styles.favPage__header}>
        <h1 className={Styles.header__title}>Favorite</h1>
        <h2 className={Styles.header__subTitle}>
          {dataBase.currentUser?.displayName} <br /> favorite menu:
        </h2>
      </section>

      <section className={Styles.favPage__filterPanel}>
        <div className={Styles.filterPanel__container}>
          <button className={Styles.filterPanel__btn}>Cheapest</button>
          <button className={Styles.filterPanel__btn}>Most expensive</button>
          <button className={Styles.filterPanel__btn}>Fat</button>
          <button className={Styles.filterPanel__btn}>Calories</button>
          <button className={Styles.filterPanel__btn}>Categories</button>
        </div>
      </section>

      <section className={Styles.favPage__favList}>
        <div className={Styles.favList__container}>
          {!dataBase.currentUser
            ? noFavItem
            : userFavoriteList?.map((item: any) => {
                const { title, price } = item;
                return (
                  <div>
                    <h2>{title}</h2>
                    <h2>{price}</h2>
                  </div>
                );
              })}
        </div>
      </section>
    </div>
  );
}

export default FavoritePage;
