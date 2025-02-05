import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res;
    switch (operation) {
      case "add":
        res = n1 + n2;
        break;
      case "subtract":
        res = n1 - n2;
        break;
      case "multiply":
        res = n1 * n2;
        break;
      case "divide":
        res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
        break;
      default:
        res = null;
    }
    setResult(res);
  };

  return (
    <div style={{ padding: "16px", maxWidth: "400px", margin: "auto", backgroundColor: "#f3f4f6", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>Simple Calculator</h2>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        style={{ border: "1px solid #ccc", padding: "8px", borderRadius: "4px", width: "100%", marginBottom: "8px" }}
      />
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        style={{ border: "1px solid #ccc", padding: "8px", borderRadius: "4px", width: "100%", marginBottom: "16px" }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px", marginBottom: "16px" }}>
        <button onClick={() => handleCalculation("add")} style={{ backgroundColor: "#3b82f6", color: "white", padding: "8px", borderRadius: "4px" }}>+</button>
        <button onClick={() => handleCalculation("subtract")} style={{ backgroundColor: "#ef4444", color: "white", padding: "8px", borderRadius: "4px" }}>-</button>
        <button onClick={() => handleCalculation("multiply")} style={{ backgroundColor: "#10b981", color: "white", padding: "8px", borderRadius: "4px" }}>*</button>
        <button onClick={() => handleCalculation("divide")} style={{ backgroundColor: "#f59e0b", color: "white", padding: "8px", borderRadius: "4px" }}>/</button>
      </div>
      <div style={{ padding: "8px", backgroundColor: "white", borderRadius: "4px", fontSize: "18px", fontWeight: "600" }}>
        {result !== null && <p>Result: {result}</p>}
      </div>
    </div>
  );
}


// import { useState } from 'react';
// import './calculator.css';

// function Calculator() {
//   const [num1, setNum1] = useState('');
//   const [num2, setNum2] = useState('');
//   const [result, setResult] = useState('');

//   const handleOperation = (operator) => {
//     const a = parseFloat(num1);
//     const b = parseFloat(num2);

//     if (isNaN(a) || isNaN(b)) {
//       setResult('Invalid input');
//       return;
//     }

//     let computation;
//     switch (operator) {
//       case '+':
//         computation = a + b;
//         break;
//       case '-':
//         computation = a - b;
//         break;
//       case '*':
//         computation = a * b;
//         break;
//       case '/':
//         if (b === 0) {
//           setResult('Cannot divide by zero');
//           return;
//         }
//         computation = a / b;
//         break;
//       default:
//         computation = 'Invalid operation';
//     }

//     setResult(computation);
//   };

//   return (
//     <div className="calculator">
//       <div className="inputs">
//         <input
//           type="number"
//           value={num1}
//           onChange={(e) => setNum1(e.target.value)}
//           placeholder="Enter first number"
//         />
//         <input
//           type="number"
//           value={num2}
//           onChange={(e) => setNum2(e.target.value)}
//           placeholder="Enter second number"
//         />
//       </div>
      
//       <div className="buttons">
//         <button onClick={() => handleOperation('+')}>Add</button>
//         <button onClick={() => handleOperation('-')}>Subtract</button>
//         <button onClick={() => handleOperation('*')}>Multiply</button>
//         <button onClick={() => handleOperation('/')}>Divide</button>
//       </div>

//       <div className="result">
//         Result: {result}
//       </div>
//     </div>
//   );
// }

// export default Calculator;