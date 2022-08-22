import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AllCountries(props) {
  return (
    <section className="container-block">
      {props.countries.map(
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
              <section className="image-container">
                <img
                  className="image"
                  src={flags ? flags.svg : flags.png}
                  alt=""
                />
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
            </motion.div>
          </Link>
        )
      )}
    </section>
  );
}
