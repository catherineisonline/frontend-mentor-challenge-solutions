import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
export default function Country() {
  const [country, setCountry] = useState([]);
  const [borderGroup, setCountryBorders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();
  useEffect(() => {
    const fetchCountryData = async () => {
      const url = `https://restcountries.com/v2/name/${name}`;
      const response = await fetch(url);
      const data = await response.json();
      setCountry(data);
      data.forEach((borderArray) => setCountryBorders(borderArray.borders));
      setIsLoading(false);
    };

    fetchCountryData();
  }, [name, borderGroup]);

  return (
    <>
      {isLoading ? (
        <div className="searching-block">
          <h2 className="searching-h1">Searching...</h2>
        </div>
      ) : (
        <div className="">
          <div className="back">
            <Link to="/" className="back-link">
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
                  <img className="country-image" src={flags.png} alt={name} />
                </div>
                <div className="country-block-info">
                  <h2 className="p">{name}</h2>
                  <div className="details-block">
                    <div className="details-block-one">
                      <p className="p">
                        <span className="details-span">Native Name:</span>{" "}
                        {nativeName}
                      </p>
                      <p className="p">
                        <span className="details-span">Population:</span>{" "}
                        {population.toLocaleString()}
                      </p>
                      <p className="p">
                        <span className="details-span">Region:</span> {region}
                      </p>
                      <p className="p">
                        <span className="details-span">Sub Region:</span>{" "}
                        {subregion}
                      </p>
                      <p className="p">
                        <span className="details-span">Capital:</span> {capital}
                      </p>
                    </div>
                    <div className="details-block-two">
                      <p className="p">
                        <span className="details-span">Top Level Domain:</span>{" "}
                        {topLevelDomain}
                      </p>
                      <p className="p">
                        <span className="details-span">Currencies:</span>{" "}
                        {currencies[0].name}
                      </p>
                      <p className="p">
                        <span className="details-span">Languages:</span>{" "}
                        {languages[0].name}
                      </p>
                    </div>
                  </div>
                  <div className="border-countries">
                    <p className="border-countries-title">Border Countries:</p>
                    {borderGroup?.length ? (
                      borderGroup.map((borders) => (
                        <Link className="border-country" to="/rest-countries">
                          {borders}
                        </Link>
                      ))
                    ) : (
                      <Link to="/" className="border-country-none">
                        No Borders...
                      </Link>
                    )}
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
