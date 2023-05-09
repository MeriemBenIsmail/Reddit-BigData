import React from 'react'
import classes from './BatchItem.module.css'
import negative from "../../pages/negative.png";
import positive from "../../pages/positive.png";

export const BatchItem = ({comment,bgColor,sentiment}) => {

  return (
    <div className={classes.batchItem} style={{ backgroundColor: bgColor }}>
        <h3>{comment}</h3>
        <img
        className={classes.sentiment}
        src={sentiment === 1 ? positive : negative}
        alt="sentiment"
      />
    </div>
  )
}
