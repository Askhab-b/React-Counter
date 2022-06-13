import React from 'react'
import styles from './footer.module.css'
import logo from '../../logo/Two.svg'

export default function Footer() {
  return (
    <> 

    <div className={styles.footer}> 
        <img src={logo}/>
        <div className={styles.footerText}>
            <p>Партнерам</p>
            <p>Разработчикам</p>
            <p>Вакансии</p>
        </div>
 <p className={styles.intocodeText}>OOO "Интукод", 2022г.</p>

    </div>


    </>
  )
}
