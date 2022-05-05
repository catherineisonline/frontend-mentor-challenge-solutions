import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
export default function Search({ searchCountries, searchInput, setCountries }) {
  const [isVisible, setVisibility] = useState(false);

  const regions = [
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

  const fetchRegion = async (e) => {
    const url = `https://restcountries.com/v2/region/${e}`;
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
  };
  function addDropdown() {
    setVisibility(true);
    setVisibility(true);
  }

  function removeDropdown() {
    setVisibility(false);
  }

  console.log(isVisible);
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
            Filter by Region
          </summary>
          {isVisible ? (
            <div className="region-list">
              {regions.map((region) => (
                <li
                  onClick={() => {
                    fetchRegion(region.name);
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
