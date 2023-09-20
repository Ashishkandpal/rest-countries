import { useNavigate } from "react-router";
import { useTheme } from "../themeContext";

// eslint-disable-next-line react/prop-types
const Card = ({ flagUrl, name, region, population, capital }) => {
  const { dark } = useTheme();
  const navigate = useNavigate();
  return (
    <div
      className={`w-60 h-[22rem] ${
        dark
          ? "bg-dark-mode-el text-light-mode-el border-"
          : "bg-light-mode-el text-light-mode-text"
      } rounded-lg m-auto shadow-lg cursor-pointer`}
      onClick={() => navigate(`/detail/${name}`)}
    >
      <img
        className="h-32 w-full object-cover shadow-lg"
        src={flagUrl}
        alt="flag"
      />
      <div className="p-4">
        <p className="font-semibold text-xl my-3">{name}</p>
        <p>
          <span className="font-semibold">Population:</span> {population}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p>
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
