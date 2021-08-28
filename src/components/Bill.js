import React from 'react'
import {Form } from '../Styles/Styleds'
import ButtonsArea from './ButtonsArea'
import Input from './Input'

const Bill = () => {

  function submitForm(event) {
    event.preventDefault()
  }

  return (
    <Form onSubmit={submitForm} bg>
      <Input label="Bill"placeholder="0.00"/>
      <ButtonsArea label="Select Tip %"/>
      <Input label="Number of People" placeholder="0"/>
    </Form>
  )
}

export default Bill
