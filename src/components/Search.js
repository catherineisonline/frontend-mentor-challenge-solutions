import { FaSearch } from "react-icons/fa";
import FilterRegions from "./FilterRegions";

const Search = (props) => {
  return (
    <article className="search-section">
      <section className="input-block">
        <FaSearch className="search-icon" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          value={props.searchInput}
          onChange={(e) => props.searchCountries(e.target.value)}
        ></input>
      </section>
      <FilterRegions setCountries={props.setCountries} />
    </article>
  );
};

export default Search;
