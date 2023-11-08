import { useState } from 'react';
import { TemperatureUnitType } from '../../App';
import { IWeatherForecast } from '../../model/weather';
import '../../styles/main.scss';
import DailyWeatherDetail from './DailyWeatherDetail';
import Navbar from './Navbar';
import WeatherForecastList from './WeatherForecastList';

interface Props {
  weatherForecast: IWeatherForecast;
  onChangeTemperatureUnit(temperatureUnit: TemperatureUnitType): void;
  temperatureUnit: TemperatureUnitType;
}

export type ForecastType = 'today' | 'week';

const MainSection = ({
  weatherForecast,
  onChangeTemperatureUnit,
  temperatureUnit,
}: Props) => {
  const [forecastType, setForecastType] = useState<ForecastType>('today');

  const handleChangeForecastType = (type: ForecastType) => {
    setForecastType(type);
  };

  return (
    <div className="main">
      <Navbar
        onChangeForecastType={handleChangeForecastType}
        forecastType={forecastType}
        onChangeTemperatureUnit={onChangeTemperatureUnit}
        temperatureUnit={temperatureUnit}
      />

      <div className="main__content">
        <WeatherForecastList
          weatherForecast={weatherForecast}
          forecastType={forecastType}
          temperatureUnit={temperatureUnit}
        />

        <DailyWeatherDetail weatherForecast={weatherForecast} />
      </div>
    </div>
  );
};

export default MainSection;
