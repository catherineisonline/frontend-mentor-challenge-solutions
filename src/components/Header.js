// THEME SWITCHER BUTTONS
import { ThemeButton } from "../assets/ThemeSwitching.styled";
// THEMES
import { basic, light, dark } from "../assets/Theme.styled.js";

export default function Header({ HandleThemeChange }) {
  return (
    <header>
      <h1 className="title">calc</h1>
      <div className="themes">
        <p>THEME</p>
        <div className="theme-toggle">
          <div className="theme-number">
            <div id="color-theme1" className="theme-number">
              1
            </div>
            <div id="color-theme2" className="theme-number">
              2
            </div>
            <div id="color-theme3" className="theme-number">
              3
            </div>
          </div>
          <div className="theme-value">
            <ThemeButton
              aria-label="basic"
              className="theme-btn basic active"
              onClick={(e) => HandleThemeChange(basic, e)}
            ></ThemeButton>

            <ThemeButton
              aria-label="light"
              className="theme-btn light"
              onClick={(e) => HandleThemeChange(light, e)}
            ></ThemeButton>

            <ThemeButton
              aria-label="dark"
              className="theme-btn dark"
              onClick={(e) => HandleThemeChange(dark, e)}
            ></ThemeButton>
          </div>
        </div>
      </div>
    </header>
  );
}
