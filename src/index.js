import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Styles
import "./styles.css";
//Componnets
import Header from "./components/Header";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Error from "./components/Error";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="mainContainer">
        <Header />
        <Routes>
          <Route exact path="/:name" element={<Country />} />
          <Route path="*" element={<Error />} />
          <Route path="/" exact element={<Countries />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
