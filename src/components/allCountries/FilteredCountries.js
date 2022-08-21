import { Link } from "react-router-dom";
export default function FilteredCountries(props) {
  return (
    <section className="container-block">
      {props.filtered.map(({ name, population, region, capital, flags }) => (
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
  );
}
