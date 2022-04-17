import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
export default function Country() {
  const [country, setCountry] = useState([]);
  const [borders, setBorders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();
  const { alpha3Code } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const url = `https://restcountries.com/v2/name/${name}`;
      const response = await fetch(url);
      const data = await response.json();
      setCountry(data);
      setIsLoading(false);
    };
    fetchCountryData();

    const fetchCountryBorders = async () => {
      alpha3Code.toLowerCase();
      console.log(alpha3Code)
      const url = `https://restcountries.com/v2/alpha/${alpha3Code}`;
      const response = await fetch(url);
      const data = await response.json();
     
      setBorders(data);
      console.log(data);
    };
    fetchCountryBorders();
  }, [name, alpha3Code]);
  return (
    <>
      {isLoading ? (
        <div className="searching-block">
          <h1 className="searching-h1">Searching...</h1>
        </div>
      ) : (
        <div className="">
          <div className="back">
            <Link to="/rest-countries">
              <span>&larr;</span> Back
            </Link>
          </div>
          {country.map(
            ({
              name,
              capital,
              flags,
              population,
              region,
              nativeName,
              subregion,
              topLevelDomain,
              currencies,
              languages,
            }) => (
              <div key={name} className="country-block">
                <div className="country-image-container">
                  <img
                    className="country-image"
                    src={flags.png}
                    alt="country flag"
                  />
                </div>
                <div className="country-block-info">
                  <h2 className="p">{name}</h2>
                  <div className="details-block">
                    <ul className="country-info-block-1">
                      <li className="p">
                        <span className="details-span">Native Name:</span>{" "}
                        {nativeName}
                      </li>
                      <li className="p">
                        <span className="details-span">Population:</span>{" "}
                        {population}
                      </li>
                      <li className="p">
                        <span className="details-span">Region:</span> {region}
                      </li>
                      <li className="p">
                        <span className="details-span">Sub Region:</span>{" "}
                        {subregion}
                      </li>
                      <li className="p">
                        <span className="details-span">Capital:</span> {capital}
                      </li>
                    </ul>
                    <ul className="country-info-block-3">
                      <li className="p">
                        <span className="details-span">Top Level Domain:</span>{" "}
                        {topLevelDomain}
                      </li>
                      <li className="p">
                        <span className="details-span">Currencies:</span>{" "}
                        {currencies[0].name}
                      </li>
                      <li className="p">
                        <span className="details-span">Languages:</span>{" "}
                        {languages[0].name}
                      </li>
                    </ul>
                    <div>
                      <p>Border Countries:</p>
                      {borders.map(({ data }) => (
                        <p key={data}>{data.borders} {data}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}
