import React from 'react'
import Button from './Button'
import CustomInput from './CustomInput'

const Buttons = [5,10,15,25,50]

const BoxButtons = () => {
  function handleClick({target}){
    const number = target.innerText
    const percent = +Array.from(number).slice(0,-1).join('')

    console.log(percent)
  }
  
  return (
    <div className="BoxButton">
      <label className="Label" htmlFor="btn">Select Tip %</label>
      <div className="DivFlex">
        {Buttons.map((btn) => <Button key={btn} onClick={handleClick}>{btn}%</Button>)}
        <CustomInput/>
      </div>
    </div>
  )
}

export default BoxButtons
