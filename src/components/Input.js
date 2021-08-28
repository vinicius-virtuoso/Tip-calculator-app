import React from 'react'
import { Inputs, Label } from '../Styles/Styleds'

const Input = ({label,placeholder}) => {

  const error = false;

  return (
    <>
      <Label>
        {label}
        {error && <span>Can'to be zero</span>}
      </Label>
      <Inputs type="number" placeholder={placeholder}/>
    </>
  )
}

export default Input
