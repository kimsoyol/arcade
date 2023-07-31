import moment from "moment";
import { WiCloudy } from "react-icons/wi";
import { BiCurrentLocation } from "react-icons/bi";
import "./weather.css";

const Current = (props) => {
  const weather = props.currentWeather;
  const dateTime = moment.unix(weather.dt).format("MMMM Do YYYY, h:mm:ss A");

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
      <div className="current-container">
        <h1 className="text-center font-semibold text-5xl">
          Bangkok, Thailand
        </h1>
        <h2 className="text-center text-2xl text-slate-400 py-3">{dateTime}</h2>
        <div className="secation-weather flex gap-4 place-content-center">
          <div className="weather-main">
            <p className="text-3xl capitalize">
              {weather.weather[0].description}
            </p>
            <h1 className="weather-temp">Temp - {Math.ceil(weather.temp)}°</h1>
            {getIcon(weather.weather[0].main)}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="title">Wind</p>
              <p className="value">{weather.wind_speed} m/sec</p>
            </div>
            <div>
              <p className="title">Chance of Rain</p>
              <p className="value">{weather.humidity} %</p>
            </div>
            <div>
              <p className="title">Feels like</p>
              <p className="value">{weather.feels_like}</p>
            </div>
            <div>
              <p className="title">Visibility</p>
              <p className="value">{weather.visibility}</p>
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

      <hr />
    </>
  );
};

export default Current;
