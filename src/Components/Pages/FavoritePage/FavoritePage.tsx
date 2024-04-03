import { dataBase } from "../../../Data/firebaseConfig";
import { useGlobalContext } from "../../Context/GlobalContext";
import { DeleteRoundedIcon } from "../../UI/IconsLibrary/IconsLibrary";
import Styles from "./favorite.module.css";

function FavoritePage() {
  const { setFullMenuListData, userFavoriteList } = useGlobalContext();
  const noFavItem = <h2>There no favorite item selected</h2>;

  // useEffect(() => {
  //   if (dataBase.currentUser === null) {
  //     return;
  //   } else {
  //     const findFavoriteItem = fullMenuListData?.filter((item: any) => item.isFavorite === true);
  //     setUserFavoriteList(findFavoriteItem);
  //   }
  // }, []);

  // useEffect(() => {
  //   setUserFavoriteList(fullMenuListData?.find((item) => item.isFavorite === true));
  // }, [fullMenuListData]);

  //
  // Delete item from list and update full menu list isFavorite key to false
  const onClickDeleteHandler = (e) => {
    const targetID = e.currentTarget.id;
    setFullMenuListData((prevData: any) => {
      return prevData.map((item) => {
        return item._id === targetID ? { ...item, isFavorite: false } : item;
      });
    });
  };

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
          {!dataBase.currentUser || userFavoriteList.length === 0
            ? noFavItem
            : userFavoriteList?.map((item: any) => {
                const { title, price, _id, image } = item;
                return (
                  <div className={Styles.favCard} key={_id}>
                    <div className={Styles.favCard__image}>
                      <img src={image} alt={title} />
                    </div>
                    <div className={Styles.favCard__details}>
                      <h2>{title}</h2>
                      <h2>{price}Kr</h2>
                    </div>
                    <div className={Styles.favCard__footer}>
                      <button id={_id} onClick={(e) => onClickDeleteHandler(e)}>
                        <DeleteRoundedIcon />
                      </button>
                    </div>
                  </div>
                );
              })}
        </div>
      </section>
    </div>
  );
}

export default FavoritePage;
