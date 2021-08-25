import React from 'react'
import Button from './Button'

const Buttons = [5,10,15,25,50]

const BoxButtons = () => {
  return (
    <div className="BoxButton">
      <label className="Label" htmlFor="btn">Select Tip %</label>
      <div className="DivFlex">
        {Buttons.map((btn) => <Button>{btn}%</Button>)}
      </div>
    </div>
  )
}

export default BoxButtons
