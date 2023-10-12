import React, { useState, useEffect, useCallback } from "react";
import Search from "../../components/Search";
import AllCountries from "./AllCountries";
// import FilteredCountries from "../../components/FilterRegions";
import { CountriesInterface } from "../../types/interfaces";
import FilteredCountries from "./FilteredCountries";
import SearchingMessage from "../../components/SearchingMessage";

const Countries = () => {
  const url = `https://restcountries.com/v2/all`;
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [foundFilter, setFoundFilter] = useState(false);
  const [filtered, setFiltered] = useState<CountriesInterface[] | null>(null);
  const [searchInput, setSearchInput] = useState("");

  const fetchCountries = useCallback(async (): Promise<void> => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    // fetchCountries().then((items) => {
      if (mounted) {
        fetchCountries();
      }
    // });
  
    return () => {
      mounted = false; 
    };
  }, []);

  // This function filters a list of countries based on a search value.
  // It updates the state variables 'searchInput', 'filtered', and 'foundFilter' accordingly.

  const searchCountries = (searchValue: string): void => {
    setSearchInput(searchValue);
    if (searchInput) {
        let filter: CountriesInterface[] = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFiltered(
        filter
      );

      if (filter.length === 0) {
        setFoundFilter(false);
      } else {
        setFoundFilter(true);
      }
      // if (
      //   countries.filter((country) =>
      //     Object.values(country)
      //       .join("")
      //       .toLowerCase()
      //       .includes(searchValue.toLowerCase())
      //   ).length === 0
      // ) {
      //   setFoundFilter(false);
      // } 
      
      // else {
      //   // If the filtered array is not empty, set 'foundFilter' to true.
      //   setFoundFilter(true);
      // }
    }

    // If 'searchInput' is empty (falsy value), reset 'filtered' to the original 'countries' array.
    else {
      setFiltered(countries);
    }
  };


  const resetInput = (): void => {
    return setSearchInput("");
  }
  return (
    <main>
      {isLoading ? (
       <SearchingMessage/>
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


export default Countries;