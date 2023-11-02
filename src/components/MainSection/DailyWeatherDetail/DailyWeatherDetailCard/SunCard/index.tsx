import DailyWeatherDetailCard from '../../DailyWeatherDetailCard';
import './style.scss';

interface Props {
  sunrise: string;
  sunset: string;
}

const SunCard = ({ sunrise, sunset }: Props) => {
  const sunriseTransform = sunrise.split(' ')[0];

  const sunsetTransform = sunset.split(' ')[0];

  const calculateDifference = (hour: number, minute: number) => {
    let diffHour = Math.abs(hour - new Date().getHours());

    let diffMinute = Math.abs(minute - new Date().getMinutes());

    if (
      new Date().getHours() > hour &&
      minute - new Date().getMinutes() > 0 &&
      60 - minute + new Date().getMinutes() < 60
    ) {
      diffHour -= 1;
      diffMinute = 60 - minute + new Date().getMinutes();
    }

    if (
      new Date().getHours() < hour &&
      minute - new Date().getMinutes() < 0 &&
      60 - new Date().getMinutes() + minute < 60
    ) {
      diffHour -= 1;
      diffMinute = 60 - new Date().getMinutes() + minute;
    }

    const diffTime = `${diffHour}h ${
      diffMinute.toString().length != 1 ? diffMinute : `0${diffMinute}`
    }m`;

    if (
      hour > new Date().getHours() ||
      (hour === new Date().getHours() && diffMinute > 0)
    ) {
      return `+${diffTime}`;
    }

    if (hour === new Date().getHours() && minute === new Date().getMinutes()) {
      return 'Now';
    }

    return `-${diffTime}`;
  };

  return (
    <DailyWeatherDetailCard title="Sunrise and Sunset">
      <div className="twilight">
        <img
          className="twilight__image"
          src="/today/sunrise.png"
          alt="sunrise"
        />

        <div className="twilight__time">
          <p>{sunrise}</p>
          <p>
            {calculateDifference(
              parseInt(sunriseTransform.split(':')[0]),
              parseInt(sunriseTransform.split(':')[1]),
            )}
          </p>
        </div>
      </div>

      <div className="twilight">
        <img className="twilight__image" src="/today/sunset.png" alt="sunset" />

        <div className="twilight__time">
          <p>{sunset}</p>
          <p>
            {calculateDifference(
              parseInt(sunsetTransform.split(':')[0]) + 12,
              parseInt(sunsetTransform.split(':')[1]),
            )}
          </p>
        </div>
      </div>
    </DailyWeatherDetailCard>
  );
};

export default SunCard;
