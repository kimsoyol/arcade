import moment from "moment";
import { BiCurrentLocation } from "react-icons/bi";

const Daily = (props) => {
    let dayTemp, nightTemp;
    if (props.unit === "cel") {
        dayTemp = props.dayTemp - 273.15;
        nightTemp = props.nightTemp - 273.15;
    } else {
        dayTemp = ((props.dayTemp - 273.15) * 9) / 5 + 32;
        nightTemp = ((props.nightTemp - 273.15) * 9) / 5 + 32;
    }
    const dateTime = moment.unix(props.time).format("ddd D, MMM");

    return (
        <>
            <div className="left-info dailyContainer">
                <div className="pic-gradient">
                    <div className="today-info">
                        <h2>{dateTime}</h2>
                        <BiCurrentLocation className="inline" />
                        <span>location</span>
                        <div className="today-weather">
                            <h1 className="weather-temp">
                                Temp - {Math.ceil(dayTemp)}° / {Math.ceil(nightTemp)}°
                            </h1>
                            <h3>{props.condition} </h3>
                        </div>

                        <img
                            src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${props.icon}.svg`}
                            alt=""
                            className="color-red-100"
                        />
                    </div>
                </div>
            </div>
            <div className="right-info">
                <div className="day-info">
                    <div>
                        <span className="title">PRECIPITATION</span>
                        <span className="value"> {props.pop * 100}%</span>
                    </div>
                    <div>
                        <span className="title">HUMIDITY</span>
                        <span className="value"> {props.humidity} %</span>
                    </div>
                    <div>
                        <span className="title">WIND SPEED</span>
                        <span className="value"> {props.windSpeed} km/h</span>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Daily;
