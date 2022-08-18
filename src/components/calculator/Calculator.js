import { useState } from "react";
import { useRef } from "react";
import React from "react";
import { useEffect } from "react";
import Screen from "./Screen";
import Keypad from "./Keypad";
export default function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [displayValue, setDisplatValue] = useState("");
  const [calculated, setCalculated] = useState(false);
  const operations = ["/", "*", "+", "-", "."];
  // const ref = useRef(null);
  const ref = React.createRef();

  // const ref = ref.current;
  // const currentOperation = ref.current;
  const regeX = /[/*+-.]/;
  //update calculator screen
  const updateCalc = (value) => {
    if (
      (operations.includes(value) && calc === "") ||
      (operations.includes(value) && operations.includes(calc.slice(-1)))
    ) {
      return;
    }
    if (!operations.includes(value)) {
      setResult(eval(calc + value).toString());
      const screenText = ref.current;
      console.log(screenText);
      if (calc.length > 7) {
        screenText.style.fontSize = "2.5rem";
      }
      if (calc.length >= 11) {
        screenText.style.width = "fit-content";
        screenText.style.overflow = "hidden";
      }
    }
    // if (operations.includes(value)) {
    //   console.log(value);
    // }
    if (operations.includes(value) && calculated === true) {
      setCalculated(false);
    }

    if (!operations.includes(value) && calculated === true) {
      setCalculated(false);

      setCalc(value);
      return setResult(eval(calc + value).toString());
    }
    // setCalc(calc + value);
    setCalc((current) => [...current, value]);
    // setCalc(calc + value);
    setCalc(calc + value);
    // setCalc(Number(calc));
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
    const screenText = ref.current;
    if (calc.length < 7) {
      screenText.style.fontSize = "3.3rem";
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };
  document.addEventListener("keydown", (e) => {
    if (e.key === "0") updateCalc("0");
    else if (e.key === "1") updateCalc("1");
    else if (e.key === "2") updateCalc("2");
    else if (e.key === "3") updateCalc("3");
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
    if (!e.key) return;
  });
  // const calculatorButtons = [
  //   [7, 8, 9, "x"],
  //   [4, 5, 6, "+"],
  //   [1, 2, 3, "-"],
  //   [0, ".", "/", "*"],
  //   ["reset", "="],
  // ];
  return (
    <main>
      <article className="calculator">
        <Screen ref={ref} calc={calc} />
        <Keypad
          updateCalc={updateCalc}
          calculate={calculate}
          del={del}
          clear={clear}
        />
      </article>
    </main>
  );
}
