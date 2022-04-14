import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false);
const changeTheme = ()  => {
document.body.classList.toggle("dark");
setDarkMode(!darkMode)
}
  return (
    <>
      <button onClick={changeTheme}>{darkMode ? <FaSun />: <FaMoon /> }</button>
    </>
  );
}
