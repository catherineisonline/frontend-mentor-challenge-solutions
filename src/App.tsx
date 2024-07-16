import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
//Components
import Countries from "./routes/countries/Countries";
import Header from "./components/Header";
import Country from "./routes/country/Country";
import { CountriesInterface } from "./types/interfaces";


export const App = () => {
  const [countries, setCountries] = useState<CountriesInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [foundFilter, setFoundFilter] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [regionName, setRegionName] = useState<string>('all');
  const prevRegionNameRef = useRef<string>(regionName);

  useEffect(() => {
    prevRegionNameRef.current = regionName;
  }, [regionName]);




  const searchCountries = async (searchValue: string) => {
    const data = await filterCountries(regionName, true, searchValue.toLowerCase());
    setCountries(data);
    if (data.length === 0) {
      setFoundFilter(false);
    } else {
      setFoundFilter(true);
    }
  };



  const filterCountries = async (regionName: string, search: boolean, searchInput: string) => {
    let url = '';
    let final_data;
    if (regionName === "all") {
      url = `https://restcountries.com/v2/all`;
    }
    else {
      url = `https://restcountries.com/v2/region/${regionName}`;
    }
    const response = await fetch(url);
    const data = await response.json();

    if (search) {
      final_data = data?.filter((country: any) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
    }
    else {
      final_data = data;
    }

    return final_data;
  }





  const fetchRegion = async (regionName: string) => {
    setRegionName(regionName);
    setIsLoading(true);
    if (searchInput.length === 0) {
      const data = await filterCountries(regionName, false, '');
      setCountries(data);
      setIsLoading(false);
      setFoundFilter(true);
    }
    else if (searchInput.length > 0 && regionName !== prevRegionNameRef.current) {
      const data = await filterCountries(regionName, true, searchInput);
      setCountries(data);
      if (data.length === 0) {
        setFoundFilter(false);
      } else {
        setFoundFilter(true);
      }
      setIsLoading(false);
    }
  };


  useEffect(() => {
    let mounted = true;

    const fetchInitialData = async () => {
      if (mounted) {
        await fetchRegion("all");
      }
    };

    fetchInitialData();

    return () => {
      mounted = false;
    };
  }, []);
  
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/:name" element={<Country />} />
        <Route path="/" element={<Countries searchInput={searchInput} setSearchInput={setSearchInput} isLoading={isLoading} foundFilter={foundFilter}
          countries={countries} searchCountries={searchCountries} fetchRegion={fetchRegion} regionName={regionName} />} />
      </Routes>
    </React.Fragment>
  );
};
