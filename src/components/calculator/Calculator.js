import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import Screen from "./Screen";
import Keypad from "./Keypad";
export default function Calculator() {
  const [calc, setCalc] = useState("");
  // const [result, setResult] = useState("");
  const [calculated, setCalculated] = useState(false);
  const operations = ["/", "*", "+", "-", "."];
  const ref = React.createRef();

  const updateCalc = (value) => {
    const screenText = ref.current;
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
        screenText.style.fontSize = "2.5rem";
      }
      if (calc.length >= 11) {
        screenText.style.width = "fit-content";
        screenText.style.overflow = "hidden";
      }
    }

    if (operations.includes(value) && calculated === true) {
      setCalculated(false);
    }

    if (!operations.includes(value) && calculated === true) {
      setCalculated(false);

      setCalc(value);
      return setCalc(eval(calc + value).toString());
    }

    setCalc((current) => [...current, value]);
    const findOctalLiteralArray = [...calc, value];

    if (findOctalLiteralArray[findOctalLiteralArray.length - 1] === "0") {
      return clear();
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
    setCalc("");
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

  const onKeyDown = (e) => {
    if (e.key === "0") updateCalc("0");
    else if (e.key === "1") updateCalc("1");
    else if (e.key === "2") updateCalc("2");
    else if (e.key === "3") updateCalc("3");
    if (e.key === "4") updateCalc("4");
    if (e.key === "5") updateCalc("5");
    if (e.key === "6") updateCalc("6");
    if (e.key === "7") {
      return updateCalc("7");
    } else if (e.key === "8") updateCalc("8");
    else if (e.key === "9") updateCalc("9");
    else if (e.key === "/") updateCalc("/");
    else if (e.key === "*") updateCalc("*");
    else if (e.key === "+") updateCalc("+");
    else if (e.key === "-") updateCalc("-");
    else if (e.key === ".") updateCalc(".");
    if (e.key === "Enter" || e.key === "=") {
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
