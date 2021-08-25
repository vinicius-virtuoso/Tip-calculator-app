import React from 'react'
import Error from '../Error/Error'
import styles from './Input.module.css'

const Input = ({id,label,onChange,onBlur,value,error}) => {
  return (
    <>
      <label className={styles.Label} htmlFor={id}>
        <div>{label} <div>{error && <Error/>}</div></div>
        <input className={styles.Input} id={id} type="number" label={label} value={value} onChange={onChange} onBlur={onBlur}/>
      </label>
    </>
  )
}

export default Input
