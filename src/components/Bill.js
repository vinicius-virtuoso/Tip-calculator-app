import React, { useContext, useEffect } from 'react'
import { AllContext } from '../Context/TheContext'
import {Form } from '../Styles/Styleds'
import ButtonsArea from './ButtonsArea'
import Input from './Input'

const Bill = () => {
  const {setTotal,setTotalPerson,bill,setBill,tipCustom,people,setPeople,setError,error,error2,setError2} = useContext(AllContext)

  function validate({target}) {
    if(target.value <= 0) {
      setError(true)
    } else {
      setError(false)
    }
  }
  function validate2({target}) {
    if(target.value <= 0) {
      setError2(true)
    } else {
      setError2(false)
    }
  }


  useEffect(() => {
    function calcValues() {
      if(bill > 0 && people > 0) {
        const soma = bill / people * (tipCustom / 100)
        setTotal(soma.toFixed(2))
      } else {
        setTotal('0.00')
      }
    }
    function calcTotalPerson() {
      if(bill > 0 && people > 0) {
        const soma = bill / people
        const allTotal = soma * (1 + (tipCustom / 100))
        setTotalPerson(allTotal.toFixed(2))
      } else {
        setTotalPerson('0.00')
      }
    }
    
    calcValues()
    calcTotalPerson()
  }, [bill, people, setTotal, setTotalPerson, tipCustom]);




  return (
    <Form onSubmit={(event) => event.preventDefault()} >
      <Input className={error ? 'error':''} label="Bill" placeholder="0.00" onChange={({target}) => setBill(target.value)} value={bill} error={error} onBlur={validate}/>
      <ButtonsArea label="Select Tip %"/>
      <Input className={error2 ? 'error':''} label="Number of People" placeholder="0" onChange={({target}) => setPeople(target.value)} value={people} error={error2} onBlur={validate2}/>
    </Form>
  )
}

export default Bill
