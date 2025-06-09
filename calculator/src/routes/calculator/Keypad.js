
const Keypad = ({ updateCalc, calculate, del, clear }) => {
  return (
    <section className="keypad">
      <button
        className="key"
        value="7"
        onClick={() => {
          updateCalc("7");
        }}
      >
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
      <button
        className="operator"
        value="+"
        onClick={() => updateCalc("+")}
      >
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
      <button
        className="operator"
        value="-"
        onClick={() => updateCalc("-")}
      >
        -
      </button>
      <button className="key" value="." onClick={() => updateCalc(".")}>
        .
      </button>
      <button className="key" value="0" onClick={() => updateCalc("0")}>
        0
      </button>
      <button
        className="operator"
        value="/"
        onClick={() => updateCalc("/")}
      >
        /
      </button>
      <button
        className="operator"
        value="x"
        onClick={() => updateCalc("*")}
      >
        x
      </button>
      <button
        className="reset"
        id="reset-key"
        value="reset"
        onClick={clear}
      >
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
    </section>
  );
};
export default Keypad;
