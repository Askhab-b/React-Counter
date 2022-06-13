import React from 'react'
import styles from './centeritems.module.css'

export default function CenterItems() {
  return (
    <>
    <div className={styles.null}>0</div> 

    <div className={styles.buttonsBlock}>
        <button className={styles.buttonBlue}>Увеличить</button>
        <button className={styles.buttonOrange}>Уменьшить</button>
        <button className={styles.buttonGrey}>Сбросить</button>   
    </div>

    </>
  )
}

