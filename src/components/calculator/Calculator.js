import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import Screen from "./Screen";
import Keypad from "./Keypad";
export default function Calculator() {
  const [calc, setCalc] = useState("");
  const [calculated, setCalculated] = useState(false);
  const operations = ["/", "*", "+", "-", "."];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const ref = React.createRef();

  const updateCalc = (value) => {
    const displayValue = ref.current;
    //************* BEFORE CALCULATION *************//
    if (value === "0" && calc === "0") {
      return clear();
    } else if (
      (operations.includes(value) && calc === "") ||
      (operations.includes(value) && operations.includes(calc.slice(-1)))
    ) {
      return;
    } else if (!operations.includes(value)) {
      setCalc((+calc + +value).toString());

      if (calc.length > 7) {
        displayValue.style.fontSize = "2.5rem";
      }
      if (calc.length === 11 && !operations.includes(value)) {
        displayValue.style.width = "fit-content";
        displayValue.style.overflow = "hidden";
        return setCalc(calc.toString());
      } else if (calc.length === 11 && operations.includes(value)) {
        console.log("hi");
      } else {
        console.error();
      }
    }

    //************* AFTER CALCULATION *************//
    //When you did calculation but continue operation with the result number
    if (calculated === true && operations.includes(value)) {
      setCalculated(false);
    }
    //When you did calculation but start with a new number instead of operation
    else if (calculated === true && !operations.includes(value)) {
      setCalculated(false);
      return setCalc(value);
    } else if (calculated === true && value === "0") {
      setCalculated(false);
      return setCalc("");
    } else {
      console.error();
    }
    setCalc(calc + value);
  };

  const calculate = () => {
    if (eval(calc) === undefined) {
      return;
    }
    setCalculated(true);
    setCalc(eval(calc).toString());
  };
  const clear = () => {
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
