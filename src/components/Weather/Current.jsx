import moment from "moment";
import { WiCloudy } from "react-icons/wi";
import { BiCurrentLocation } from "react-icons/bi";
import "./weather.css";
import changeUnits from "../../utils/weather/changeUnits.js";

const Current = (props) => {
  const weather = props.currentWeather;
  const location = props.location;
  const dateTime = moment.unix(weather.dt).format("MMMM Do YYYY | h:mm A");

  const getIcon = (condition) => {
    switch (condition) {
      case "Clouds":
        return <WiCloudy size={130} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="text-color">
        <h1 className="text-center font-semibold text-5xl pt-4">
          {location.name}, {location.country}
        </h1>
        <h2 className="text-center text-2xl text-slate-400 py-3">{dateTime}</h2>
        <div className="secation-weather flex gap-4 place-content-center">
          <div className="weather-main">
            <p className="text-3xl capitalize">
              {weather.weather[0].description}
            </p>
            <h1 className="weather-temp">
              Temp - {Math.round(changeUnits(weather.temp, props.tempUnit))}°
              {props.tempUnit}
            </h1>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="title">Wind Speed</p>
              <p className="value">{weather.wind_speed} m/sec</p>
            </div>
            <div>
              <p className="title">Chance of Rain</p>
              <p className="value">{weather.humidity} %</p>
            </div>
            <div>
              <p className="title">Feels like</p>
              <p className="value">
                {Math.round(changeUnits(weather.feels_like, props.tempUnit))}°
                {props.tempUnit}
              </p>
            </div>
            <div>
              <p className="title">Cloudiness</p>
              <p className="value">{weather.clouds} %</p>
            </div>
            <div>
              <p className="title">Dew Point</p>
              <p className="value">{weather.dew_point}</p>
            </div>
            <div>
              <p className="title">UV Index</p>
              <p className="value">{weather.uvi}</p>
            </div>
          </div>

          <h3>{weather.condition} </h3>
        </div>
      </div>
    </>
  );
};

export default Current;
