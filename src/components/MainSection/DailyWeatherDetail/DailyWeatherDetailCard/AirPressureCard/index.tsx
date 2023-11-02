import Counter from '../../../../Counter';
import DailyWeatherDetailCard from '../../DailyWeatherDetailCard';
import './style.scss';

interface Props {
  airPressure: number;
}

const AirPressureCard = ({ airPressure }: Props) => {
  return (
    <DailyWeatherDetailCard title="Air Pressure">
      <div className="air-pressure">
        <Counter
          value={airPressure}
          changePerTime={airPressure / 100}
          time={1000}
        />
        <span className="air-pressure__unit">hPa</span>
      </div>

      <div className="air-pressure-evaluate">
        <img
          className="air-pressure-evaluate__image"
          src="/today/pressure.png"
          alt="air-pressure"
        />

        <p>
          {airPressure < 900
            ? 'Low Pressure'
            : airPressure < 1100
            ? 'Normal'
            : 'High Pressure'}
        </p>
      </div>
    </DailyWeatherDetailCard>
  );
};

export default AirPressureCard;
