import React, { Children } from 'react'
import styles from './Button.module.css'

const Button = ({children}) => {
  return (
    <button className={styles.Button} >{children}</button>
  )
}

export default Button
