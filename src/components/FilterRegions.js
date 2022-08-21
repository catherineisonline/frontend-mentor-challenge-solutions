import { useState } from "react";

const FilterRegions = (props) => {
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

  const fetchRegion = async (regionName) => {
    if (regionName === "all") {
      const url = `https://restcountries.com/v2/all`;
      const response = await fetch(url);
      const data = await response.json();
      props.setCountries(data);
    } else {
      const url = `https://restcountries.com/v2/region/${regionName}`;
      const response = await fetch(url);
      const data = await response.json();
      props.setCountries(data);
    }
  };
  const addDropdown = () => {
    return isVisible ? setVisibility(false) : setVisibility(true);
  };
  const removeDropdown = () => {
    return isVisible ? setVisibility(false) : setVisibility(true);
  };

  return (
    <section className="select-region" id="regions">
      <summary onClick={(e) => addDropdown(e)}>
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
