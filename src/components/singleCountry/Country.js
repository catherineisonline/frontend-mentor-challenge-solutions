import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Country() {
  const [country, setCountry] = useState([]);
  const [borderCountries, setBorderCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { name } = useParams();

  useEffect(() => {
    window.scroll(0, 0);
    const fetchCountryData = async (name) => {
      try {
        const url = `https://restcountries.com/v2/name/${name}`;
        const response = await fetch(url);
        const data = await response.json();
        setCountry(data[0]);
        data[0]?.borders?.forEach((border) => {
          return findCountryData(border);
        });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountryData(name);
    const findCountryData = async (border) => {
      try {
        const url = `https://restcountries.com/v2/alpha/${border}`;
        const response = await fetch(url);
        const data = await response.json();
        setBorderCountry((cur) => [...cur, data.name]);
      } catch (error) {
        console.log(error);
      }
    };
  }, [name]);

  return (
    <main>
      {isLoading ? (
        <h2 animate={{ opacity: 1 }} className="searching">
          Searching...
        </h2>
      ) : (
        <AnimatePresence>
          <Link to="/" className="back-link">
            <span>&larr;</span> Back
          </Link>
          <section key={name} className="country-block">
            <motion.img
              initial={{
                opacity: 0,
                translateX: -500,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                duration: 0.5,
                translateX: -500,
              }}
              exit={{
                opacity: 0,
                translateX: -500,
              }}
              className="country-image"
              src={country.flags.svg}
              alt={name}
            />
            <section className="country-block-info">
              <h2>{name}</h2>
              <section className="details-block">
                <ul className="details-block-one">
                  <li>
                    <span>Native Name:</span> {country.nativeName}
                  </li>
                  <li>
                    <span>Population:</span>{" "}
                    {country.population.toLocaleString()}
                  </li>
                  <li>
                    <span>Region:</span> {country.region}
                  </li>
                  <li>
                    <span>Sub Region:</span> {country.subregion}
                  </li>
                  <li>
                    <span>Capital:</span> {country.capital}
                  </li>
                </ul>
                <ul className="details-block-two">
                  <li>
                    <span>Top Level Domain:</span> {country.topLevelDomain}
                  </li>
                  <li>
                    <span>Currencies:</span> {country.currencies[0].name}
                  </li>
                  <li>
                    <span>Languages:</span> {country.languages[0].name}
                  </li>
                </ul>
              </section>
              <section className="border-countries">
                <p className="border-countries-title">Border Countries:</p>
                {borderCountries?.length ? (
                  borderCountries.map((country, index) => (
                    <Link
                      key={index}
                      className="border-country"
                      to={`/${country}`}
                    >
                      <motion.div
                        initial={{
                          opacity: 0,
                          translateY: -50,
                        }}
                        animate={{
                          opacity: 1,
                          translateY: 0,
                        }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.1,
                        }}
                      >
                        {country}
                      </motion.div>
                    </Link>
                  ))
                ) : (
                  <p>No Borders...</p>
                )}
              </section>
            </section>
          </section>
        </AnimatePresence>
      )}
    </main>
  );
}
