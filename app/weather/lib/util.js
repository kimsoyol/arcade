import moment from "moment";

export function changeUnits(value, unit) {
  if (unit === "C") {
      return value - 273.15;
  } else {
      return ((value - 273.15) * 9) / 5 + 32;
  }
}


export function currentTime(timezone_offset){
  return moment.utc().add(timezone_offset, "seconds").format("MMMM Do YYYY | h:mm:ss A");
}

