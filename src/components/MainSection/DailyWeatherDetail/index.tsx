import { memo } from 'react';
import { IWeatherForecast } from '../../../model/weather';
import AirPressureCard from './DailyWeatherDetailCard/AirPressureCard';
import HumidityCard from './DailyWeatherDetailCard/HumidityCard';
import SunCard from './DailyWeatherDetailCard/SunCard';
import UvIndexCard from './DailyWeatherDetailCard/UvIndexCard';
import VisibilityCard from './DailyWeatherDetailCard/VisibilityCard';
import WindStatusCard from './DailyWeatherDetailCard/WindStatusCard';

interface Props {
  weatherForecast: IWeatherForecast;
}

const DailyWeatherDetail = memo(function DailyWeatherDetail({
  weatherForecast,
}: Props) {
  const weatherToday = weatherForecast.forecast.forecastday[0];

  return (
    <div className="main__content__daily-detail-forecast">
      <UvIndexCard uvIndex={weatherToday.day.uv} />

      <WindStatusCard
        windSpeed={weatherForecast.current.wind_mph}
        windDegree={weatherForecast.current.wind_degree}
      />

      <SunCard
        sunrise={weatherToday.astro.sunrise}
        sunset={weatherToday.astro.sunset}
      />

      <HumidityCard humidity={weatherToday.day.avghumidity} />

      <VisibilityCard visibility={weatherToday.day.avgvis_km} />

      <AirPressureCard airPressure={weatherForecast.current.pressure_mb} />
    </div>
  );
});

export default DailyWeatherDetail;
