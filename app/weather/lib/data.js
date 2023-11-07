import { unstable_noStore as noStore } from "next/cache";

export async function getLocation() {
  // get the user IP address
  const resIP = await fetch("https://api.ipify.org/?format=json");
  if (!resIP.ok) {
    throw new Error("Failed to fetch IP");
  }

  const dataIP = await resIP.json();
  const ip = dataIP.ip;

  // get user's location with IP
  const resLocation = await fetch(`https://ipapi.co/${ip}/json`);
  if (!resLocation.ok) {
    throw new Error("Failed to fetch location");
  }

  const dataLocation = await resLocation.json();
  return dataLocation;
}

export async function getWeather(lat, lon) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely,hourly&appid=04d4d495e39f2311c4acd1148b6e2130`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Weather");
  }
  const data = await res.json();
  return data;
}

export async function getByLocation(searchLocation) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=04d4d495e39f2311c4acd1148b6e2130`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch Search Location");
  }

  const data = await res.json();
  console.log(data);

  return data;
}



  // // get user's location with IP
  // const res = await fetch("http://api.ipstack.com/49.49.229.190?access_key=1bf25e61b330a956452bd26f984d6feb")
  // if (!res.ok) {
  //   throw new Error("Failed to fetch user location")
  // }

  // const userLatLon = await res.json();
  // return userLatLon