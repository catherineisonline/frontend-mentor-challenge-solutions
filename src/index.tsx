import { createRoot } from 'react-dom';
import "./core-ui/styles.css";
// import Countries from "./routes/allCountries/Countries.js";
// import Country from "./routes/singleCountry/Country";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "../node_modules/react-router-dom/dist/index";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        {/* <Route exact path="/:name" element={<Country />} />
        <Route path="/" exact element={<Countries />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
