import { TemperatureUnitType } from '../../../App';
import {
  IWeatherForecast,
  IWeatherForecastHour,
  IWeatherForecastWeekly,
} from '../../../model/weather';
import { days } from '../../../utils/constants';
import {
  getCurrentHour,
  getCurrentWeatherCondition,
} from '../../../utils/generalHelpers';
import { ForecastType } from '../MainSection';
import WeatherForecastCard, {
  IWeatherForecastCard,
} from './WeatherForecastCard';

interface Props {
  weatherForecast: IWeatherForecast;
  forecastType: ForecastType;
  temperatureUnit: TemperatureUnitType;
}
const WeatherForecastList = ({
  weatherForecast,
  forecastType,
  temperatureUnit,
}: Props) => {
  const weatherForecastList =
    forecastType === 'today'
      ? new Array(8)
          .fill('')
          .map(
            (_, index) =>
              weatherForecast.forecast.forecastday[0].hour[index * 3],
          )
          .concat(weatherForecast.forecast.forecastday[0].hour.slice(-2))
      : weatherForecast.forecast.forecastday;

  const renderWeatherForecastHour = (
    weather: IWeatherForecastHour,
    index: number,
  ) => {
    const weatherForecast: IWeatherForecastCard = {
      time: getCurrentHour(weather.time_epoch),
      status:
        getCurrentWeatherCondition(weather.condition.code)?.lottieUrl || '',
      temperature:
        temperatureUnit === 'celsius' || temperatureUnit === ''
          ? Math.round(weather.temp_c)
          : Math.round(weather.temp_f),
    };

    return <WeatherForecastCard weather={weatherForecast} key={index} />;
  };

  const renderWeatherForecastDay = (
    weather: IWeatherForecastWeekly,
    index: number,
  ) => {
    const weatherForecastDay = weather.day;
    const weatherForecast: IWeatherForecastCard = {
      time: days[new Date(weather.date || '').getDay()],
      status:
        getCurrentWeatherCondition(weatherForecastDay.condition.code)
          ?.lottieUrl || '',
      temperature:
        temperatureUnit === 'celsius' || temperatureUnit === ''
          ? {
              minTemp: Math.round(weatherForecastDay.mintemp_c),
              maxTemp: Math.round(weatherForecastDay.maxtemp_c),
            }
          : {
              minTemp: Math.round(weatherForecastDay.mintemp_f),
              maxTemp: Math.round(weatherForecastDay.maxtemp_f),
            },
    };

    return <WeatherForecastCard weather={weatherForecast} key={index} />;
  };

  return (
    <div className="main__content__forecast">
      {weatherForecastList.map((weather, index) => {
        if (forecastType === 'today') {
          return renderWeatherForecastHour(
            weather as IWeatherForecastHour,
            index,
          );
        }
        return renderWeatherForecastDay(
          weather as IWeatherForecastWeekly,
          index,
        );
      })}
    </div>
  );
};

export default WeatherForecastList;
