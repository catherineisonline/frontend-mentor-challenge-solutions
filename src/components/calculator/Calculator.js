import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import Screen from "./Screen";
import Keypad from "./Keypad";
export default function Calculator() {
  const [calc, setCalc] = useState("");
  const [oneValue, setOneValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState("");
  const [calculated, setCalculated] = useState(false);
  const operations = ["/", "*", "+", "-", "."];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const ref = React.createRef();

  const updateCalc = (value) => {
    const displayValue = ref.current;

    if (
      (operations.includes(value) && calc === "") ||
      (operations.includes(value) && operations.includes(calc.slice(-1)))
    ) {
      return;
    }
    if (!operations.includes(value)) {
      setCalc(eval(calc + value).toString());

      if (value === "0" && calc.length === 0) {
        return;
      }
      if (calc.length > 7) {
        displayValue.style.fontSize = "2.5rem";
      }
      if (calc.length >= 11) {
        displayValue.style.width = "fit-content";
        displayValue.style.overflow = "hidden";
      }
    }
    //When you did calculation but continue it with the same number
    if (operations.includes(value) && calculated === true) {
      setCalculated(false);
    }
    //Reset values if operation was finished and we start with a new number instead of operation
    if (!operations.includes(value) && calculated === true) {
      setCalculated(false);
      return setCalc(value);
    }

    setCalc((current) => [...current, value]);
    const findOctalLiteralArray = [...calc, value];
    console.log(findOctalLiteralArray);
    if (findOctalLiteralArray[findOctalLiteralArray.length - 1] === "0") {
      return clear();
    }
    // if(findOctalLiteralArray.includes(".")) {

    // }

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
    // setCalc("");
    setCalculated(false);
    setCalc("");
  };
  const del = () => {
    if (calc === "") {
      return;
    }
    const displayValue = ref.current;
    if (calc.length < 7) {
      displayValue.style.fontSize = "3.3rem";
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const onKeyDown = (e) => {
    if (operations.includes(e.key) || numbers.includes(e.key)) {
      updateCalc(e.key);
    } else if (e.key === "Enter" || e.key === "=") {
      calculate();
    } else if (e.key === "Backspace") del();
  };
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  });
  return (
    <main>
      <article className="calculator">
        <Screen ref={ref} calc={calc} />
        <Keypad
          updateCalc={updateCalc}
          calculate={calculate}
          del={del}
          clear={clear}
          onKeyDown={onKeyDown}
        />
      </article>
    </main>
  );
}
