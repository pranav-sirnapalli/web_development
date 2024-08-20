import React, { useState } from "react";
import "./Calculator.css"; 

const Calculator = () => {
  const [display, setDisplay] = useState(""); 

  const handleDigitInput = (digit) => {
    setDisplay((prevDisplay) => prevDisplay + digit);
  };

  const handleOperationInput = (operation) => {
    if (operation === "=") {
      try {
        setDisplay(eval(display)); 
      } catch (error) {
        setDisplay("Error");
      }
    } else {
      setDisplay((prevDisplay) => prevDisplay + operation);
    }
  };

  const handleClear = () => {
    setDisplay("");
  };

  return (
    <div className="calculator-container">
      <h2>Calculator</h2>
      <div className="calculator">
        <div className="display">{display || "0"}</div> 
        <div className="buttons">
          <button onClick={() => handleClear()} className="clear-button">
            C
          </button>
          <button onClick={() => handleOperationInput("/")} className="operation-button">
            /
          </button>
          <button onClick={() => handleDigitInput("7")}>7</button>
          <button onClick={() => handleDigitInput("8")}>8</button>
          <button onClick={() => handleDigitInput("9")}>9</button>
          <button onClick={() => handleOperationInput("*")} className="operation-button">
            *
          </button>
          <button onClick={() => handleDigitInput("4")}>4</button>
          <button onClick={() => handleDigitInput("5")}>5</button>
          <button onClick={() => handleDigitInput("6")}>6</button>
          <button onClick={() => handleOperationInput("-")} className="operation-button">
            -
          </button>
          <button onClick={() => handleDigitInput("1")}>1</button>
          <button onClick={() => handleDigitInput("2")}>2</button>
          <button onClick={() => handleDigitInput("3")}>3</button>
          <button onClick={() => handleOperationInput("+")} className="operation-button">
            +
          </button>
          <button onClick={() => handleDigitInput("0")} className="zero-button">
            0
          </button>
          <button onClick={() => handleOperationInput("=")} className="equal-button">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
