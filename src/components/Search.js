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

  // const fetchRegion = async (e) => {
  //   const url = `https://restcountries.com/v2/region/${e}`;
  //   e = e.name;
  //   // e = regions.name;
  //   console.log(regions);
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setCountries(data);
  //   console.log(data);
  // };

  useEffect(() => {
    // fetchRegion();
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
          name="select"
          id=""
          // onChange={(e) => fetchRegion(e.target.value)} 
        >
          <summary>Filter by Region</summary>
          <ul >
            {regions.map((region) => (
              <li  value={region.name}>{region.label}</li>
            ))}
          </ul>
        </details>
      </>
    </div>
  );
}
