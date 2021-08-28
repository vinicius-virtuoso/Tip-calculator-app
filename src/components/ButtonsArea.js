import React from "react";
import { Button, Div, InputsCustom, Label } from "../Styles/Styleds";

const ButtonsPorcent = [
  { id: 1, value: 5 },
  { id: 2, value: 10 },
  { id: 3, value: 15 },
  { id: 4, value: 25 },
  { id: 5, value: 50 },
];

const ButtonsArea = ({ label }) => {
  function actveButton({target}) {
    console.log(target);
  }

  return (
    <>
      <Label>{label}</Label>
      <Div>
        {ButtonsPorcent.map((porcent, index) => (
          <Button key={index} id={porcent.id} onClick={actveButton} value={porcent.value}>
            {porcent.value}
            <span>%</span>
          </Button>
        ))}
        <InputsCustom type="number" placeholder="Custom" />
      </Div>
    </>
  );
};
export default ButtonsArea;
