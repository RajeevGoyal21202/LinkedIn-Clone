import React from 'react'
import styles from "./notFound.module.css"
import logo from "../../assets/Logo.png"
import notfound from "../../assets/notfound.svg"



const NotFound = () => {
  return (
   <div className={styles.maincontainer}>
    <div className={styles.outerNavbar}>
      <div className={styles.innerNavbar}>
        <img src={logo} className={styles.logo}></img>
      </div>
    </div>
    <div className={styles.body}>
      <div className={styles.content}>
        <div>
      <img src={notfound} className={styles.notfound}></img>
        </div>
      <div className={styles.text}>
        <h2 className={styles.heading}>The page doesn't exist</h2>
        <p></p>
      </div>
      </div>
      
    </div>

   </div>
  )
}

export default NotFound
