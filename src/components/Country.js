import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
export default function Country() {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
     const fetchCountryData = async () => {
    const url = `https://restcountries.com/v2/name/${name}`;
    const response = await fetch(url);
    const data = await response.json();
    setCountry(data);
    setIsLoading(false);
  };
  fetchCountryData();
  }, [name]);
  return (
    <>
      {isLoading ? (
        <h1>Searching...</h1>
      ) : (
        <section>
          <Link to="/rest-countries">&larr; Back</Link>
          {country.map(({ name, capital, flags, population, region }) => (
            <div key={name}>
              <div className="image-container">
                <img className="image" src={flags.png} alt="" />
              </div>
              <ul className="info-block">
                <h2 className="p">{name}</h2>
                <li className="p">{population}</li>
                <li className="p">{region}</li>
                <li className="p">{capital}</li>
              </ul>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
