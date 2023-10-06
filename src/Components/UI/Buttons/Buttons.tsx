import Styles from "./Buttons.module.css";
import React from "react";

type buttonProps = {
  children: React.ReactNode;
};

function ButtonPrimary({ children }: buttonProps) {
  return <button className={Styles.buttonPrimary}>{children}</button>;
}
function ButtonSecondary({ children }: buttonProps) {
  return <button className={Styles.buttonSecondary}>{children}</button>;
}

export { ButtonPrimary, ButtonSecondary };
