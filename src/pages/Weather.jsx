import { useEffect, useState } from "react";
import moment from "moment";
import { BiCurrentLocation } from "react-icons/bi";
import changeBg from "../utils/weather/changeBg.js";
import Current from "../components/Weather/Current.jsx";
import Daily from "../components/Weather/Daily.jsx";
const Weather = () => {
  //const  [userLocation, setUserLocation] = useState({})
  const [tempUnit, setTempUnit] = useState("cel");
  const [weather, setWeather] = useState({
    lat: 13,
    lon: 100,
    timezone: "Asia/Bangkok",
    timezone_offset: 25200,
    current: {
      dt: 1690805634,
      sunrise: 1690585478,
      sunset: 1690631287,
      temp: 301.23,
      feels_like: 303.7,
      pressure: 1006,
      humidity: 68,
      dew_point: 294.77,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.37,
      wind_deg: 237,
      wind_gust: 6.2,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
    },
    minutely: [
      { dt: 1690633140, precipitation: 0 },
      { dt: 1690633200, precipitation: 0 },
      { dt: 1690633260, precipitation: 0 },
      { dt: 1690633320, precipitation: 0 },
      { dt: 1690633380, precipitation: 0 },
      { dt: 1690633440, precipitation: 0 },
      { dt: 1690633500, precipitation: 0 },
      { dt: 1690633560, precipitation: 0 },
      { dt: 1690633620, precipitation: 0 },
      { dt: 1690633680, precipitation: 0 },
      { dt: 1690633740, precipitation: 0 },
      { dt: 1690633800, precipitation: 0 },
      { dt: 1690633860, precipitation: 0 },
      { dt: 1690633920, precipitation: 0 },
      { dt: 1690633980, precipitation: 0 },
      { dt: 1690634040, precipitation: 0 },
      { dt: 1690634100, precipitation: 0 },
      { dt: 1690634160, precipitation: 0 },
      { dt: 1690634220, precipitation: 0 },
      { dt: 1690634280, precipitation: 0 },
      { dt: 1690634340, precipitation: 0 },
      { dt: 1690634400, precipitation: 0 },
      { dt: 1690634460, precipitation: 0 },
      { dt: 1690634520, precipitation: 0 },
      { dt: 1690634580, precipitation: 0 },
      { dt: 1690634640, precipitation: 0 },
      { dt: 1690634700, precipitation: 0 },
      { dt: 1690634760, precipitation: 0 },
      { dt: 1690634820, precipitation: 0 },
      { dt: 1690634880, precipitation: 0 },
      { dt: 1690634940, precipitation: 0 },
      { dt: 1690635000, precipitation: 0 },
      { dt: 1690635060, precipitation: 0 },
      { dt: 1690635120, precipitation: 0 },
      { dt: 1690635180, precipitation: 0 },
      { dt: 1690635240, precipitation: 0 },
      { dt: 1690635300, precipitation: 0 },
      { dt: 1690635360, precipitation: 0 },
      { dt: 1690635420, precipitation: 0 },
      { dt: 1690635480, precipitation: 0 },
      { dt: 1690635540, precipitation: 0 },
      { dt: 1690635600, precipitation: 0 },
      { dt: 1690635660, precipitation: 0 },
      { dt: 1690635720, precipitation: 0 },
      { dt: 1690635780, precipitation: 0 },
      { dt: 1690635840, precipitation: 0 },
      { dt: 1690635900, precipitation: 0 },
      { dt: 1690635960, precipitation: 0 },
      { dt: 1690636020, precipitation: 0 },
      { dt: 1690636080, precipitation: 0 },
      { dt: 1690636140, precipitation: 0 },
      { dt: 1690636200, precipitation: 0 },
      { dt: 1690636260, precipitation: 0 },
      { dt: 1690636320, precipitation: 0 },
      { dt: 1690636380, precipitation: 0 },
      { dt: 1690636440, precipitation: 0 },
      { dt: 1690636500, precipitation: 0 },
      { dt: 1690636560, precipitation: 0 },
      { dt: 1690636620, precipitation: 0 },
      { dt: 1690636680, precipitation: 0 },
      { dt: 1690636740, precipitation: 0 },
    ],
    hourly: [
      {
        dt: 1690632000,
        temp: 301.23,
        feels_like: 303.7,
        pressure: 1006,
        humidity: 68,
        dew_point: 294.77,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 3.37,
        wind_deg: 237,
        wind_gust: 6.2,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0,
      },
      {
        dt: 1690635600,
        temp: 301.19,
        feels_like: 303.63,
        pressure: 1006,
        humidity: 68,
        dew_point: 294.73,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.62,
        wind_deg: 230,
        wind_gust: 5.43,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0,
      },
      {
        dt: 1690639200,
        temp: 301.11,
        feels_like: 303.36,
        pressure: 1006,
        humidity: 67,
        dew_point: 294.41,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.44,
        wind_deg: 228,
        wind_gust: 5.02,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0,
      },
      {
        dt: 1690642800,
        temp: 300.92,
        feels_like: 303.14,
        pressure: 1007,
        humidity: 68,
        dew_point: 294.47,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.67,
        wind_deg: 219,
        wind_gust: 4.82,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0,
      },
      {
        dt: 1690646400,
        temp: 300.68,
        feels_like: 302.72,
        pressure: 1007,
        humidity: 68,
        dew_point: 294.25,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.54,
        wind_deg: 216,
        wind_gust: 4.12,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0,
      },
      {
        dt: 1690650000,
        temp: 300.56,
        feels_like: 302.62,
        pressure: 1007,
        humidity: 69,
        dew_point: 294.41,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.78,
        wind_deg: 214,
        wind_gust: 4.32,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0,
      },
      {
        dt: 1690653600,
        temp: 300.55,
        feels_like: 302.7,
        pressure: 1006,
        humidity: 70,
        dew_point: 294.51,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.86,
        wind_deg: 221,
        wind_gust: 4.62,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0,
      },
      {
        dt: 1690657200,
        temp: 300.52,
        feels_like: 302.75,
        pressure: 1006,
        humidity: 71,
        dew_point: 294.71,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.72,
        wind_deg: 223,
        wind_gust: 4.61,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0,
      },
      {
        dt: 1690660800,
        temp: 300.44,
        feels_like: 302.6,
        pressure: 1005,
        humidity: 71,
        dew_point: 294.76,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.76,
        wind_deg: 220,
        wind_gust: 4.72,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0,
      },
      {
        dt: 1690664400,
        temp: 300.37,
        feels_like: 302.57,
        pressure: 1005,
        humidity: 72,
        dew_point: 294.81,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.88,
        wind_deg: 216,
        wind_gust: 4.81,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0,
      },
      {
        dt: 1690668000,
        temp: 300.36,
        feels_like: 302.55,
        pressure: 1005,
        humidity: 72,
        dew_point: 294.81,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 3.12,
        wind_deg: 217,
        wind_gust: 5.11,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0,
      },
      {
        dt: 1690671600,
        temp: 300.31,
        feels_like: 302.46,
        pressure: 1006,
        humidity: 72,
        dew_point: 294.79,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.86,
        wind_deg: 229,
        wind_gust: 5.01,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0,
      },
      {
        dt: 1690675200,
        temp: 300.23,
        feels_like: 302.41,
        pressure: 1006,
        humidity: 73,
        dew_point: 295.01,
        uvi: 0.04,
        clouds: 100,
        visibility: 10000,
        wind_speed: 2.66,
        wind_deg: 223,
        wind_gust: 4.81,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0,
      },
      {
        dt: 1690678800,
        temp: 300.34,
        feels_like: 302.61,
        pressure: 1007,
        humidity: 73,
        dew_point: 295.11,
        uvi: 0.58,
        clouds: 100,
        visibility: 10000,
        wind_speed: 3.16,
        wind_deg: 218,
        wind_gust: 5.8,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.12,
      },
      {
        dt: 1690682400,
        temp: 300.63,
        feels_like: 303.06,
        pressure: 1008,
        humidity: 72,
        dew_point: 295.2,
        uvi: 1.41,
        clouds: 100,
        visibility: 10000,
        wind_speed: 3.57,
        wind_deg: 219,
        wind_gust: 7.11,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.08,
      },
      {
        dt: 1690686000,
        temp: 300.96,
        feels_like: 303.45,
        pressure: 1008,
        humidity: 70,
        dew_point: 295.13,
        uvi: 2.46,
        clouds: 100,
        visibility: 10000,
        wind_speed: 3.81,
        wind_deg: 227,
        wind_gust: 8.05,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.04,
      },
      {
        dt: 1690689600,
        temp: 301.57,
        feels_like: 304.35,
        pressure: 1008,
        humidity: 68,
        dew_point: 295.13,
        uvi: 2.43,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.26,
        wind_deg: 233,
        wind_gust: 8.8,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.08,
      },
      {
        dt: 1690693200,
        temp: 302.03,
        feels_like: 305.27,
        pressure: 1007,
        humidity: 68,
        dew_point: 295.51,
        uvi: 2.78,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.89,
        wind_deg: 231,
        wind_gust: 10.7,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.08,
      },
      {
        dt: 1690696800,
        temp: 301.93,
        feels_like: 305.06,
        pressure: 1006,
        humidity: 68,
        dew_point: 295.61,
        uvi: 2.71,
        clouds: 100,
        visibility: 10000,
        wind_speed: 5.71,
        wind_deg: 237,
        wind_gust: 12.01,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.08,
      },
      {
        dt: 1690700400,
        temp: 301.78,
        feels_like: 304.76,
        pressure: 1006,
        humidity: 68,
        dew_point: 295.31,
        uvi: 1.93,
        clouds: 100,
        visibility: 10000,
        wind_speed: 6.39,
        wind_deg: 244,
        wind_gust: 12.85,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.4,
      },
      {
        dt: 1690704000,
        temp: 301.74,
        feels_like: 304.52,
        pressure: 1005,
        humidity: 67,
        dew_point: 295.11,
        uvi: 1.31,
        clouds: 100,
        visibility: 10000,
        wind_speed: 6.4,
        wind_deg: 251,
        wind_gust: 13.31,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.4,
      },
      {
        dt: 1690707600,
        temp: 301.63,
        feels_like: 304.31,
        pressure: 1005,
        humidity: 67,
        dew_point: 294.91,
        uvi: 0.68,
        clouds: 100,
        visibility: 10000,
        wind_speed: 6.32,
        wind_deg: 252,
        wind_gust: 13.11,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.44,
      },
      {
        dt: 1690711200,
        temp: 301.33,
        feels_like: 303.75,
        pressure: 1005,
        humidity: 67,
        dew_point: 294.63,
        uvi: 0.24,
        clouds: 100,
        visibility: 10000,
        wind_speed: 5.93,
        wind_deg: 253,
        wind_gust: 12.64,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.32,
      },
      {
        dt: 1690714800,
        temp: 301.13,
        feels_like: 303.52,
        pressure: 1006,
        humidity: 68,
        dew_point: 294.63,
        uvi: 0.04,
        clouds: 100,
        visibility: 10000,
        wind_speed: 5.19,
        wind_deg: 251,
        wind_gust: 10.11,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.2,
      },
      {
        dt: 1690718400,
        temp: 300.65,
        feels_like: 302.88,
        pressure: 1007,
        humidity: 70,
        dew_point: 294.82,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.46,
        wind_deg: 252,
        wind_gust: 9.13,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0.2,
      },
      {
        dt: 1690722000,
        temp: 300.37,
        feels_like: 302.57,
        pressure: 1007,
        humidity: 72,
        dew_point: 295.02,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 3.54,
        wind_deg: 252,
        wind_gust: 8.4,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0.08,
      },
      {
        dt: 1690725600,
        temp: 300.46,
        feels_like: 302.74,
        pressure: 1008,
        humidity: 72,
        dew_point: 295.13,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 3.52,
        wind_deg: 238,
        wind_gust: 8,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0.08,
      },
      {
        dt: 1690729200,
        temp: 300.51,
        feels_like: 302.94,
        pressure: 1008,
        humidity: 73,
        dew_point: 295.31,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 3.8,
        wind_deg: 235,
        wind_gust: 7.82,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0.08,
      },
      {
        dt: 1690732800,
        temp: 300.56,
        feels_like: 302.93,
        pressure: 1008,
        humidity: 72,
        dew_point: 295.11,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 3.7,
        wind_deg: 235,
        wind_gust: 7.7,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0.04,
      },
      {
        dt: 1690736400,
        temp: 300.56,
        feels_like: 302.72,
        pressure: 1008,
        humidity: 70,
        dew_point: 294.71,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.02,
        wind_deg: 235,
        wind_gust: 8.13,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0.04,
      },
      {
        dt: 1690740000,
        temp: 300.56,
        feels_like: 302.82,
        pressure: 1007,
        humidity: 71,
        dew_point: 294.71,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.44,
        wind_deg: 230,
        wind_gust: 8.82,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0.04,
      },
      {
        dt: 1690743600,
        temp: 300.65,
        feels_like: 302.99,
        pressure: 1006,
        humidity: 71,
        dew_point: 294.81,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 5.07,
        wind_deg: 229,
        wind_gust: 9.61,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0.04,
      },
      {
        dt: 1690747200,
        temp: 300.56,
        feels_like: 302.93,
        pressure: 1006,
        humidity: 72,
        dew_point: 295.11,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 5.17,
        wind_deg: 223,
        wind_gust: 9.51,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0.08,
      },
      {
        dt: 1690750800,
        temp: 300.56,
        feels_like: 303.14,
        pressure: 1006,
        humidity: 74,
        dew_point: 295.34,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 5.29,
        wind_deg: 221,
        wind_gust: 9.43,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0.2,
      },
      {
        dt: 1690754400,
        temp: 300.66,
        feels_like: 303.34,
        pressure: 1007,
        humidity: 74,
        dew_point: 295.61,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 5.01,
        wind_deg: 224,
        wind_gust: 9,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        pop: 0.32,
      },
      {
        dt: 1690758000,
        temp: 300.49,
        feels_like: 303.11,
        pressure: 1007,
        humidity: 75,
        dew_point: 295.71,
        uvi: 0,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.51,
        wind_deg: 223,
        wind_gust: 8.21,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10n" },
        ],
        pop: 0.36,
        rain: { "1h": 0.13 },
      },
      {
        dt: 1690761600,
        temp: 300.48,
        feels_like: 303.09,
        pressure: 1008,
        humidity: 75,
        dew_point: 295.71,
        uvi: 0.09,
        clouds: 100,
        visibility: 10000,
        wind_speed: 3.97,
        wind_deg: 235,
        wind_gust: 8.02,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.44,
      },
      {
        dt: 1690765200,
        temp: 300.69,
        feels_like: 303.4,
        pressure: 1009,
        humidity: 74,
        dew_point: 295.71,
        uvi: 0.45,
        clouds: 100,
        visibility: 10000,
        wind_speed: 3.31,
        wind_deg: 239,
        wind_gust: 7.11,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.56,
      },
      {
        dt: 1690768800,
        temp: 301.03,
        feels_like: 303.97,
        pressure: 1009,
        humidity: 73,
        dew_point: 295.61,
        uvi: 1.1,
        clouds: 100,
        visibility: 10000,
        wind_speed: 3.13,
        wind_deg: 224,
        wind_gust: 6.53,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.52,
      },
      {
        dt: 1690772400,
        temp: 303.43,
        feels_like: 306.96,
        pressure: 1009,
        humidity: 62,
        dew_point: 295.41,
        uvi: 1.91,
        clouds: 100,
        visibility: 10000,
        wind_speed: 6.08,
        wind_deg: 224,
        wind_gust: 10.1,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.48,
      },
      {
        dt: 1690776000,
        temp: 303.99,
        feels_like: 307.66,
        pressure: 1009,
        humidity: 60,
        dew_point: 295.21,
        uvi: 6.67,
        clouds: 100,
        visibility: 10000,
        wind_speed: 6.76,
        wind_deg: 236,
        wind_gust: 10.11,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.44,
      },
      {
        dt: 1690779600,
        temp: 303.31,
        feels_like: 306.93,
        pressure: 1008,
        humidity: 63,
        dew_point: 295.52,
        uvi: 7.65,
        clouds: 100,
        visibility: 10000,
        wind_speed: 5.12,
        wind_deg: 240,
        wind_gust: 9.01,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.48,
      },
      {
        dt: 1690783200,
        temp: 302.72,
        feels_like: 306.33,
        pressure: 1008,
        humidity: 66,
        dew_point: 295.61,
        uvi: 7.45,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.5,
        wind_deg: 252,
        wind_gust: 7.72,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        pop: 0.6,
        rain: { "1h": 0.19 },
      },
      {
        dt: 1690786800,
        temp: 302.58,
        feels_like: 306.23,
        pressure: 1007,
        humidity: 67,
        dew_point: 295.81,
        uvi: 5.9,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.43,
        wind_deg: 251,
        wind_gust: 8.51,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        pop: 0.76,
        rain: { "1h": 0.31 },
      },
      {
        dt: 1690790400,
        temp: 302.52,
        feels_like: 306.1,
        pressure: 1007,
        humidity: 67,
        dew_point: 295.76,
        uvi: 3.98,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.47,
        wind_deg: 239,
        wind_gust: 8.92,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        pop: 0.68,
        rain: { "1h": 0.13 },
      },
      {
        dt: 1690794000,
        temp: 303.01,
        feels_like: 306.73,
        pressure: 1006,
        humidity: 65,
        dew_point: 295.63,
        uvi: 2.08,
        clouds: 100,
        visibility: 10000,
        wind_speed: 5.24,
        wind_deg: 233,
        wind_gust: 11.21,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.56,
      },
      {
        dt: 1690797600,
        temp: 302.39,
        feels_like: 305.64,
        pressure: 1006,
        humidity: 66,
        dew_point: 295.43,
        uvi: 0.4,
        clouds: 100,
        visibility: 10000,
        wind_speed: 5.55,
        wind_deg: 230,
        wind_gust: 9.72,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.56,
      },
      {
        dt: 1690801200,
        temp: 302.01,
        feels_like: 305.05,
        pressure: 1007,
        humidity: 67,
        dew_point: 295.41,
        uvi: 0.07,
        clouds: 100,
        visibility: 10000,
        wind_speed: 4.9,
        wind_deg: 232,
        wind_gust: 8.41,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        pop: 0.52,
      },
    ],
    daily: [
      {
        dt: 1690606800,
        sunrise: 1690585478,
        sunset: 1690631287,
        moonrise: 1690619340,
        moonset: 1690571040,
        moon_phase: 0.36,
        temp: {
          day: 302.9,
          min: 300.34,
          max: 302.9,
          night: 300.68,
          eve: 301.37,
          morn: 300.78,
        },
        feels_like: { day: 305.51, night: 302.72, eve: 303.83, morn: 302.89 },
        pressure: 1007,
        humidity: 60,
        dew_point: 294.41,
        wind_speed: 4.19,
        wind_deg: 249,
        wind_gust: 8.93,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: 100,
        pop: 0.2,
        uvi: 6.42,
      },
      {
        dt: 1690693200,
        sunrise: 1690671892,
        sunset: 1690717671,
        moonrise: 1690709640,
        moonset: 1690660920,
        moon_phase: 0.4,
        temp: {
          day: 302.03,
          min: 300.23,
          max: 302.03,
          night: 300.56,
          eve: 301.13,
          morn: 300.31,
        },
        feels_like: { day: 305.27, night: 302.93, eve: 303.52, morn: 302.46 },
        pressure: 1007,
        humidity: 68,
        dew_point: 295.51,
        wind_speed: 6.4,
        wind_deg: 251,
        wind_gust: 13.31,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: 100,
        pop: 0.44,
        uvi: 2.78,
      },
      {
        dt: 1690779600,
        sunrise: 1690758306,
        sunset: 1690804054,
        moonrise: 1690799880,
        moonset: 1690751220,
        moon_phase: 0.44,
        temp: {
          day: 303.31,
          min: 300.46,
          max: 303.99,
          night: 300.54,
          eve: 302.01,
          morn: 300.49,
        },
        feels_like: { day: 306.93, night: 302.99, eve: 305.05, morn: 303.11 },
        pressure: 1008,
        humidity: 63,
        dew_point: 295.52,
        wind_speed: 6.76,
        wind_deg: 236,
        wind_gust: 11.21,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        clouds: 100,
        pop: 0.76,
        rain: 0.76,
        uvi: 7.65,
      },
      {
        dt: 1690866000,
        sunrise: 1690844719,
        sunset: 1690890436,
        moonrise: 1690889940,
        moonset: 1690841700,
        moon_phase: 0.48,
        temp: {
          day: 304.81,
          min: 300.27,
          max: 304.89,
          night: 300.88,
          eve: 302.35,
          morn: 300.37,
        },
        feels_like: { day: 308.62, night: 303.54, eve: 305.38, morn: 302.77 },
        pressure: 1008,
        humidity: 57,
        dew_point: 295.21,
        wind_speed: 6.16,
        wind_deg: 264,
        wind_gust: 8.6,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: 100,
        pop: 0.16,
        uvi: 8.28,
      },
      {
        dt: 1690952400,
        sunrise: 1690931132,
        sunset: 1690976817,
        moonrise: 1690979640,
        moonset: 1690932120,
        moon_phase: 0.5,
        temp: {
          day: 304.21,
          min: 300.24,
          max: 304.21,
          night: 301.13,
          eve: 301.53,
          morn: 300.84,
        },
        feels_like: { day: 307.63, night: 303.52, eve: 304.13, morn: 303.47 },
        pressure: 1008,
        humidity: 58,
        dew_point: 294.91,
        wind_speed: 4.98,
        wind_deg: 257,
        wind_gust: 7.3,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: 100,
        pop: 0.28,
        uvi: 9.9,
      },
      {
        dt: 1691038800,
        sunrise: 1691017545,
        sunset: 1691063198,
        moonrise: 1691069040,
        moonset: 1691022420,
        moon_phase: 0.56,
        temp: {
          day: 301.47,
          min: 298.76,
          max: 301.47,
          night: 300,
          eve: 299.99,
          morn: 298.96,
        },
        feels_like: { day: 304.01, night: 301.68, eve: 301.74, morn: 299.63 },
        pressure: 1009,
        humidity: 67,
        dew_point: 294.73,
        wind_speed: 4.13,
        wind_deg: 248,
        wind_gust: 7.61,
        weather: [
          { id: 500, main: "Rain", description: "light rain", icon: "10d" },
        ],
        clouds: 100,
        pop: 0.52,
        rain: 2.19,
        uvi: 10,
      },
      {
        dt: 1691125200,
        sunrise: 1691103957,
        sunset: 1691149578,
        moonrise: 1691158140,
        moonset: 1691112420,
        moon_phase: 0.6,
        temp: {
          day: 304.15,
          min: 299.13,
          max: 304.15,
          night: 300.58,
          eve: 301.43,
          morn: 299.13,
        },
        feels_like: { day: 307.51, night: 302.65, eve: 303.94, morn: 299.13 },
        pressure: 1010,
        humidity: 58,
        dew_point: 294.81,
        wind_speed: 5.16,
        wind_deg: 254,
        wind_gust: 7.02,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: 98,
        pop: 0.12,
        uvi: 10,
      },
      {
        dt: 1691211600,
        sunrise: 1691190369,
        sunset: 1691235957,
        moonrise: 1691247120,
        moonset: 1691202300,
        moon_phase: 0.63,
        temp: {
          day: 307.66,
          min: 300.17,
          max: 307.66,
          night: 300.73,
          eve: 302.76,
          morn: 300.17,
        },
        feels_like: { day: 311.3, night: 302.92, eve: 305.44, morn: 302.21 },
        pressure: 1007,
        humidity: 46,
        dew_point: 294.44,
        wind_speed: 6.97,
        wind_deg: 268,
        wind_gust: 8.61,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: 100,
        pop: 0,
        uvi: 10,
      },
    ],
  });

  const userLocation = { lat: 13, lon: 100 };
  changeBg(weather.current.weather[0].main);

  return (
    <div className="mainContainer">
      <Current currentWeather={weather.current} />
    </div>
  );
};

export default Weather;
