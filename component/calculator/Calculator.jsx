import React, { useRef, useState } from "react";
import classes from "./Calculator.module.css";

export default function Calculator() {
  const numOneRef = useRef();
  const numTwoRef = useRef();
  const [result, setResult] = useState();
  const addHandler = (e) => {
    e.preventDefault();

    setResult(
      parseInt(numOneRef.current.value) + parseInt(numTwoRef.current.value)
    );
    resetField();
  };
  const minusHandler = (e) => {
    e.preventDefault();
    setResult(
      parseInt(numOneRef.current.value) - parseInt(numTwoRef.current.value)
    );
    resetField();
  };
  const multipleHandler = (e) => {
    e.preventDefault();
    setResult(
      parseInt(numOneRef.current.value) * parseInt(numTwoRef.current.value)
    );
    resetField();
  };
  const divideHandler = (e) => {
    e.preventDefault();
    setResult(
      parseInt(numOneRef.current.value) / parseInt(numTwoRef.current.value)
    );
    resetField();
  };
  const resetField = () => {
    numOneRef.current.value = "";
    numTwoRef.current.value = "";
  };
  return (
    <div className={classes.container}>
      <form>
        <label>Num1</label>
        <input type="number" placeholder="Write Number one" ref={numOneRef} />
        <label>Num2</label>
        <input type="number" placeholder="Write number two" ref={numTwoRef} />
        <button onClick={addHandler}>+</button>
        <button onClick={minusHandler}>-</button>
        <button onClick={multipleHandler}>*</button>
        <button onClick={divideHandler}>/</button>
      </form>
      {result && <span>Result:{result}</span>}
    </div>
  );
}
