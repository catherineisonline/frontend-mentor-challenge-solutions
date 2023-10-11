import ReactDOM from 'react-dom/client';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//Component
import { App } from "./App.js"
//CSS
import "./core-ui/styles.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
