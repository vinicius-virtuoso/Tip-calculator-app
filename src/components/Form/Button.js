import React from 'react'
import styles from './Button.module.css'

const Button = ({children,onClick,...props}) => {

  return (
    <button className={styles.Button} onClick={onClick} {...props}>{children}</button>
  )
}

export default Button
