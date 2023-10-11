import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FilteredCountries(props) {
  return (
    <section className="container-block">
      {props.foundFilter ? (
        props.filtered?.map(
          ({ name, population, region, capital, flags, index }) => (
            <Link
              key={name}
              to={`/${name.toLowerCase().replace(/\s/g, "%20")}`}
              className="inside-container"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  translateX: -500,
                  rotate: 10,
                }}
                animate={{
                  opacity: 1,
                  translateX: 0,
                  rotate: 0,
                }}
                transition={{
                  delay: index * 0.02,
                }}
                whileHover={{
                  translateY: -10,
                }}
              >
                <section>
                  <section className="image-container">
                    <img className="image" src={flags.png} alt={name} />
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
              </motion.div>
            </Link>
          )
        )
      ) : (
        <p>No countries found...</p>
      )}
    </section>
  );
}
