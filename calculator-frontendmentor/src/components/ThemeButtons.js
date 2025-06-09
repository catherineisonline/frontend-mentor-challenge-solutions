import { ThemeButton } from "../styled-components/ThemeSwitching.styled.js";
import { basic, light, dark } from "../styled-components/Theme.styled.js";
import ThemeNumbers from "../ThemeNumbers.js";

const ThemeButtons = (props) => {
  return (
    <nav className="theme-toggle">
      <ThemeNumbers />
      <section className="theme-value">
        <ThemeButton
          aria-label="basic"
          className="theme-btn basic active"
          onClick={(e) => props.HandleThemeChange(basic, e)}
        ></ThemeButton>

        <ThemeButton
          aria-label="light"
          className="theme-btn light"
          onClick={(e) => props.HandleThemeChange(light, e)}
        ></ThemeButton>

        <ThemeButton
          aria-label="dark"
          className="theme-btn dark"
          onClick={(e) => props.HandleThemeChange(dark, e)}
        ></ThemeButton>
      </section>
    </nav>
  );
};

export default ThemeButtons;
