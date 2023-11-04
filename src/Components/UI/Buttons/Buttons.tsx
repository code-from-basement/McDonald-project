import { Style } from "@mui/icons-material";
import Styles from "./Buttons.module.css";
import React from "react";

type buttonProps = {
  children: React.ReactNode | string;
  type: string;
};

function ButtonPrimary({ children, type }: buttonProps) {
  return <button className={`${Styles.buttonPrimary} ${Styles[`${type}`]}`}>{children}</button>;
}
function ButtonSecondary({ children, type }: buttonProps) {
  return <button className={`${Styles.buttonSecondary} ${Styles[`${type}`]}`}>{children}</button>;
}

export { ButtonPrimary, ButtonSecondary };
