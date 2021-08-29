import React from 'react'
import { Inputs, Label } from '../Styles/Styleds'

const Input = ({label,placeholder,onChange,value,className,error,onBlur}) => {

  return (
    <>
      <Label>
        {label}
        {error ? <span>Can't be zero</span> : <span></span>  }
      </Label>
      <Inputs className={className} type="number" placeholder={placeholder} onChange={onChange} value={value} onBlur={onBlur}/>
    </>
  )
}

export default Input
