import React from "react";
import Search from "../../components/Search";
import SearchingMessage from "../../components/SearchingMessage";
import { CountriesInterface } from "../../types/interfaces";
import AllCountries from "./AllCountries";
interface CountriesProps {
  countries: CountriesInterface[];
  foundFilter: boolean;
  isLoading: boolean;
  searchCountries: (searchValue: string) => void;
  fetchRegion: (regionName: string) => void;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  searchInput: string;
  regionName: string;

}
const Countries: React.FC<CountriesProps> = ({ regionName, countries, foundFilter, isLoading, searchCountries, fetchRegion, setSearchInput, searchInput }) => {
  return (
    <main>
      {isLoading ? (
        <SearchingMessage />
      ) : (
        <React.Fragment>
          <Search regionName={regionName} searchCountries={searchCountries} fetchRegion={fetchRegion} setSearchInput={setSearchInput} searchInput={searchInput} />
          <AllCountries countries={countries} foundFilter={foundFilter} />
        </React.Fragment>
      )}
    </main>
  );
}


export default Countries;