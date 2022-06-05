import { useEffect, useState } from "react";

export default function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [calculated, setCalculated] = useState(false);
  const operations = ["/", "*", "+", "-", "."];
  const updateCalc = (value) => {
    if (
      (operations.includes(value) && calc === "") ||
      (operations.includes(value) && operations.includes(calc.slice(-1)))
    ) {
      return;
    }
    if (!operations.includes(value)) {
      setResult(eval(calc + value).toString());
    }

    if (operations.includes(value) && calculated === true) {
      setCalculated(false);
    }

    if (!operations.includes(value) && calculated === true) {
      setCalculated(false);
      setCalc(value);
      return setResult(eval(calc + value).toString());
    }
    setCalc(calc + value);
  };
  const calculate = () => {
    setCalculated(true);
    if (eval(calc) === undefined) {
      return;
    }
    setCalc(eval(calc).toString());
  };
  const clear = () => {
    setCalc("");
    setResult("");
  };
  const del = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "0") updateCalc("0");
    if (e.key === "1") updateCalc("1");
    if (e.key === "2") updateCalc("2");
    if (e.key === "3") updateCalc("3");
    if (e.key === "4") updateCalc("4");
    if (e.key === "5") updateCalc("5");
    if (e.key === "6") updateCalc("6");
    if (e.key === "7") updateCalc("7");
    if (e.key === "8") updateCalc("8");
    if (e.key === "9") updateCalc("9");
    if (e.key === "/") updateCalc("/");
    if (e.key === "*") updateCalc("*");
    if (e.key === "+") updateCalc("+");
    if (e.key === "-") updateCalc("-");
    if (e.key === ".") updateCalc(".");
    if (e.key === "=") calculate();
    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") del();
  });

  return (
    <main>
        <div className="calculator">
      <div className="screen">{calc || "0"}</div>
      <div className="keypad">
        <button className="key" value="7" onClick={() => updateCalc("7")}>
          7
        </button>
        <button className="key" value="8" onClick={() => updateCalc("8")}>
          8
        </button>
        <button className="key" value="9" onClick={() => updateCalc("9")}>
          9
        </button>
        <button className="del" id="del" onClick={del}>
          DEL
        </button>
        <button className="key" value="4" onClick={() => updateCalc("4")}>
          4
        </button>
        <button className="key" value="5" onClick={() => updateCalc("5")}>
          5
        </button>
        <button className="key" value="6" onClick={() => updateCalc("6")}>
          6
        </button>
        <button className="operator" value="+" onClick={() => updateCalc("+")}>
          +
        </button>
        <button className="key" value="1" onClick={() => updateCalc("1")}>
          1
        </button>
        <button className="key" value="2" onClick={() => updateCalc("2")}>
          2
        </button>
        <button className="key" value="3" onClick={() => updateCalc("3")}>
          3
        </button>
        <button className="operator" value="-" onClick={() => updateCalc("-")}>
          -
        </button>
        <button className="key" value="." onClick={() => updateCalc(".")}>
          .
        </button>
        <button className="key" value="0" onClick={() => updateCalc("0")}>
          0
        </button>
        <button className="operator" value="/" onClick={() => updateCalc("/")}>
          /
        </button>
        <button className="operator" value="x" onClick={() => updateCalc("*")}>
          x
        </button>
        <button className="reset" id="reset-key" value="reset" onClick={clear}>
          RESET
        </button>
        <button
          className="equals-key"
          id="equals-key"
          value="="
          onClick={calculate}
        >
          =
        </button>
      </div>
      </div>
    </main>
  );
}
