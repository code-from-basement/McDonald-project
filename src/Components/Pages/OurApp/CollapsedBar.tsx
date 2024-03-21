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
    <div className={Styles.collapsedBar__container}>
        <button className={Styles.collapsedBar__container_button} onClick={(e) => onClickExpandHandle(e)}>
            <h2>{title}</h2>
            {isExpanded? <ExpandMoreRoundedIcon /> : <ArrowForwardIosRoundedIcon />}
        </button>
        <div>
            <p>{collapseDetail}</p>
        </div>
    </div>
  )
}

export default CollapsedBar