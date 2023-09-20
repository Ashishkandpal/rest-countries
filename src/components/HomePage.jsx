import { useEffect, useState } from "react";
import Card from "./Card";
import SearchAndFilter from "./SearchAndFilter";
import { useTheme } from "../themeContext";

const url = "https://restcountries.com/v3/all";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [specificCountry, setSpecificCountry] = useState("");
  const [continent, setContinent] = useState("");
  const { dark } = useTheme();

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
    }
    getData();
  }, []);

  let countriesByContinent = continent
    ? countries.filter(
        (item) => item.region.toLowerCase() === continent.toLowerCase()
      )
    : countries;

  let filteredCountries = specificCountry
    ? countriesByContinent.filter((item) =>
        item.name["common"]
          .toLowerCase()
          .includes(specificCountry.toLowerCase())
      )
    : countriesByContinent;

  return (
    <div
      className={`${
        dark ? "bg-dark-mode-bg" : "bg-light-mode-bg"
      } m-12 min-h-[86.85dvh]`}
    >
      <SearchAndFilter
        specificCountry={specificCountry}
        setSpecificCountry={setSpecificCountry}
        continent={continent}
        setContinent={setContinent}
      />
      <div className="flex flex-wrap justify-evenly gap-16">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((item, idx) => (
            <Card
              key={idx}
              flagUrl={item.flags[0]}
              name={item.name["common"]}
              region={item.region}
              population={item.population}
              capital={item.capital}
            />
          ))
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

{
  /* <div className="grid grid-rows-4 grid-cols-4 gap-16"></div> */
}

// let filteredCountries = specificCountry
//     ? countriesByContinent.filter(
//         (item) =>
//           item.name["common"].toLowerCase() === specificCountry.toLowerCase()
//       )
//     : countriesByContinent;
