import { memo, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";
import macIcon from "./../../../assets/Image/Icon/macdonaldPNG.png";
import Styles from "./itemPage.module.css";
import { NavigateBeforeRoundedIcon } from "../IconsLibrary/IconsLibrary";

function ItemPage() {
  const { fullMenuListData, isLoading, setIsLoading, fetchAllMenuData } = useGlobalContext();
  const [selectedProduct, setSelectedProduct] = useState();
  const [nutritionListComp, setNutritionListComp] = useState<[string, unknown][]>([]);
  const navigate = useNavigate();
  const { title } = useParams();
  const ingredientString = selectedProduct?.ingredient.toString().replace(/,/g, ", ") + ".";

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
      const searchedProduct = fullMenuListData.find((item: any) => item.title === title);
      setSelectedProduct(searchedProduct);
      if (searchedProduct) {
        const nutritionListArray = Object.entries(searchedProduct.nutrition);
        setNutritionListComp(nutritionListArray);
      }
      setIsLoading(false);
    } else {
      console.log("no data");
    }
  }, [fullMenuListData]);

  return (
    <div className={Styles.itemPage}>
      <button className={Styles.btn__getBack} onClick={() => navigate(`/${selectedProduct?.category}-menu`, { replace: true, preventScrollReset: true })}>
        <NavigateBeforeRoundedIcon />
        <h3>{`${selectedProduct?.category.charAt(0).toUpperCase() + selectedProduct?.category.slice(1)} Menu`}</h3>
      </button>
      <div className={Styles.tag}>
        <img src={macIcon} alt="icon of mac donald" />
        <p>MahyarNafisi and Roudabeh Adnani 2024. This website is copyrighted for portfolio and educational use only. Unauthorized reproduction or distribution is prohibited. For inquiries, contact. mahyar.nafisi@gmail.com.</p>
      </div>
      <section className={Styles.mainSection}>
        <section className={Styles.section__img}>
          <div className={Styles.category}>
            <h2>{selectedProduct?.category}</h2>
          </div>
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
              <ul className={Styles.list}>
                {nutritionListComp.map((item: any, index: number) => {
                  return (
                    <li className={Styles.listItem} key={index}>
                      <span className={Styles.list__item__key}>{item[0]}</span> : <span className={Styles.list__item__value}>{item[1]}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default memo(ItemPage);
