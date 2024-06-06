import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { input_check, output_check, math_test, convert_to_d, convert_to_h } from './function';

const App = () => {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [hexResult, setHexResult] = useState('');

  const handleCalculate = () => {
      if (input_check(input1) === 'correct' && input_check(input2) === 'correct') {
          const dec1 = convert_to_d(input1);
          console.log(dec1);
          const dec2 = convert_to_d(input2);
          console.log(dec2);
          const res = math_test(dec1, dec2, operator);
          const hexRes = convert_to_h(res);
          const finalres = output_check(hexRes);
          setResult(finalres);
          //setHexResult(finalres);
      } else {
          alert('Invalid input');
      }
  };
  return (
//     <div className="App">
//     <h1>Hexadecimal Calculator</h1>
//     <div>
//         <input
//             type="text"
//             value={input1}
//             onChange={(e) => setInput1(e.target.value)}
//             placeholder="Hexadecimal Input 1"
//         />
//         <select onChange={(e) => setOperator(e.target.value)}>
//             <option value="+">+</option>
//             <option value="-">-</option>
//             <option value="*">*</option>
//             <option value="/">/</option>
//         </select>
//         <input
//             type="text"
//             value={input2}
//             onChange={(e) => setInput2(e.target.value)}
//             placeholder="Hexadecimal Input 2"
//         />
//         <button onClick={handleCalculate}>Calculate</button>
//     </div>
//     <div>
//         <h2>Result in Decimal: {result}</h2>
//         <h2>Result in Hexadecimal: {hexResult}</h2>
//     </div>
// </div>
<div>
<h1>Hexadecimal Calculator</h1>
<input
    type="text"
    value={input1}
    onChange={(e) => setInput1(e.target.value.toUpperCase().slice(0, 3))}
    placeholder="Hex Value 1"
/>
<select value={operator} onChange={(e) => setOperator(e.target.value)}>
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
</select>
<input
    type="text"
    value={input2}
    onChange={(e) => setInput2(e.target.value.toUpperCase().slice(0, 3))}
    placeholder="Hex Value 2"
/>
<button onClick={handleCalculate}>Calculate</button>
<div>
    <h2>Result: {result}</h2>
</div>
</div>
  );
}


export default App;
