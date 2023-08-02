import axios from 'axios';

export const getCurrentWeather = async (lat: number, lon: number) => {
  return await axios.get('http://api.weatherapi.com/v1/current.json', {
    params: {
      q: `${lat},${lon}`,
      key: import.meta.env.VITE_WEATHER_API_KEY,
    },
  });
};

export const getWeatherForecast = async (
  lat: number,
  lon: number,
  days: number,
) => {
  return await axios.get('http://api.weatherapi.com/v1/forecast.json', {
    params: {
      q: `${lat},${lon}`,
      key: import.meta.env.VITE_WEATHER_API_KEY,
      days,
    },
  });
};
