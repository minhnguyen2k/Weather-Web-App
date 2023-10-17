import { FC } from 'react';

import './style.scss';
import {
  IWeatherForecastDay,
  IWeatherForecastHour,
} from '../../../model/weather';
import { weatherAsset } from '../../../utils/constants';
import { Player } from '@lottiefiles/react-lottie-player';
import { getCurrentHour } from '../../../utils/generealHelpers';

interface Props {
  type: 'today' | 'week';
  weather: IWeatherForecastHour | IWeatherForecastDay;
}

const WeatherForecastCard: FC<Props> = ({ type, weather }) => {
  const getCurrentWeatherCondition = (code: number | undefined) => {
    const currentWeather = weatherAsset.find(weather => weather.code === code);
    return currentWeather;
  };
  const weatherData = () => {
    let weatherData: IWeatherForecastHour | IWeatherForecastDay;
    if (type === 'today') {
      weatherData = weather as IWeatherForecastHour;
      return {
        hour: getCurrentHour(weatherData.time_epoch),
        iconLottie: getCurrentWeatherCondition(weatherData.condition.code)
          ?.lottieUrl,
        temperature: weatherData.temp_c,
      };
    }
    weatherData = weather as IWeatherForecastDay;
    return {
      day: weatherData.avghumidity,
      iconLottie: getCurrentWeatherCondition(weatherData.condition.code)
        ?.lottieUrl,
      minTemp: weatherData.mintemp_c,
      maxTemp: weatherData.maxtemp_c,
    };
  };
  const data = weatherData();

  return (
    <div className="card">
      {type === 'today' ? (
        <>
          <p>{data.hour}</p>
          <Player
            className="card__weather-icon"
            autoplay
            speed={2}
            loop
            src={data.iconLottie || ''}
          />
          <p>
            {Math.round(data.temperature || 0)}
            <span style={{ fontSize: '20px' }}>°</span>
          </p>
        </>
      ) : (
        <>
          <p>{data.day}</p>
          <p>{data.iconLottie}</p>
          <div className="card__temp-range">
            <p>{data.minTemp}</p>
            <p>{data.maxTemp}</p>
          </div>
          <p>{data.temperature}</p>
        </>
      )}
    </div>
  );
};

export default WeatherForecastCard;
