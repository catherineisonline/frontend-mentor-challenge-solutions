import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
export default function Search({ searchCountries, searchInput, setCountries }) {
  const [isVisible, setVisibility] = useState(false);
  const [activeRegion, setActiveRegion] = useState("");

  const regions = [
    {
      label: "All",
      name: "all",
    },
    {
      label: "Africa",
      name: "africa",
    },
    { label: "Americas", name: "americas" },
    {
      label: "Asia",
      name: "asia",
    },
    { label: "Europe", name: "europe" },
    { label: "Oceania", name: "oceania" },
  ];

  const fetchRegion = async (e, label) => {
    if (e === "all") {
      const url = `https://restcountries.com/v2/all`;
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setActiveRegion(label);
      // console.log(activeRegion);
    } else {
      const url = `https://restcountries.com/v2/region/${e}`;
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setActiveRegion(label);
      // console.log(activeRegion);
    }
  };
  function addDropdown() {
    setVisibility(true);
    setVisibility(true);
  }

  function removeDropdown() {
    setVisibility(false);
  }

  return (
    <section className="search-section">
      <section className="input-block">
        <FaSearch className="search-icon" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={searchInput}
          onChange={(e) => searchCountries(e.target.value)}
        ></input>
      </section>
      <>
        <details className="select-region" id="regions">
          <summary
            onClick={() => {
              addDropdown();
            }}
          >
            {activeRegion === "All" || !activeRegion
              ? "Filter by Region"
              : activeRegion}
          </summary>
          {isVisible ? (
            <div className="region-list">
              {regions.map((region) => (
                <li
                  onClick={() => {
                    fetchRegion(region.name, region.label);
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
        </details>
      </>
    </section>
  );
}
