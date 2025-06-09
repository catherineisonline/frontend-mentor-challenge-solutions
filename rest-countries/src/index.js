import ReactDOM from 'react-dom/client';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//Component
import { App } from "./App.tsx"
//CSS
import "./core-ui/styles.css";
import "./routes/countries/countries.css";
import "./routes/country/country.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
