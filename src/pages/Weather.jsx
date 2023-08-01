import { useEffect, useState } from "react";
import axios from "axios";
import changeBg from "../utils/weather/changeBg.js";
import Current from "../components/Weather/Current.jsx";

const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
const Weather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchLocation, setSearchLocation] = useState("");
  const [tempUnit, setTempUnit] = useState("C");
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.ipgeolocation.io/ipgeo?apiKey=24b507003ddc4873b85a3f3dba2d2b8e`,
      )
      .then((res) => {
        let lat = Math.trunc(res.data.latitude);
        let lon = Math.trunc(res.data.longitude);
        setLocation({
          name: res.data.country_capital,
          country: res.data.country_name,
        });
        console.log("Fetched user location");
        return axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely,hourly&appid=c93fd1817f3fbe42aeac0a63076603b9`,
        );
      })
      .then((res) => {
        setWeather(res.data);
        setLoading(false);
        console.log("Fetched weather data");
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
    console.log("userLocation effect run");
  }, []);

  useEffect(() => {
    if (weather.current) {
      changeBg(weather.current.weather[0].main);
    }
    if (searchLocation) {
      console.log(searchLocation);
    }
    console.log("Changed bg");
  }, [weather]);

  const handleSearch = () => {
    if (searchLocation) {
      setLoading(true);
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=e5f1433f9a897309c61c34e095ff80d9`,
        )
        .then((res) => {
          let lat = Math.trunc(res.data.coord.lat);
          let lon = Math.trunc(res.data.coord.lon);
          setLocation({
            name: res.data.name,
            country: regionNamesInEnglish.of(res.data.sys.country),
          });
          return axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely,hourly&appid=c93fd1817f3fbe42aeac0a63076603b9`,
          );
        })
        .then((res) => {
          setWeather(res.data);
          setError(null);
          setLoading(false);
          console.log("search and fetch");
        })
        .catch((err) => {
          setError(err.response.data.message);
          setLoading(false);
        });
    }
    setSearchLocation("");
    console.log("Search location");
  };

  return (
    <div className="pt-14">
      {loading && (
        <div className="text-center pt-4 text-white text-3xl capitalize">
          Loading....
        </div>
      )}

      {!loading && weather && weather.current && (
        <div className="mainContainer">
          <div className="flex justify-center pb-4">
            <input
              className="px-4 py-2 text-white bg-slate-900 border rounded-full focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40 "
              type="text"
              id="search"
              placeholder="Search location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>

          {error && (
            <div className="text-center pt-4 text-white text-3xl capitalize">
              {error}
            </div>
          )}
          {!error && (
            <div>
              <div className="flex justify-center gap-1">
                <button
                  className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:ring ${
                    tempUnit === "C" ? "bg-gray-50" : "bg-gray-400"
                  }`}
                  onClick={() => setTempUnit("C")}
                >
                  C°
                </button>
                <button
                  className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:ring ${
                    tempUnit === "F" ? "bg-gray-50" : "bg-gray-400"
                  }`}
                  onClick={() => setTempUnit("F")}
                >
                  F°
                </button>
              </div>

              <Current
                currentWeather={weather.current}
                tempUnit={tempUnit}
                location={location}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Weather;
