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
    <BrowserRouter>
    <main className="mainContainer">
      <Header />
      <Routes>
        <Route exact path="/rest-countries" element={<Countries />} />
        <Route  path="/rest-countries/:name" element={<Country />} />
        <Route  path="*" element={<Error />} />
      </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
