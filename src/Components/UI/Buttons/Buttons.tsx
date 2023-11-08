import Styles from "./Buttons.module.css";
import { Style } from "@mui/icons-material";
import React from "react";

type buttonProps = {
  children: React.ReactNode | string;
  type: void | string;
  onClick: React.MouseEventHandler;
};

function ButtonPrimary({ children, type, onClick }: buttonProps) {
  return (
    <button onClick={onClick} className={`${Styles.buttonPrimary} ${Styles[`${type}`]}`}>
      {children}
    </button>
  );
}
function ButtonSecondary({ children, type, onClick }: buttonProps) {
  return (
    <button onClick={onClick} className={`${Styles.buttonSecondary} ${Styles[`${type}`]}`}>
      {children}
    </button>
  );
}

export { ButtonPrimary, ButtonSecondary };
