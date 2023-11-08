import { Player } from '@lottiefiles/react-lottie-player';
import './style.scss';

export interface IWeatherForecastCard {
  time: string;
  status: string;
  temperature: number | { minTemp: number; maxTemp: number };
}

interface Props {
  weather: IWeatherForecastCard;
}

const WeatherForecastCard = ({ weather }: Props) => {
  return (
    <div className="card">
      <>
        <p>{weather.time}</p>
        <Player
          autoplay
          speed={2}
          loop
          src={weather.status}
          style={{ width: '60px', height: '60px' }}
        />
        {typeof weather.temperature === 'number' ? (
          <p>
            {weather.temperature}
            <span style={{ fontSize: '20px' }}>°</span>
          </p>
        ) : (
          <div className="card__temp-range">
            <p>
              {weather.temperature.minTemp}
              <span style={{ fontSize: '20px' }}>°</span>
            </p>
            <p className="card__temp-range__max-temp">
              {weather.temperature.maxTemp}
              <span style={{ fontSize: '20px' }}>°</span>
            </p>
          </div>
        )}
      </>
    </div>
  );
};

export default WeatherForecastCard;
