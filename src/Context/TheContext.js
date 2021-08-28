import React, { createContext, useState } from "react";

export const AllContext = createContext();

export const ValuesProvider = ({ children }) => {
  const [total, setTotal] = useState(0.00)
  const [totalPerson, setTotalPerson] = useState(0.00)

  const [bill, setBill] = useState(0.00);
  const [tip, setTip] = useState('');
  const [tipCustom, setTipCustom] = useState(0);
  const [people, setPeople] = useState(0);
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  console.log(bill)
  console.log(people)
  console.log(tip)
  console.log(tipCustom)

  return (
    <AllContext.Provider
      value={{
        total,
        setTotal,
        totalPerson,
        setTotalPerson,
        bill,
        setBill,
        tip,
        setTip,
        tipCustom,
        setTipCustom,
        people,
        setPeople,
        error,
        setError,
        error2,
        setError2,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};
