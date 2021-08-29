import React, { useContext } from "react";
import { AllContext } from "../Context/TheContext";
import { Button, Div, InputsCustom, Label } from "../Styles/Styleds";

const ButtonsPorcent = [
  { id: 1, n:"5", value: '5' },
  { id: 2, n:"10", value: '10' },
  { id: 3, n:"15", value: '15' },
  { id: 4, n:"25", value: '25' },
  { id: 5, n:"50", value: '50' },
];

const ButtonsArea = ({ label }) => {
  const {tip,setTip,setTipCustom} = useContext(AllContext)
  // const [active,setActive] = useState(true)
  

  function actveButton({target}) {
    setTip(target.value)
    setTipCustom(target.value)
  }

  return (
    <>
      <Label>{label}</Label>
      <Div>
        {ButtonsPorcent.map((porcent, index) => (
          <Button key={porcent.id} id={porcent.id} onClick={actveButton} value={porcent.value} onChange={({target}) => console.log(target.value)}>
            {porcent.n}%
          </Button>
        ))}
        <InputsCustom type="number" placeholder="Custom" onChange={actveButton} value={tip}/>
      </Div>
    </>
  );
};
export default ButtonsArea;
