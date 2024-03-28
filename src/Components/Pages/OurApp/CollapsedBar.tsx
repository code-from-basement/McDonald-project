import React, { useState } from 'react'
import Styles from "./CollapsedBar.module.css"
import { ArrowForwardIosRoundedIcon, ExpandMoreRoundedIcon } from '../../UI/IconsLibrary/IconsLibrary';

function CollapsedBar({item}: any) {

    const {title, collapseDetail} = item;
    const [isExpanded, setIsExpanded] = useState(false);
    const onClickExpandHandle = () => {
        setIsExpanded(!isExpanded);
    }


  return (
    <div className={`${Styles.collapsedBar__container} ${isExpanded ? Styles.isExpanded : ""}`}>
        <button className={Styles.collapsedBar__container_button} onClick={() => onClickExpandHandle()}>
            <h2>{title}</h2>
            <button className={Styles.button_svg}><span></span>{isExpanded ? <ExpandMoreRoundedIcon /> : <ArrowForwardIosRoundedIcon />}</button>
        </button>
        <div className={`${Styles.collapsedBar__container_detail} ${isExpanded ? Styles.active : ""}`}>
            <p>{collapseDetail}</p>
        </div>
    </div>
  )
}

export default CollapsedBar