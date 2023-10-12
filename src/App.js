import React from "react";
import { Route, Routes } from "react-router-dom";
//Components
import Countries from "./routes/countries/Countries.tsx";
import Header from "./components/Header.tsx";
import Country from "./routes/country/Country.tsx";

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
