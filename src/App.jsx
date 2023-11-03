import { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState("");

  const handleClear = () => {
    setExpression("0");
    setAnswer("");
  };

  const handleDecimal = (e) => {
    const entity = expression.split(/[-+*/]/).pop();
    if (entity.includes(".")) return;
    if (expression.charAt(expression.length - 1) === ".") return;
    setExpression(expression + e.target.value);
  };

  const handleNumber = (e) => {
    if (expression === "0") {
      setExpression(e.target.value);
    } else {
      setExpression(expression + e.target.value);
    }
  };

  const handleOperator = (e) => {
    let newExpression;

    if (answer !== "") {
      setExpression(answer + e.target.value);
      setAnswer("");
    } else if (expression.charAt(expression.length - 1).match(/[+*/]/)) {
      newExpression = expression.slice(0, expression.length - 1);

      setExpression(newExpression + e.target.value);
    } else if (
      expression.charAt(expression.length - 1) === "-" &&
      expression.charAt(expression.length - 2).match(/[-+*/]/)
    ) {
      newExpression = expression.slice(0, expression.length - 2);
      setExpression(newExpression + e.target.value);
    } else {
      setExpression(expression + e.target.value);
    }
  };

  const handleMinus = (e) => {
    if (answer !== "") {
      setExpression(answer + e.target.value);
      setAnswer("");
    } else if (expression.charAt(expression.length - 1) === "-") {
      return;
    } else {
      setExpression(expression + e.target.value);
    }
  };

  const handleEquals = () => {
    setAnswer(eval(expression));
    setExpression("");
  };

  return (
    <>
      <div id="container">
        <div id="calculator">
          <div id="display">
            <div id="answer">{answer}</div>
            <div id="expression">{expression}</div>
          </div>
          <button onClick={handleClear} className="buttons" id="clear">
            Clear
          </button>
          <button
            value="."
            onClick={handleDecimal}
            className="buttons"
            id="decimal"
          >
            .
          </button>
          <button
            value="/"
            onClick={handleOperator}
            className="buttons"
            id="divide"
          >
            /
          </button>
          <button
            value="7"
            onClick={handleNumber}
            className="buttons"
            id="seven"
          >
            7
          </button>
          <button
            value="8"
            onClick={handleNumber}
            className="buttons"
            id="eight"
          >
            8
          </button>
          <button
            value="9"
            onClick={handleNumber}
            className="buttons"
            id="nine"
          >
            9
          </button>
          <button
            value="*"
            onClick={handleOperator}
            className="buttons"
            id="multiply"
          >
            x
          </button>
          <button
            value="4"
            onClick={handleNumber}
            className="buttons"
            id="four"
          >
            4
          </button>
          <button
            value="5"
            onClick={handleNumber}
            className="buttons"
            id="five"
          >
            5
          </button>
          <button value="6" onClick={handleNumber} className="buttons" id="six">
            6
          </button>
          <button
            value="+"
            onClick={handleOperator}
            className="buttons"
            id="add"
          >
            +
          </button>
          <button value="1" onClick={handleNumber} className="buttons" id="one">
            1
          </button>
          <button value="2" onClick={handleNumber} className="buttons" id="two">
            2
          </button>
          <button
            value="3"
            onClick={handleNumber}
            className="buttons"
            id="three"
          >
            3
          </button>
          <button
            value="-"
            onClick={handleMinus}
            className="buttons"
            id="subtract"
          >
            _
          </button>
          <button
            value="0"
            onClick={handleNumber}
            className="buttons"
            id="zero"
          >
            0
          </button>
          <button
            value="="
            onClick={handleEquals}
            className="buttons"
            id="equals"
          >
            =
          </button>
        </div>
      </div>
      <h4>Designed and coded by</h4>
      <h4> Gregory Aniobi </h4> <h4>chunogreg@gmail.com</h4>
    </>
  );
}

export default App;
