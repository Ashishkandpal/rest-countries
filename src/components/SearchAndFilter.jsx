import { useTheme } from "../themeContext";

const SearchAndFilter = ({
  specificCountry,
  setSpecificCountry,
  continent,
  setContinent,
}) => {
  const { dark } = useTheme();

  return (
    <div className="mb-16 flex justify-between sm:items-center flex-col gap-8 sm:flex-row">
      <div
        className={`flex items-center ${
          dark ? "bg-dark-mode-el" : "bg-light-mode-el text-light-mode-text"
        } shadow-lg`}
      >
        <img
          src={dark ? "/search-light.png" : "/search.png"}
          className={`h-5 w-5 mx-2  ${
            dark ? "text-light-mode-el" : "text-light-mode-text"
          }`}
        />
        <input
          className={`h-10 w-[90%] sm:w-[24rem] ${
            dark ? "bg-dark-mode-el" : "bg-light-mode-el text-light-mode-text"
          } outline-none py-4`}
          type="text"
          placeholder="Search for a country..."
          value={specificCountry}
          onChange={(e) => setSpecificCountry(e.target.value)}
        />
      </div>

      <div>
        <select
          className={`px-2 py-3 ${
            dark
              ? "text-light-mode-el bg-dark-mode-el"
              : "text-light-mode-text bg-light-mode-el"
          } shadow-lg cursor-pointer`}
          name="by-region"
          id="by-region"
          onChange={(e) => setContinent(e.target.value)}
        >
          <option value="">Filter by region</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
