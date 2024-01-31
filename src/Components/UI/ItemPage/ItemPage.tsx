import { memo, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";
import macIcon from "./../../../assets/Image/Icon/macdonaldPNG.png";
import Styles from "./itemPage.module.css";
import { selectClasses } from "@mui/material";

function ItemPage() {
  const { fullMenuListData, isLoading, setIsLoading, fetchAllMenuData } = useGlobalContext();
  const [selectedProduct, setSelectedProduct] = useState();
  const { title } = useParams();
  const ingredientString = selectedProduct?.ingredient.toString().replace(/,/g, ", ") + ".";

  // nutrition list component , extract the object and map it to a list
  const nutritionList =
    fullMenuListData &&
    Object.entries(selectedProduct?.nutrition).map((item, index) => {
      return (
        <li className={Styles.listItem} key={index}>
          <h2>
            {item[0].charAt(0).toUpperCase() + item[0].slice(1).toLowerCase()}: {item[1]}
          </h2>
        </li>
      );
    });

  // To relocate to the top of the page when the page is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // to get the data from the global context and set the selected product
  useEffect(() => {
    if (!fullMenuListData) {
      fetchAllMenuData("menu");
    } else if (fullMenuListData) {
      setIsLoading(true);
      const searchedProduct = fullMenuListData.find((item) => item.title === title);
      setSelectedProduct(searchedProduct);
      setIsLoading(false);
    } else {
      console.log("no data");
    }
  }, [fullMenuListData]);

  return (
    <div className={Styles.itemPage}>
      <div className={Styles.tag}>
        <img src={macIcon} alt="icon of mac donald" />
      </div>
      <section className={Styles.mainSection}>
        {isLoading && <h1>Loading...</h1>}
        <section className={Styles.section__img}>
          <img src={selectedProduct?.image} alt="" />
        </section>
        <section className={Styles.section__content}>
          <div className={Styles.item__card}>
            <h2 className={Styles.item__title}>{selectedProduct?.title}</h2>
            <h2 className={Styles.item__price}>{selectedProduct?.price}Kr</h2>
            <h2 className={Styles.item__description}>{selectedProduct?.description}</h2>
            <span className={Styles.TagCalory}>
              {selectedProduct?.nutrition.calories} <br /> Cal.
            </span>
          </div>
          <div className={Styles.ingredient__card}>
            <h2 className={Styles.ingredient__title}>Ingredients: </h2>
            <h2 className={Styles.ingredient__text}>{ingredientString}</h2>
          </div>
          <div className={Styles.nutrition__card}>
            <h2 className={Styles.nutrition__title}>Nutrition:</h2>
            <div className={Styles.nutrition__list}>
              <ul className={Styles.list}>{nutritionList}</ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default ItemPage;
