import React, { useContext } from 'react'
import { AllContext } from '../Context/TheContext'
import { ResumeValue } from '../Styles/Styleds'

const Resume = () => {
  const {total,totalPerson} = useContext(AllContext)

    console.log(total)
    console.log(totalPerson)

  

  return (
    <ResumeValue>
      <p>Tip Amount</p>
      <p>Total</p>
      <span>${total}</span>
      <span>${totalPerson}</span>
      <button>RESET</button>
    </ResumeValue>
  )
}

export default Resume
