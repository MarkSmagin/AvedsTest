import React from 'react'
import classes from './FeatureItem.module.css'

export const FeautereItem = (props) => {
  return (
    <div className={classes.featureItem}>
      <div className={classes.featureItem__imgWrap}>
        <img src={props.feature.src} className={classes.featureItem__img} alt={props.feature.alt}/>
      </div>
      <h5 className={classes.featureItem__title}>{props.feature.title}</h5>
      <hr />
      <p className={classes.featureItem__text}>{props.feature.text}</p>
    </div>
  )
}
