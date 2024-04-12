import Styles from "./QuantitySelector.module.css";

function QuantitySelector() {
  const qtySelectorNum = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  return (
    <div className={Styles.qty}>
      <ul>
        {qtySelectorNum.map((item, index) => {
          return (
            <>
              <li key={index}>
                <a>{item}</a>
              </li>
              <hr />
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default QuantitySelector;
