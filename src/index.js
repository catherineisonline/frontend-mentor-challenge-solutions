import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Styles
import "./styles.css";
//Componnets
import Header from "./components/Header";
import Countries from "./components/allCountries/Countries";
import Country from "./components/singleCountry/Country";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route exact path="/:name" element={<Country />} />
        <Route path="/" exact element={<Countries />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
