import { weatherAsset } from './constants';

export const getCurrentWeatherCondition = (code: number) => {
  const currentWeather = weatherAsset.find(weather => weather.code === code);
  return currentWeather;
};

export const getCurrentHour = (time: number) => {
  const date = new Date(time * 1000);
  return date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
};
