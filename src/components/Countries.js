import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

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
            <section className="container-block">
              {filtered.map(({ name, population, region, capital, flags }) => (
                <Link
                  to={`/${name.toLowerCase().replace(/\s/g, "%20")}`}
                  key={name}
                  className="inside-container"
                >
                  <section>
                    <section className="image-container">
                      <img className="image" src={flags.png} alt="flag" />
                    </section>
                    <section className="info-block">
                      <h2 className="info-block-h2">{name}</h2>
                      <p className="p">
                        <span className="category">Population:</span>{" "}
                        {population.toLocaleString()}
                      </p>
                      <p className="p">
                        <span className="category">Region:</span> {region}
                      </p>
                      <p className="p">
                        <span className="category">Capital:</span> {capital}
                      </p>
                    </section>
                  </section>
                </Link>
              ))}
            </section>
          ) : (
            <section>
              <section className="container-block">
                {countries
                  .map(({ name, population, region, capital, flags }) => (
                    <Link
                      to={`/${name.toLowerCase().replace(/\s/g, "%20")}`}
                      key={name}
                      className="inside-container"
                    >
                      <section className="image-container">
                        <img className="image" src={flags.png} alt="" />
                      </section>
                      <section className="info-block">
                        <h2 className="info-block-h2"> {name}</h2>
                        <section>
                          <p className="p">
                            <span className="category">Population:</span>{" "}
                            {population.toLocaleString()}
                          </p>
                          <p className="p">
                            <span className="category">Region:</span> {region}
                          </p>
                          <p className="p">
                            <span className="category">Capital:</span> {capital}
                          </p>
                        </section>
                      </section>
                    </Link>
                  ))
                  }
              </section>
            </section>
          )}
        </section>
      )}
    </article>
  );
}
