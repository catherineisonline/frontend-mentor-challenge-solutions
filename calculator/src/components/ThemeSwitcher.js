import ThemeButtons from "./ThemeButtons";

const ThemeSwitcher = (props) => {
  return (
    <section className="themes">
      <p>THEME</p>
      <ThemeButtons HandleThemeChange={props.HandleThemeChange} />
    </section>
  );
};

export default ThemeSwitcher;
