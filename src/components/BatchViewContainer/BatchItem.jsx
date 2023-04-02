import React from 'react'
import classes from './BatchItem.module.css'

export const BatchItem = ({hashtag,nbr,bgColor}) => {

  return (
    <div className={classes.batchItem} style={{ backgroundColor: bgColor }}>
        <h3>{hashtag}</h3>
        <p>{nbr}</p>
    </div>
  )
}
