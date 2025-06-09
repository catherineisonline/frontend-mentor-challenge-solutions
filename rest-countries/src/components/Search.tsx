import React from "react";

import { FaSearch } from "react-icons/fa";
import FilterRegions from "./FilterRegions";

interface SearchProps {
  searchCountries: (searchValue: string) => void;
  fetchRegion: (regionName: string) => void;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  searchInput: string
  regionName: string;
}

const Search: React.FC<SearchProps> = ({ regionName, searchCountries, fetchRegion, setSearchInput, searchInput }) => {

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setSearchInput(event.target.value);
  };
  const resetInput: React.MouseEventHandler<HTMLButtonElement> = () => {
    setSearchInput("");
  }
  return (
    <article className="search-section">
      <section className="input-block">
        <FaSearch className="search-icon" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={searchInput}
          onChange={(e) => {
            searchCountries(e.target.value);
            handleInputChange(e)
          }}

        />
        <button className="delete-icon" onClick={resetInput}>X</button>
      </section>
      <FilterRegions
        regionName={regionName}
        fetchRegion={fetchRegion}
      />
    </article>
  );
};

export default Search;
