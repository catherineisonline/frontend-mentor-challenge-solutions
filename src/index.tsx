import ReactDOM from 'react-dom/client';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//Component
import { App } from './App';
//CSS
import "./core-ui/styles.css";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
   <App/>
    </Router>
  </React.StrictMode>
);
