import Counter from '../../../../Counter';
import DailyWeatherDetailCard from '../../DailyWeatherDetailCard';
import './style.scss';

interface Props {
  humidity: number;
}

const HumidityCard = ({ humidity }: Props) => {
  return (
    <DailyWeatherDetailCard title="Humidity">
      <div className="humidity-percentage">
        <Counter value={humidity} changePerTime={humidity / 100} time={1000} />
        <span className="humidity-percentage__unit">%</span>
      </div>

      <div className="humidity-evaluate">
        <img
          className="humidity-evaluate__image"
          src="/today/humidity.png"
          alt="humidity"
        />

        <p>
          {humidity < 30 ? 'Very Dry' : humidity < 70 ? 'Normal' : 'Very Wet'}
        </p>
      </div>
    </DailyWeatherDetailCard>
  );
};

export default HumidityCard;
