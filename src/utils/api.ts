import axios from 'axios';

export const getCurrentWeather = async (lon: number, lat: number) => {
  return await axios.get('http://api.weatherapi.com/v1/forecast.json', {
    params: {
      key: 'a09b9cd0ba8d4f36aa5162155230108',
      q: `${lon},${lat}`,
      days: 5,
    },
  });
};
