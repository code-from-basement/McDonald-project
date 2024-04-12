import { useEffect } from "react";
import { useGlobalContext } from "../../../Context/GlobalContext";
import Styles from "./TotalSection.module.css";
function TotalSection() {
  const { basketList, receipt, setReceipt } = useGlobalContext();
  const { total, subTotal, deliveryFees, taxAndFees } = receipt;

  useEffect(() => {
    const subTotalNum = basketList.reduce((acc: number, item: any) => {
      return acc + item.price * item.qty;
    }, 0);
    const totalNum = Number(subTotalNum + deliveryFees + taxAndFees);
    const taxNum = Number(((subTotalNum + deliveryFees) * 0.1).toPrecision(2));
    setReceipt(() => {
      return { ...receipt, subTotal: subTotalNum, total: totalNum, taxAndFees: taxNum };
    });

    // console.log(typeof subTotal);
  }, [basketList]);

  return (
    <div className={Styles.totalSection}>
      <div className={`${Styles.row} ${Styles.promotion}`}>
        <input type="text" placeholder="Promotion Code" maxLength={10} />
        <button>Apply Code</button>
      </div>
      <div className={Styles.row}>
        <span>Subtotal:</span>
        <span>{subTotal} Kr</span>
      </div>
      <div className={Styles.row}>
        <span>Delivery Fees:</span>
        <span>{deliveryFees} Kr</span>
      </div>
      <div className={Styles.row}>
        <span>Tax and Fees:</span>
        <span>{taxAndFees} Kr</span>
      </div>
      <div className={Styles.divider}>&nbsp;</div>
      <div className={`${Styles.row} ${Styles.total}`}>
        <h2>Total:</h2>
        <h2>{total} Kr</h2>
        <span>include 10% VAT</span>
      </div>
      <div className={`${Styles.row} ${Styles.checkout}`}>
        <button className={Styles.btn__checkout}>Process to checkout</button>
      </div>
    </div>
  );
}

export default TotalSection;
