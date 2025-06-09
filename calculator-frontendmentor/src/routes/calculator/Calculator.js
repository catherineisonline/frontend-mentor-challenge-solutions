import { useState } from "react";
import React from "react";
import { useEffect } from "react";
import Screen from "./Screen";
import Keypad from "./Keypad";


export default function Calculator() {
  const [calc, setCalc] = useState(""); // State variables for the calculator value
  const [calculated, setCalculated] = useState(false); // State variable to track whether calculation is done
  const operations = ["/", "*", "+", "-", "."]; // Array of operations
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; // Array of numbers
  const ref = React.createRef(); // Reference for the calculator display

  const updateCalc = (value) => {
    const displayValue = ref.current;
    // ************* BEFORE CALCULATION ************* //
    if (value === "0" && calc === "0") {
      // Wwhen current value AND total calculation value is zero, clear the calculator
      return clear();
    } else if (
      (operations.includes(value) && calc === "") || //If input value can be found in the operations array AND total calculation is empty OR
      (operations.includes(value) && operations.includes(calc.slice(-1)))  // If input value can be found in the operations array AND the current calculated value's last character can be found in the operations array (so if the last character used might be a value from the operations e.g. if I already wrote plus, it would be the last character)

    ) {
      return null; //Then do nothing

    }
    // Check if the user already used dots in a single number
    else if (([...calc].includes(".") && value === ".")) {
      return null;
    }
    else if (!operations.includes(value)) {
      // If the input is a number, perform addition with the current value
      setCalc((+calc + +value).toString());

      if (calc.length > 7) {
        displayValue.style.fontSize = "2.5rem"; // Reduce font size if the number gets too long
      }
      if (calc.length === 11 && !operations.includes(value)) {
        displayValue.style.width = "fit-content"; // Adjust display width to prevent overflow
        displayValue.style.overflow = "hidden";
        return setCalc(calc.toString());
      } else if (calc.length === 11 && operations.includes(value)) {
        console.log("hi"); // Placeholder code (not explained)
      } else {
        console.error(); // Placeholder code (not explained)
      }
    }

    // ************* AFTER CALCULATION ************* //
    // Check if calculation has been done and handle different scenarios accordingly
    if (calculated === true && operations.includes(value)) {
      setCalculated(false); // When continuing operation with the result number
    } else if (calculated === true && !operations.includes(value)) {
      setCalculated(false); // When starting with a new number after calculation
      return setCalc(value);
    } else if (calculated === true && value === "0") {
      setCalculated(false); // When starting with "0" after calculation
      return setCalc("");
    } else {
      console.error(); // Placeholder code (not explained)
    }
    setCalc(calc + value); // Update the calculator value with the input value
  };

  const calculate = () => {
    try {
      eval(calc);
      setCalculated(true); // Set calculated flag to true
      setCalc(eval(calc).toString()); // Calculate and update the calculator value with the result
    }
    catch {
      return null;
    }
  };

  const clear = () => {
    setCalculated(false); // Clear the calculated flag
    setCalc(""); // Clear the calculator value
  };

  const del = () => {
    if (calc === "") {
      return; // Check for empty calculator value and return without deletion
    }
    const displayValue = ref.current;
    if (calc.length < 7) {
      displayValue.style.fontSize = "3.3rem"; // Restore font size after deletion
    }

    const value = calc.slice(0, -1); // Remove the last character from the calculator value
    setCalc(value); // Update the calculator value with the modified value
  };

  const onKeyDown = (e) => {
    if (operations.includes(e.key) || numbers.includes(e.key)) {
      updateCalc(e.key); // Update the calculator value with the pressed key if it's an operation or a number
    } else if (e.key === "Enter" || e.key === "=") {
      calculate(); // Calculate the result if the Enter key or "=" key is pressed
    } else if (e.key === "Backspace") del(); // Delete the last character if the Backspace key is pressed
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown); // Add event listener for keydown event
    return () => {
      window.removeEventListener("keydown", onKeyDown); // Remove event listener on component unmount
    };
  });

  return (
    <main className="calculator">
      {/* Calculator Display */}
      <Screen ref={ref} calc={calc} />
      {/* Calculator Keypad */}
      <Keypad
        updateCalc={updateCalc}
        calculate={calculate}
        del={del}
        clear={clear}
      />
    </main>
  );
}
