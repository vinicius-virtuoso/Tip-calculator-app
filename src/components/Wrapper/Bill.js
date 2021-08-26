import React from "react";
import BoxButtons from "../Form/BoxButtons";
import Input from "../Form/Input";
import styles from "./Bill.module.css";

const Bill = () => {
  const [bill, setBill] = React.useState('0.00');
  const [error, setError] = React.useState(null);
  const [people, setPeople] = React.useState('0');
  const [error2, setError2] = React.useState(null);

  const onSubmit = (event) => {
    event.preventDefault()
  }

  const validate = () =>{
    setError(true);
    if (bill === null) {
      setError(true);
    } else if (bill === "0.00") {
      setError(true);
    } else if(bill === "0.0"){
      setError(true);
    } else if(bill === "0"){
      setError(true);
    } else {
      setError(false);
    }
    
    
    
  }
  const validate2 = () =>{
    setError2(true);
    if (people === 0 || people === "") {
      setError2(true);
    } else if(people === "0"){
      setError2(true);
    } else {
      setError2(false);
    }
  }

  return (
    <form className={styles.Bill} onSubmit={onSubmit}>
      <Input
        id="bill"
        label="Bill"
        value={bill}
        onChange={({ target }) => setBill(target.value)}
        onBlur={validate}
        error={error}
        min="0.01"
        step="0.01"
        required
      />
      <BoxButtons/>
      <Input
        id="people"
        label="Number of People"
        value={people}
        onChange={({ target }) => setPeople(target.value)}
        onBlur={validate2}
        error={error2} 
        min="1"
        step="0"
      />
    </form>
  );
};

export default Bill;
