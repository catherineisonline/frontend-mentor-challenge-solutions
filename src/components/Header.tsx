import React, { Link } from "react-router-dom";
import Toggle from "./Toggle";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <Toggle />
      </nav>
    </header>
  );
}

export default Header;
