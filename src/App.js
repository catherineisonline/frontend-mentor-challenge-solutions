import React from "react";
import { Route, Routes } from "react-router-dom";
//Components
import Countries from "./routes/countries/Countries.js";
import Header from "./components/Header.js";
import Country from "./routes/country/Country.js";

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/:name" element={<Country />} />
        <Route path="/" element={<Countries />} />
      </Routes>
    </React.Fragment>
  );
};
