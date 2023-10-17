import { FC, useMemo } from 'react';
import '../../styles/main.scss';
import { IWeatherForecast } from '../../model/weather';
import WeatherForecastCard from './WeatherForecastCard';
import UvIndexCard from './DailyWeatherDetailCard/UvIndexCard';
import WindStatusCard from './DailyWeatherDetailCard/WindStatusCard';

interface Props {
  weatherForecast?: IWeatherForecast;
}

const MainSection: FC<Props> = ({ weatherForecast }) => {
  const uvIndex = useMemo(() => {
    return weatherForecast?.forecast.forecastday[0].day.uv || 0;
  }, [weatherForecast?.forecast.forecastday]);
  return (
    <div className="main">
      <div className="main__navbar">
        <div className="main__navbar__forecast">
          <p>Today</p>
          <p>Week</p>
        </div>
        <div className="main__navbar__temperature">
          <span className="main__navbar__temperature--circle">ºC</span>
          <span className="main__navbar__temperature--circle">ºF</span>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content__forecast">
          {weatherForecast?.forecast.forecastday[0].hour.map(
            (weather, index) => {
              if (index % 3 === 0 || index > 21) {
                return (
                  <WeatherForecastCard
                    type="today"
                    weather={weather}
                    key={index}
                  />
                );
              }
            },
          )}
        </div>
        <div className="main__content__daily-detail-forecast">
          <UvIndexCard uvIndex={uvIndex} />
          <WindStatusCard />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
