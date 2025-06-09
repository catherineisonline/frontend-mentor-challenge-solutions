import React, { useState } from "react";
import { RegionsInterface } from "../types/interfaces";

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


interface FilterRegionProps {
  fetchRegion: (regionName: string) => void;
  regionName: string;
}

const FilterRegions: React.FC<FilterRegionProps> = ({ regionName, fetchRegion }) => {
  const [isVisible, setVisibility] = useState(false);

  const toggleDropdown = () => {
    setVisibility(!isVisible)
  };



  return (
    <section
      className={isVisible ? "active-regions select-region" : "select-region"}
      id="regions">
      <summary onClick={toggleDropdown}>
        {regionName === "all" || regionName.length === 0
          ? "Filter by Region"
          : regionName.charAt(0).toUpperCase() + regionName.slice(1)}
      </summary>
      {isVisible &&
        <div className="region-list">
          {regions.map((region) => (
            <li
              onClick={() => {
                fetchRegion(region.name);
                toggleDropdown();
              }}
              value={region.name}
              key={region.label}
            >
              {region.label}
            </li>
          ))}
        </div>}
    </section>
  );
};

export default FilterRegions;
