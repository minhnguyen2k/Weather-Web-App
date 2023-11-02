import Counter from '../../../../Counter';
import DailyWeatherDetailCard from '../../DailyWeatherDetailCard';
import './style.scss';

interface Props {
  windSpeed: number;
  windDegree: number;
}

const WindStatusCard = ({ windSpeed, windDegree }: Props) => {
  return (
    <DailyWeatherDetailCard title="Wind Status">
      <div className="wind-speed">
        <Counter
          value={windSpeed}
          changePerTime={windSpeed / 100}
          time={1000}
        />
        <span className="wind-speed__unit">m/h</span>
      </div>

      <div className="wind-direction">
        <img
          className="wind-direction__image"
          style={{ transform: `rotate(${windDegree}deg)` }}
          src="/today/direction.png"
          alt="wind-direction"
        />

        <div className="wind-direction__counter">
          <Counter
            value={windDegree}
            changePerTime={windDegree / 100}
            time={1000}
            style={{ fontSize: '18px', fontWeight: 400 }}
          />

          <span className="wind-direction__counter__unit">degrees</span>
        </div>
      </div>
    </DailyWeatherDetailCard>
  );
};

export default WindStatusCard;
