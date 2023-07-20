import { useState, useEffect } from "react";
import Search from "../Search";
import AllCountries from "./AllCountries";
import FilteredCountries from "./FilteredCountries";

export default function Countries() {
  const url = `https://restcountries.com/v2/all`;
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [foundFilter, setFoundFilter] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const fetchCountries = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let mounted = true;
    fetchCountries().then((items) => {
      if (mounted) {
        fetchCountries(items);
      }
    });
    return () => (mounted = false);
  }, []);

  // This function filters a list of countries based on a search value.
  // It updates the state variables 'searchInput', 'filtered', and 'foundFilter' accordingly.

  const searchCountries = (searchValue) => {
    // Set the 'searchInput' state variable to the provided 'searchValue'.
    setSearchInput(searchValue);

    // If 'searchInput' is not empty (truthy value), proceed with filtering.
    if (searchInput) {
      // Filter the 'countries' array based on the provided 'searchValue' and update 'filtered'.
      setFiltered(
        countries.filter((country) =>
          // Convert the values of the 'country' object into a single string,
          // make it lowercase, and check if it includes the lowercase 'searchValue'.
          Object.values(country)
            .join("")
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        )
      );

      // Check if the filtered array is empty.
      if (
        countries.filter((country) =>
          // Convert the values of the 'country' object into a single string,
          // make it lowercase, and check if it includes the lowercase 'searchValue'.
          Object.values(country)
            .join("")
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        ).length === 0
      ) {
        // If the filtered array is empty, set 'foundFilter' to false.
        // This ensures 'foundFilter' is false when there are no matches for the search.
        setFoundFilter(false);
      } else {
        // If the filtered array is not empty, set 'foundFilter' to true.
        setFoundFilter(true);
      }
    }

    // If 'searchInput' is empty (falsy value), reset 'filtered' to the original 'countries' array.
    else {
      setFiltered(countries);
    }
  };


  const resetInput = () => {
    return setSearchInput("");
  }
  return (
    <main>
      {isLoading ? (
        <h2 className="searching">Searching...</h2>
      ) : (
        <>
          <Search
            searchCountries={searchCountries}
            searchInput={searchInput}
            setCountries={setCountries}
            resetInput={resetInput}
          />
          {searchInput.length > 0 ? (
            <FilteredCountries filtered={filtered} foundFilter={foundFilter} />
          ) : (
            <AllCountries countries={countries} />
          )}
        </>
      )}
    </main>
  );
}
