import React from 'react'
import logo from '../../logo/One.svg'
import styles from './header.module.css'

export default function Header() {
  return (
    <>
    <div className={styles.logo}><img src={logo} />

    <div className={styles.header}>
    <p>Главная</p>
    <p>О нас</p>
    <p>Контакты</p>
    </div>
    </div>
    <hr/>
    </>
  )
}


