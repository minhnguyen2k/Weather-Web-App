import { FC } from 'react';

import './style.scss';
import {
  IWeatherForecastDay,
  IWeatherForecastHour,
} from '../../../../model/weather';
import { days, weatherAsset } from '../../../../utils/constants';
import { Player } from '@lottiefiles/react-lottie-player';
import { getCurrentHour } from '../../../../utils/generalHelpers';
import { TemperatureUnitType } from '../../../../App';
import ElementAnimation from '../../../ElementAnimation';

interface Props {
  type: 'today' | 'week';
  weather: IWeatherForecastHour | IWeatherForecastDay;
  date?: string;
  temperatureUnit: TemperatureUnitType;
}

const WeatherForecastCard: FC<Props> = ({
  type,
  weather,
  date,
  temperatureUnit,
}) => {
  const getCurrentWeatherCondition = (code: number | undefined) => {
    const currentWeather = weatherAsset.find(weather => weather.code === code);
    return currentWeather;
  };

  const weatherData = () => {
    let weatherData: IWeatherForecastHour | IWeatherForecastDay;
    if (type === 'today') {
      weatherData = weather as IWeatherForecastHour;
      return {
        hour: getCurrentHour(weatherData?.time_epoch),
        iconLottie: getCurrentWeatherCondition(weatherData?.condition.code)
          ?.lottieUrl,
        tempC: weatherData?.temp_c,
        tempF: weatherData?.temp_f,
      };
    }
    weatherData = weather as IWeatherForecastDay;
    return {
      day: date,
      iconLottie: getCurrentWeatherCondition(weatherData?.condition.code)
        ?.lottieUrl,
      minTempC: weatherData?.mintemp_c,
      maxTempC: weatherData?.maxtemp_c,
      minTempF: weatherData?.mintemp_f,
      maxTempF: weatherData?.mintemp_f,
    };
  };

  const data = weatherData();

  return (
    <div className="card">
      {type === 'today' ? (
        <>
          <p>{data.hour}</p>
          <Player
            autoplay
            speed={2}
            loop
            src={data.iconLottie || ''}
            style={{ width: '60px', height: '60px' }}
          />
          {temperatureUnit === '' ? (
            <p>
              {Math.round(data.tempC || 0)}
              <span style={{ fontSize: '20px' }}>°</span>
            </p>
          ) : (
            <ElementAnimation
              targetOne={
                <p>
                  {Math.round(data.tempC || 0)}
                  <span style={{ fontSize: '20px' }}>°</span>
                </p>
              }
              targetTwo={
                <p>
                  {Math.round(data.tempF || 0)}
                  <span style={{ fontSize: '20px' }}>°</span>
                </p>
              }
              isTargetOneOverlapped={temperatureUnit === 'celsius'}
              isTargetTwoOverlapped={temperatureUnit === 'fahrenheit'}
            />
          )}
        </>
      ) : (
        <>
          <p>{days[new Date(data.day || '').getDay()]}</p>
          <Player
            className="card__weather-icon"
            autoplay
            speed={2}
            loop
            src={data.iconLottie || ''}
            style={{ width: '60px', height: '60px' }}
          />
          {temperatureUnit === '' ? (
            <div className="card__temp-range">
              <p>
                {Math.round(data.minTempC || 0)}
                <span style={{ fontSize: '20px' }}>°</span>
              </p>
              <p className="card__temp-range__max-temp">
                {Math.round(data.maxTempC || 0)}
                <span style={{ fontSize: '20px' }}>°</span>
              </p>
            </div>
          ) : (
            <ElementAnimation
              targetOne={
                <div className="card__temp-range">
                  <p>
                    {Math.round(data.minTempC || 0)}
                    <span style={{ fontSize: '20px' }}>°</span>
                  </p>
                  <p className="card__temp-range__max-temp">
                    {Math.round(data.maxTempC || 0)}
                    <span style={{ fontSize: '20px' }}>°</span>
                  </p>
                </div>
              }
              targetTwo={
                <div className="card__temp-range">
                  <p>
                    {Math.round(data.minTempF || 0)}
                    <span style={{ fontSize: '20px' }}>°</span>
                  </p>
                  <p className="card__temp-range__max-temp">
                    {Math.round(data.maxTempF || 0)}
                    <span style={{ fontSize: '20px' }}>°</span>
                  </p>
                </div>
              }
              isTargetOneOverlapped={temperatureUnit === 'celsius'}
              isTargetTwoOverlapped={temperatureUnit === 'fahrenheit'}
            />
          )}
        </>
      )}
    </div>
  );
};

export default WeatherForecastCard;
