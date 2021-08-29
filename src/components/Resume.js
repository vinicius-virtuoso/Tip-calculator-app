import React, { useContext } from 'react'
import { AllContext } from '../Context/TheContext'
import { ResumeValue } from '../Styles/Styleds'

const Resume = () => {
  const {total,totalPerson,setTotal,setTotalPerson,setBill,setTip,setTipCustom,setPeople,setError,setError2} = useContext(AllContext)

  function resetAll() {
    setTotal('0.00')
    setTotalPerson('0.00')
    setBill('')
    setTip('')
    setTipCustom(0)
    setPeople('')
    setError(false)
    setError2(false)
  }

  return (
    <ResumeValue>
      <p>Tip Amount</p>
      <p>Total</p>
      <span>${total}</span>
      <span>${totalPerson}</span>
      <button onClick={resetAll}>RESET</button>
    </ResumeValue>
  )
}

export default Resume
