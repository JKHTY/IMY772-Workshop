import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { input_check, output_check, math_test, convert_to_d, convert_to_h } from './function';

const App = () => {
    const [input, setInput] = useState('');
    const [o1, setO1] = useState('');
    //const [o2, setO2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
      if (result && !operator) {
          setInput(value);
          setResult('');
      } else {
        if(input.length < 3){
            setInput(input + value);
        }
      }
    };

    const handleOperatorClick = (op) => {
      if (input) {
        if (!o1) {
          setO1(input);
          setInput('');
          setOperator(op);
        } else if (o1 && operator) {
          const decO1 = convert_to_d(o1);
          const decO2 = convert_to_d(input);

          const decResult = math_test(decO1, decO2, operator);
          const hexResult = convert_to_h(decResult);
          const tempResult = output_check(hexResult).toUpperCase();

          setO1(tempResult);
          setInput('');
          setOperator(op);
          setResult(tempResult);
        }
      }
      else if(result)
      {
        setO1(result);
        setInput('');
        setOperator(op);
      }
    };

    const handleClearClick = () => {
        setInput('');
        setO1('');
        setOperator('');
        setResult('');
    };

    const handleEqualClick = () => {
      if (o1 && operator && input) {
        const decO1 = convert_to_d(o1);
        const decO2 = convert_to_d(input);

        const decResult = math_test(decO1, decO2, operator);
        const hexResult = convert_to_h(decResult);
        const finalResult = output_check(hexResult).toUpperCase();

        setResult(finalResult);
        setInput(finalResult.slice(0, 6));
        setO1('');
        setOperator('');
      }
    };

  return (
    <div className="calculator">
      <h1>Hexadecimal Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'].map((char) => (
          <button key={char} onClick={() => handleButtonClick(char)}>{char}</button>
        ))}
        {['+', '-', '*', '/'].map((op) => (
          <button key={op} onClick={() => handleOperatorClick(op)}>{op}</button>
        ))}
        <button onClick={handleClearClick}>Clear</button>
        <button onClick={handleEqualClick}>=</button>
      </div>
      <div>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
}


export default App;
