import { Suspense } from "react";
//import changeBg from "../utils/weather/changeBg.js";
import Current from "./components/Current";
import { getByLocation, getWeather, getLocation } from "./lib/data";

const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });

const Page = async (props) => {
  let weather;
  let location; 

  if (props.searchParams.query) {
    const query = props.searchParams.query;
    const res = await getByLocation(query);
    location = {
      city: res.name,
      country_name: regionNamesInEnglish.of(res.sys.country),
    }
    weather = await getWeather(res.coord.lat, res.coord.lon);
  } else {
    location = await getLocation();
    weather = await getWeather(location.latitude, location.longitude);
  }

  return (
    <>
      <div className="pt-14">
        <div className="mainContainer">
          <div>
            <Current weatherData={weather} userData={location} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
