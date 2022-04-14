import { useEffect } from "react";

export default function Search({ searchCountries, searchInput, setCountries }) {
  const regions = [
    {
      label: "Africa",
      name: "Africa",
    },
    { label: "America", name: "America" },
    {
      label: "Asia",
      name: "Asia",
    },
    { label: "Europe", name: "Europe" },
    { label: "Oceania", name: "Oceania" },
  ];
  // setCountries(regions);
  const fetchRegion = async (e) => {
    const url = `https://restcountries.com/v2/region/${e}`;
    console.log(e.target);
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    console.log(data);
    e.preventDeafult()
  };

  useEffect(() => {
    fetchRegion();
  }, []);

  // const selectedRegion = () => {
  //   const selectedRegion =
  // }

  return (
    <div>
      <div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search by country name"
          value={searchInput}
          onChange={(e) => searchCountries(e.target.value)}
        ></input>
      </div>
      <div>
        <select
          className="select-region"
          name="select"
          id=""
          value={searchInput}
          onChange={(e) => fetchRegion(e.target.value)}
        >
          <option value="Filter By Region" selected disabled>
            Filter By Region
          </option>
          {regions.map((region) => (
            <option className="africa" value={region.name}>
              {region.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
