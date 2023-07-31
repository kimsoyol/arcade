import clear from  '../../assets/weather/clear.svg'
import bg from '../../assets/weather/default.svg'
import cloudy from '../../assets/weather/cloudy.svg'
import rainy from '../../assets/weather/rainy.svg'
import snow from '../../assets/weather/snow.svg'
import thunder from '../../assets/weather/thunderstorm.svg'
export default function (condition) {
  switch (condition) {
    case "Clear":
      return changeMainBg(clear);
    case "Clouds":
      return changeMainBg(cloudy);
    case "Rainy":
      return changeMainBg(rainy);
    case "Snow":
      return changeMainBg(snow);
    case "Thunderstorm":
      return changeMainBg(thunder);
    default:
      return changeMainBg(bg)
  }
}

function changeMainBg(image) {
  document.body.style.background = `url(${image}) no-repeat center center`;
  document.body.style.backgroundSize = "cover";
}
