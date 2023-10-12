import React, { useState, useEffect, useCallback } from "react";
import Search from "../../components/Search";
import AllCountries from "./AllCountries";
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
      if (mounted) {
        fetchCountries();
      }
  
    return () => {
      mounted = false; 
    };
  }, []);
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
    }
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