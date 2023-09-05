import axios from 'axios';
import { ICurrentWeather } from '../model/weather';

export const getCurrentWeather = async (
  lat: number,
  lon: number,
): Promise<ICurrentWeather> => {
  return (
    await axios.get('http://api.weatherapi.com/v1/current.json', {
      params: {
        q: `${lat},${lon}`,
        key: import.meta.env.VITE_WEATHER_API_KEY,
      },
    })
  ).data;
};

export const getWeatherForecast = async (
  lat: number,
  lon: number,
  days: number,
) => {
  return (
    await axios.get('http://api.weatherapi.com/v1/forecast.json', {
      params: {
        q: `${lat},${lon}`,
        key: import.meta.env.VITE_WEATHER_API_KEY,
        days,
      },
    })
  ).data;
};
