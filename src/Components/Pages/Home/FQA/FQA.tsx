import { useState } from "react";
import faqsData from "../../../../Data/FAQ";
import { ButtonSecondary } from "../../../UI/Buttons/Buttons";
import { AddRoundedIcon, CloseRoundedIcon, NavigateNextRoundedIcon, RemoveRoundedIcon } from "./../../../UI/IconsLibrary/IconsLibrary";
import Styles from "./FQA.module.css";

function FQA() {
  const [open, setOpen] = useState<null | number>(0);
  const [numOfListItem, setNumOfListItem] = useState(3);

  const toggle = (i: number) => {
    if (open === i) {
      return setOpen(null);
    }
    setOpen(i);
  };

  const onClickLisIncrementHandler = () => {
    if (numOfListItem <= 8) {
      setNumOfListItem((prevData) => prevData + 3);
    } else {
      setNumOfListItem(3);
      setOpen(0);
    }
  };

  return (
    <section className={Styles.fqa}>
      <div className={Styles.title}>
        <h2>FAQs</h2>
      </div>
      <div className={Styles.fqa__list}>
        {faqsData.map((item, i) => {
          if (+item.id > numOfListItem) {
            return null;
          }
          return (
            <div key={item.id} className={`${Styles.fqaItem} ${open === i ? Styles.openItem : ""}`} onClick={() => toggle(i)}>
              <div className={Styles.fqaItem__header}>
                <h3>{item.question}</h3>
                {open === i ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
              </div>

              {open === i && <h5>{item.answer}</h5>}
            </div>
          );
        })}
      </div>

      <ButtonSecondary type="" onClick={onClickLisIncrementHandler}>
        {numOfListItem <= 8 ? "See more questions" : "Minimize the list"}
        {numOfListItem <= 8 ? <NavigateNextRoundedIcon /> : <CloseRoundedIcon />}
      </ButtonSecondary>
    </section>
  );
}

export default FQA;
