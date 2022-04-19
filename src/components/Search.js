import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function Search({ searchCountries, searchInput, setCountries }) {
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
    e = e.value;
    // e = regions.name;
    console.log(regions);
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    console.log(data);
  };

  useEffect(() => {
    fetchRegion();
  }, []);

  return (
    <div className="search-section">
      <div className="input-block">
        <FaSearch className="search-icon" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={searchInput}
          onChange={(e) => searchCountries(e.target.value)}
        ></input>
      </div>
      <>
        <details
          className="select-region"
          id="regions"
          // onChange={(e) => fetchRegion(e.target.value)}
        >
          <summary>Filter by Region</summary>
          <div className="region-list">
            {regions.map((region) => (
              <option
                onClick={(e) => fetchRegion(e.target.value)}
                value={region.name}
              >
                {region.label}
              </option>
            ))}
          </div>
        </details>
      </>
    </div>
  );
}
