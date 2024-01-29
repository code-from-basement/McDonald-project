import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";
import macIcon from "./../../../assets/Image/Icon/macdonaldPNG.png";
import Styles from "./itemPage.module.css";

function ItemPage() {
  const { fullMenuListData, isLoading, setIsLoading } = useGlobalContext();
  const [selectedProduct, setSelectedProduct] = useState();
  const { title } = useParams();

  useEffect(() => {
    setIsLoading(true);
    console.log("full menu hast");
    const searchedProduct = fullMenuListData?.find((item) => item.title === title);
    setSelectedProduct(searchedProduct);
    setIsLoading(false);
    console.log(searchedProduct);
  }, []);

  return (
    <div className={Styles.itemPage}>
      {isLoading && <h1>Loading...</h1>}
      <div className={Styles.tag}>
        <img src={macIcon} alt="icon of mac donald" />
      </div>
      <section className={Styles.mainSection}>
        <div className={Styles.section__img}>
          <img src={selectedProduct?.image} alt="" />
        </div>
        <div className={Styles.section__content}></div>
      </section>
    </div>
  );
}

export default ItemPage;
