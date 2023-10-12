// import { Link } from "react-router-dom";

import { Link } from "../../node_modules/react-router-dom/dist/index";
// import Toggle from "./Toggle";

// import { Link } from "../../node_modules/react-router-dom/dist/index";
// import { Link } from "../../node_modules/react-router-dom/dist/index";
// import Toggle from "./Toggle";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        {/* <Toggle /> */}
      </nav>
    </header>
  );
}
