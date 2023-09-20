import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "../themeContext";

const DetailsPage = () => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState([]);
  const [borders, setBorders] = useState([]);
  const { dark } = useTheme();
  const navigate = useNavigate();
  useEffect(() => {
    async function getCountry() {
      const res = await fetch(`https://restcountries.com/v3/name/${name}`);
      const data = await res.json();
      setCountryData(data);
    }
    getCountry();
  }, [name]);

  useEffect(() => {
    if (countryData.length > 0) {
      console.log("running");
      countryData[0].borders?.map((item) =>
        getCountryNameFromCode(item).then((data) => {
          setBorders((prev) => [...prev, data]);
        })
      );
    }

    return () => {
      setBorders([]);
    };
  }, [countryData]);

  // getCountryNameFromCode("fra").then((res) => console.log(res));

  return (
    <div
      className={`w-full h-screen sm:h-[83.5vh] mt-20 overflow-hidden ${
        dark ? "bg-dark-mode-bg" : "bg-light-mode-bg"
      }`}
    >
      <button
        className={`${
          dark ? "bg-dark-mode-el" : "bg-light-mode-el text-light-mode-text"
        } px-8 py-2  ml-8 sm:ml-20 text-lg shadow-2xl`}
        onClick={() => navigate("/")}
      >
        &larr; <span className="pl-2">Back</span>
      </button>
      {countryData.length && (
        <div
          className={
            "flex m-auto w-[90%] mt-12 sm:mt-20 gap-12 flex-col sm:flex-row"
          }
        >
          <img
            className="h-100 w-[90%] sm:w-[50%] object-cover shadow-xl ml-4"
            src={countryData[0].flags[0]}
            alt="flag"
          />
          <div className="px-8 py-2">
            <h1
              className={`${
                dark ? "text-light-mode-el" : "text-light-mode-text"
              } text-4xl`}
            >
              {countryData[0].name["common"]}
            </h1>
            <div className="flex mt-8 sm:gap-20 flex-col gap-6 sm:flex-row">
              <div className="w-[50%]">
                <p
                  className={`${
                    dark ? "text-light-mode-el" : "text-light-mode-text"
                  }`}
                >
                  <span className="font-medium">Native Name:</span>{" "}
                  {takeOutLastValue(countryData[0].name.nativeName)}
                </p>
                <p
                  className={`${
                    dark ? "text-light-mode-el" : "text-light-mode-text"
                  }`}
                >
                  <span className="font-medium">Population:</span>{" "}
                  {countryData[0].population}
                </p>
                <p
                  className={`${
                    dark ? "text-light-mode-el" : "text-light-mode-text"
                  }`}
                >
                  <span className="font-medium">Region:</span>{" "}
                  {countryData[0].region}
                </p>
                <p
                  className={`${
                    dark ? "text-light-mode-el" : "text-light-mode-text"
                  }`}
                >
                  <span className="font-medium">Sub-Region:</span>{" "}
                  {countryData[0].subregion}
                </p>
                <p
                  className={`${
                    dark ? "text-light-mode-el" : "text-light-mode-text"
                  }`}
                >
                  <span className="font-medium">Capital:</span>{" "}
                  {countryData[0].capital}
                </p>
              </div>
              <div className="w-[50%]">
                <p
                  className={`${
                    dark ? "text-light-mode-el" : "text-light-mode-text"
                  }`}
                >
                  <span className="font-medium">Top Level Domain:</span>{" "}
                  {countryData[0].tld[0]}
                </p>
                <p
                  className={`${
                    dark ? "text-light-mode-el" : "text-light-mode-text"
                  }`}
                >
                  <span className="font-medium">Currencies:</span>{" "}
                  {Object.values(countryData[0].currencies)[0].name}
                </p>
                <p
                  className={`${
                    dark ? "text-light-mode-el" : "text-light-mode-text"
                  }`}
                >
                  <span className="font-medium">Languages:</span>
                  {Object.values(countryData[0].languages)
                    .reduce((acc, cur) => cur + " " + acc, "")
                    .trim()
                    .replaceAll(" ", ", ")}
                </p>
              </div>
            </div>
            <div
              className={`${
                dark ? "text-light-mode-el" : "text-light-mode-text"
              } mt-6 flex flex-wrap gap-2`}
            >
              <span className="font-medium">Border Countries:</span>
              {borders.length > 0 ? (
                borders.map((item, id) => (
                  <span
                    className={`${
                      dark
                        ? "bg-dark-mode-el"
                        : "bg-light-mode-el text-light-mode-text"
                    } px-6 py-1 mr-2 shadow-lg`}
                    key={id}
                    onClick={() => navigate(`/detail/${item}`)}
                  >
                    {item}
                  </span>
                ))
              ) : (
                <p>shares no land boundary with any country</p>
              )}
            </div>
          </div>
        </div>
      )}
      {!countryData.length && <p>Loading...</p>}
    </div>
  );
};

export default DetailsPage;

export function takeOutLastValue(obj) {
  const nestedObjects = Object.values(obj);
  const lastObject = nestedObjects[nestedObjects.length - 1];
  const values = Object.values(lastObject);
  return values[values.length - 1];
}

export function getCountryNameFromCode(code) {
  async function getName() {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    const data = await res.json();
    return data[0].name["common"];
  }
  const name = getName();
  return name;
}
