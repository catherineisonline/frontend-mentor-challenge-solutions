import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import AllCountries from "./AllCountries";
import FilteredCountries from "./FilteredCountries";

export default function Countries() {
  const url = `https://restcountries.com/v2/all`;
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const fetchCountries = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchCountries();
  }, []);

  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFiltered(filteredCountries);
    } else {
      setFiltered(countries);
    }
  };

  return (
    <article>
      {isLoading ? (
        <section className="searching-block">
          <h2 className="searching-h1">Searching...</h2>
        </section>
      ) : (
        <section>
          <section>
            <Search
              searchCountries={searchCountries}
              searchInput={searchInput}
              setCountries={setCountries}
            />
          </section>
          {searchInput.length > 0 ? (
            <FilteredCountries filtered={filtered} />
          ) : (
            <AllCountries countries={countries} />
          )}
        </section>
      )}
    </article>
  );
}
