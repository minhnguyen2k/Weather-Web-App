import { TemperatureUnitType } from '../../../App';
import {
  IWeatherForecast,
  IWeatherForecastHour,
  IWeatherForecastWeekly,
} from '../../../model/weather';
import { ForecastType } from '../MainSection';
import WeatherForecastCard from './WeatherForecastCard';

interface Props {
  weatherForecast?: IWeatherForecast;
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
              weatherForecast?.forecast.forecastday[0].hour[index * 3],
          )
          .concat(weatherForecast?.forecast.forecastday[0].hour.slice(-2))
      : weatherForecast?.forecast.forecastday;

  return (
    <div className="main__content__forecast">
      {weatherForecastList?.map((weather, index) => {
        if (forecastType === 'today') {
          return (
            <WeatherForecastCard
              type="today"
              weather={weather as IWeatherForecastHour}
              key={index}
              temperatureUnit={temperatureUnit}
            />
          );
        } else {
          return (
            <WeatherForecastCard
              type="week"
              weather={(weather as IWeatherForecastWeekly).day}
              date={(weather as IWeatherForecastWeekly).date}
              key={index}
              temperatureUnit={temperatureUnit}
            />
          );
        }
      })}
    </div>
  );
};

export default WeatherForecastList;
