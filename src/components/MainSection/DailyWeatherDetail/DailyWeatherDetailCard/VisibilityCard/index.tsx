import Counter from '../../../../Counter';
import DailyWeatherDetailCard from '../../DailyWeatherDetailCard';
import './style.scss';

interface Props {
  visibility: number;
}

const VisibilityCard = ({ visibility }: Props) => {
  return (
    <DailyWeatherDetailCard title="Visibility">
      <div className="visibility">
        <Counter
          value={visibility}
          changePerTime={visibility / 100}
          time={1000}
        />
        <span className="visibility__unit">km</span>
      </div>

      <div className="visibility-evaluate">
        <img
          className="visibility-evaluate__image"
          src="/today/visibility.png"
          alt="visibility"
        />

        <p>
          {visibility < 3
            ? 'Too much dust'
            : visibility < 7
            ? 'Normal'
            : 'Good for eyes'}
        </p>
      </div>
    </DailyWeatherDetailCard>
  );
};

export default VisibilityCard;
