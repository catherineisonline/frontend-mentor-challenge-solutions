import React, { useState } from "react";
import { CountriesInterface, RegionsInterface } from "../types/interfaces";

const regions: RegionsInterface[] = [
  {
    label: "All",
    name: "all",
  },
  {
    label: "Africa",
    name: "africa",
  },
  {
    label: "Americas",
    name: "americas"
  },
  {
    label: "Asia",
    name: "asia",
  },
  {
    label: "Europe",
    name: "europe"
  },
  {
    label: "Oceania",
    name: "oceania"
  },
];



const FilterRegions = ({setCountries} : {setCountries: (value: CountriesInterface) => void}) => {

  const [isVisible, setVisibility] = useState(false);
  const [activeRegion, setActiveRegion] = useState("");

  const fetchRegion = async (regionName: string) => { 
    if (regionName === "all") {
      const url = `https://restcountries.com/v2/all`;
      const response = await fetch(url);
      const data = await response.json();
   setCountries(data);
    } else {
      const url = `https://restcountries.com/v2/region/${regionName}`;
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    }
  };
  const addDropdown = () => {
    return isVisible ? setVisibility(false) : setVisibility(true);
  };
  const removeDropdown = () => {
    return isVisible ? setVisibility(false) : setVisibility(true);
  };

  return (
    <section
      className={isVisible ? "active-regions select-region" : "select-region"}
      id="regions"
    >
      <summary onClick={addDropdown}>
        {activeRegion === "All" || !activeRegion
          ? "Filter by Region"
          : activeRegion}
      </summary>
      {isVisible ? (
        <div className="region-list">
          {regions.map((region) => (
            <li
              onClick={() => {
                fetchRegion(region.name);
                setActiveRegion(region.label);
                removeDropdown();
              }}
              value={region.name}
              key={region.label}
            >
              {region.label}
            </li>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default FilterRegions;
