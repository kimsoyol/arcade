"use client";
import moment from "moment";
import Image from "next/image";
import { changeUnits, currentTime } from "../lib/util";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import changeBg from "../lib/changeBg";

const Current = ({ weatherData, userData }) => {
  const weather = weatherData;
  const userLocation = userData;

  const [tempUnit, setTempUnit] = useState("C");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const dateTime = moment
    .utc()
    .add(weather.timezone_offset, "seconds")
    .format("MMMM Do YYYY | h:mm A");

  const handleSearch = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams);
    value ? params.set("query", value) : params.delete("query");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(event.target.value);
    }
  };

  return (
    <>
      <div className="flex justify-center pb-4">
        <input
          className="px-4 py-2 text-white bg-slate-900 border rounded-full focus:border-white focus:ring-white focus:outline-none focus:ring focus:ring-opacity-40 "
          type="text"
          id="search"
          placeholder="Search City"
          onKeyDown={handleKeyDown}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
      <div className="flex justify-center gap-1">
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full focus:outline-none focus:ring ${
            tempUnit === "C" ? "bg-gray-50" : "bg-gray-400"
          }`}
          onClick={() => setTempUnit("C")}
          defaultValue={searchParams.get("query")?.toString()}
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
      {weather && (
        <div className="text-center">
          <h1 className="font-semibold text-xl pt-4">
            {userLocation.city}, {userLocation.country_name}
          </h1>

          <h2 className="text-2xl text-slate-400 pt-4">{dateTime}</h2>
          <div className="secation-weather flex gap-4 place-content-center pt-4">
            <div className="weather-main flex flex-col">
              <span className="weather-temp font-bold text-6xl">
                {Math.round(changeUnits(weather.current.temp, tempUnit))}°
              </span>
              <p className="text-xl capitalize title">
                {weather.current.weather[0].description}
              </p>
              <Image
                src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`}
                width={200}
                height={200}
                alt=""
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="weather_value">
                  {Math.round(
                    changeUnits(weather.current.feels_like, tempUnit)
                  )}
                  °{tempUnit}
                </p>
                <p className="title">Feels like</p>
              </div>
              <div>
                <p className="weather_value">
                  {weather.current.wind_speed} m/sec
                </p>
                <p className="title">Wind Speed</p>
              </div>
              <div>
                <p className="weather_value">{weather.current.humidity} %</p>

                <p className="title">Chance of Rain</p>
              </div>
              <div>
                <p className="weather_value">{weather.current.clouds} %</p>

                <p className="title">Cloudiness</p>
              </div>
              <div>
                <p className="weather_value">{weather.current.dew_point}</p>
                <p className="title">Dew Point</p>
              </div>
              <div>
                <p className="weather_value">{weather.current.uvi}</p>
                <p className="title">UV Index</p>
              </div>
            </div>

            <h3>{weather.current.condition} </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Current;
