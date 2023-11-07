import clear from  '@/public/weather/clear.svg'
import bg from '@/public/weather/default.svg'
import cloudy from '@/public/weather/cloudy.svg'
import rainy from '@/public/weather/rainy.svg'
import snow from '@/public/weather/snow.svg'
import thunder from '@/public/weather/thunderstorm.svg'

export default function changeBg(condition) {
  switch (condition) {
    case "Clear":
      return (clear);
    case "Clouds":
      return (cloudy);
    case "Rainy":
      return (rainy);
    case "Snow":
      return (snow);
    case "Thunderstorm":
      return (thunder);
    default:
      return (bg)
  }
}


