import { memo } from 'react';
import { IWeatherForecast } from '../../../model/weather';
import AirPressureCard from './DailyWeatherDetailCard/AirPressureCard';
import HumidityCard from './DailyWeatherDetailCard/HumidityCard';
import SunCard from './DailyWeatherDetailCard/SunCard';
import UvIndexCard from './DailyWeatherDetailCard/UvIndexCard';
import VisibilityCard from './DailyWeatherDetailCard/VisibilityCard';
import WindStatusCard from './DailyWeatherDetailCard/WindStatusCard';

interface Props {
  weatherForecast?: IWeatherForecast;
}

const DailyWeatherDetail = memo(function DailyWeatherDetail({
  weatherForecast,
}: Props) {
  return (
    <div className="main__content__daily-detail-forecast">
      <UvIndexCard
        uvIndex={weatherForecast?.forecast.forecastday[0].day.uv || 0}
      />
      <WindStatusCard
        windSpeed={weatherForecast?.current.wind_mph || 0}
        windDegree={weatherForecast?.current.wind_degree || 0}
      />
      <SunCard
        sunrise={weatherForecast?.forecast.forecastday[0].astro.sunrise || ''}
        sunset={weatherForecast?.forecast.forecastday[0].astro.sunset || ''}
      />
      <HumidityCard
        humidity={weatherForecast?.forecast.forecastday[0].day.avghumidity || 0}
      />
      <VisibilityCard
        visibility={weatherForecast?.forecast.forecastday[0].day.avgvis_km || 0}
      />
      <AirPressureCard
        airPressure={weatherForecast?.current.pressure_mb || 0}
      />
    </div>
  );
});

export default DailyWeatherDetail;
