import React from 'react'
import styles from "./notFound.module.css"
import notlogo from "../../assets/notlogo.svg"
import notfound from "../../assets/notfound.svg"
import {  useNavigate } from "react-router-dom"
import { Button } from "@mui/material";
import AuthFooter from '../../component/AuthFooter'


const NotFound = () => {
 const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/home")
  }
  return (

   <div className={styles.maincontainer}>
    <div className={styles.outerNavbar}>
      <div className={styles.innerNavbar}>
        <img src={notlogo} className={styles.logo}></img>
      </div>
    </div>
    <div className={styles.body}>
      <div className={styles.content}>
        <div>
      <img src={notfound} className={styles.notfound}></img>
        </div>
      <div className={styles.text}>
        <h2 className={styles.heading}>This page doesn't exist</h2>
        <p className={styles.para}>Please check your URL or return to LinkedIn home</p>
        <div className={styles.button}>

        <Button variant='outlined' onClick={handleClick} className={styles.feedButton}>Go to your feed</Button>
        </div>
        
      </div>
      </div>
      
    </div>
    <div className={styles.footer}>
    </div>
    <AuthFooter/>
   </div>
  )
}

export default NotFound
