import React from 'react'
import styles from './CustomInput.module.css'

const CustomInput = () => {
  return (
    <input className={styles.InputCustom} type="number" placeholder="Custom"/>
  )
}

export default CustomInput
