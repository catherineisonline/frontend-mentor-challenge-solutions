import React from "react";
import { Routes } from "../node_modules/react-router-dom/dist/index";
// import Countries from "./routes/allCountries/Countries.js";
// import Country from "./routes/singleCountry/Country";
// import Header from "./components/Header";

export const App = () => {
    return(
        <React.Fragment>
           {/* <Header /> */}
      <Routes>
        {/* <Route exact path="/:name" element={<Country />} />
        <Route path="/" exact element={<Countries />} /> */}
      </Routes>
      </React.Fragment>
    )
}