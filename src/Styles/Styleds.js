import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle  = createGlobalStyle`
  :root {
    --Strong-cyan: hsl(172, 67%, 45%);
    --Strong-cyan-2: rgba(45, 236, 211, 0.877);
    --Very-dark-cyan: hsl(183, 100%, 15%);
    --Dark-grayish-cyan: hsl(186, 14%, 43%);
    --Dark-grayish-cyan-2: hsl(184, 14%, 56%);
    --Light-grayish-cyan: hsl(185, 41%, 84%);
    --Light-grayish-cyan-2: hsl(189, 41%, 97%);
    --White: hsl(0, 0%, 100%);
    --White-dark: #9ebbbd;
  }
  * {
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family: 'Space Mono', monospace;
      
  }
  body {
      background: var(--Light-grayish-cyan);
      text-align:center;
      font-family: 'Space Mono', monospace;
      display: flex;
      align-items:center;
      justify-content: center;
      flex-direction: column;
      height:100vh;
      width:100%;
      @media(max-width: 800px) {
        height:100%;
      }
  }
    
`;

export const Logo = styled.img`
  display: block;
  width:100%;
  max-width:90px;
  margin: 3rem auto;

`;


export const Content = styled.div`
  width: 100%;
  max-width: 1220px;
  height: auto;
  border-radius: 2rem;
  background: var(--White);
  padding:40px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:20px;

  @media(max-width: 800px) {
    grid-template-columns: 1fr;
    padding:20px;
    border-radius: 1.5rem 1.5rem 0 0;
  }
`;

export const Accessible = styled.h1`
  width:100%;
  visibility: visible;
  position:absolute;
  left: -3000px;
`;

export const Form = styled.form`
  width:100%;
`;

export const Label = styled.label`
  display:flex;
  text-align:left;
  justify-content:space-between;
  width:100%;
  font-size:1.3rem;
  font-weight:600;
  color:var(--Dark-grayish-cyan-2);
  position: relative;

  &:nth-of-type(2){
    margin-top:30px;
  }
  &:nth-of-type(3) {
    margin-top:30px;
  }
  &:nth-of-type(1)::after {
    content: ' ';
    width: 13px;
    height:16px;
    background-image:url('../img/icon-dollar.svg');
    background-position:center;
    background-repeat:no-repeat;
    background-size:100%;
    position: absolute;
    top:165%;
    left:5%;
    z-index:1000;
  }
  &:nth-of-type(3)::after {
    content: ' ';
    width: 13px;
    height:16px;
    background-image:url('../img/icon-person.svg');
    background-position:center;
    background-repeat:no-repeat;
    background-size:100%;
    position: absolute;
    top:165%;
    left:5%;
    z-index:1000;
  }
  span {
    transition:.3s;
    color:orange;
  }
  @media(max-width: 800px) {
    font-size: 1rem;
  }
`;

export const Div = styled.div`
  display:grid;
  grid-template-columns: repeat(3,1fr);
  gap:1rem;

  @media(max-width: 800px) {
    gap:.5rem;
    align-items:center;
    justify-content:center;
    grid-template-columns: repeat(3,1fr);
  }
`

export const Inputs = styled.input`
  width: 100%;
  border: 2px solid transparent;
  background:var(--Light-grayish-cyan-2);
  padding: .5rem 2rem;
  text-align:right;
  border-radius: .4rem;
  line-height:1.5;
  font-size:24px;
  font-weight: 600;
  color: var(--Very-dark-cyan);
  z-index:99;
  cursor: pointer;
  transition:.3s;
  &::placeholder {
    font-size:24px;
    line-height:1;
    font-weight: 600;
    color:var(--White-dark);
  }
  &::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }
  &[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;
  }
  &:hover,
  &:focus {
    outline:none;
    border: 2px solid var(--Strong-cyan);
  }
  &.error {
    border: 2px solid orange;
  }
`;

export const InputsCustom = styled.input`
  width: 100%;
  max-width: 195px;
  min-width: 160px;
  border: 2px solid transparent;
  background:var(--Light-grayish-cyan-2);
  display:inline-block;
  border-radius: .4rem;
  padding: .5rem .5rem;
  font-size:2.5rem;
  font-weight:600;
  text-align:right;
  cursor: pointer;
  transition: .3s;
  outline:none;
  color: var(--Very-dark-cyan);
  &::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }
  &[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;
  }
  &::placeholder {
    font-size:2rem;
    text-align:center;
  }
  &:hover,
  &:focus {
    border: 2px solid var(--Strong-cyan);
  }
  @media(max-width: 800px) {
    max-width: 100px;
    min-width: 90px;
    padding: 0.5rem 0.5rem;
    font-size: 1.5rem;
    &::placeholder {
    font-size:1.3rem;
    text-align:center;
  }
  }
`;

export const Button = styled.button`
    display: inline-block;
    width: 100%;
    max-width: 195px;
    min-width: 160px;
    border: 0;
    border-radius: .4rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 2.5rem;
    font-weight: 600;

  background: var(--Very-dark-cyan);
  color: var(--White);
  transition: .3s;

  &:hover{
    color:var(--Very-dark-cyan);
    background: var( --Light-grayish-cyan);
  }
  &:focus {
    color:var(--Very-dark-cyan);
    background: var(--Strong-cyan);
  }
  @media(max-width: 800px) {
    max-width: 100px;
    min-width: 90px;
    padding: 0.5rem .5rem;
    font-size: 1.5rem;
  }
`;


// RESUME 

export const ResumeValue = styled.div`
  width:100%;
  height:100%;
  background: var(--Very-dark-cyan);
  border-radius: 2rem;
  display: grid;
  grid-template-columns:auto 1fr;
  align-items:center;
  justify-content:space-between;
  padding:2rem 2rem 4rem 2rem;
  gap:20px;
  text-align:left;

  grid-template-areas: 
  'one spanOne'
  'Two spanTwo'
  'button button'
  ;

  p {
    font-size:1.2rem;
    color:var(--Strong-cyan);
    grid-area: one;
    color:var(--White);
    &:nth-of-type(2) {
      grid-area: Two;
    }
    &::after {
      content: '/ Person';
      display:block;
      color:var(--Dark-grayish-cyan-2);
      font-size:1rem;
    }
  }
  span {
    text-align:right;
    font-size:4rem;
    font-weight:700;
    color:var(--Strong-cyan);
    grid-area: spanOne;
    &:nth-of-type(2) {
      grid-area: spanTwo;
    }
    
  }
  button {
    margin-top:90px;
    grid-area: button;
    border:0;
    padding:.5rem 0;
    border-radius: .4rem;
    cursor: pointer;
    background:var(--Strong-cyan);
    font-size:1.5rem;
    font-weight:600;
    color:var(--Very-dark-cyan);
    letter-spacing:.1rem;
    transition:.3s;

    &:hover,
    &:active {
      background: var(--Light-grayish-cyan);
    }
  }
  @media(max-width: 800px) {
    width:100%;
    height:100%;
    background: var(--Very-dark-cyan);
    border-radius: 2rem;
    display: grid;
    grid-template-columns:auto 1fr;
    align-items:center;
    justify-content:space-between;
    padding:1rem;
    gap:5px;
    text-align:left;
    border-radius:1.5rem;

    button {
      margin-top:70px;
    }
    span {
      font-size:2rem;
    }
  }
`
export const Attribution = styled.div`
  font-size: 14px; 
  text-align: center;
  margin-top:5px;

  a { 
    color: hsl(228, 45%, 44%); 
  }
`