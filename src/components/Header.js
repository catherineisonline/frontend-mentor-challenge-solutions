// THEME SWITCHER BUTTONS
import { ThemeButton } from "../assets/ThemeSwitching.styled";
// THEMES
import { basic, light, dark } from "../assets/Theme.styled.js";

export default function Header({ HandleThemeChange }) {
  return (
    <header>
      <h1 className="title">calc</h1>
      <section className="themes">
        <p>THEME</p>
        <section className="theme-toggle">
          <section className="theme-number">
            <section id="color-theme1" className="theme-number">
              1
            </section>
            <section id="color-theme2" className="theme-number">
              2
            </section>
            <section id="color-theme3" className="theme-number">
              3
            </section>
          </section>
          <section className="theme-value">
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
          </section>
        </section>
      </section>
    </header>
  );
}
