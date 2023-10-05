import React from 'react';
import { useState } from "react";
import './App.css';

function CalcButton({label, onClick, buttonClassName = "CalcButton"}) {
  return (
    <button className={buttonClassName} onClick ={onClick}>
      {label}
    </button>
  );
}


function CalcDisplay({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>    
  );
}

export default function App() {

  var[disp, setDisp] = useState(0);
  var[num1, setNum1] = useState(null);
  var[oper, setOper] = useState(null);
  var[num2, setNum2] = useState(null);
  var equalizer = 0;

function Kalkulator(){
  if (oper === "+") {
    equalizer = parseFloat(num1) + parseFloat(num2);
    setNum1(equalizer);
    setDisp(equalizer);
    setNum2(null);
  }
  else if (oper === "-") {
    equalizer = parseFloat(num1) - parseFloat(num2);
    setNum1(equalizer);
    setDisp(equalizer);
    setNum2(null);
  } 
  else if (oper === "*") {
    equalizer = parseFloat(num1) * parseFloat(num2);
    setNum1(equalizer);
    setDisp(equalizer);
    setNum2(null);
  } 
  else if (oper === "/") {
    equalizer = parseFloat(num1) / parseFloat(num2);
    setNum1(equalizer);
    setDisp(equalizer);
    setNum2(null);
  }
}

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    var num = value;
    if(oper === null) {
      if(num1 !== null) {
        num = num1 + num;
      }
      setNum1(num);            
      setDisp(num);            
    } else {
      if(num2 !== null) {
        num = num2 + num;
      }
      setNum2(num);            
      setDisp(num);       }
  }

  const operatorClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOper(value);
    Kalkulator();
  }

  const equalClickHandler = (e) => {  
      Kalkulator();
    }
  const clearClickHandler = (e) => {
    e.preventDefault();

    setDisp(0);
    setNum1(null);
    setOper(null);
    setNum2(null);
  }

  const nameClickHandler = (e) => {
    e.preventDefault();
    // Action to display your name
    setDisp("JARED JOHN C. LUCAS BSIT 3A");
  }

  return (
    <div className="App">
      <div className="CalcContainer">
        <h1>Mini Calculator</h1>
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
        <CalcButton label={7} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={8} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={9} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"-"} onClick={operatorClickHandler}/>
          <CalcButton label={4} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={5} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={6} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"+"} onClick={operatorClickHandler}/>
          <CalcButton label={3} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={2} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={1} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"="} onClick={equalClickHandler}/>
          <CalcButton label={"C"} onClick={clearClickHandler}/>
          <CalcButton label={0} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"}/>
          <CalcButton label={"*"} onClick={operatorClickHandler}/>
          <CalcButton label={"/"} onClick={operatorClickHandler}/>
        </div>
        <div className="Name">
          <CalcButton label={"LUCAS"} onClick={nameClickHandler} buttonClassName={"CalcButtonName"}/>
        </div>
      </div>
    </div>
  );
}
