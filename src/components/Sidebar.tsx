import { FC } from 'react';
import '../styles/sidebar.scss';
import { ICurrentWeather } from '../model/weather';
import { days, weatherAsset } from '../utils/constants';
import { Player } from '@lottiefiles/react-lottie-player';

interface Props {
  currentWeather?: ICurrentWeather;
}

const Sidebar: FC<Props> = ({ currentWeather }) => {
  const updatedDate =
    currentWeather && new Date(currentWeather.location.localtime_epoch * 1000);
  const updatedDateText =
    updatedDate &&
    `${
      days[updatedDate.getDay()]
    }, ${updatedDate.getHours()}:${updatedDate.getMinutes()}`;

  const getCurrentWeatherCondition = (code: number | undefined) => {
    const currentWeather = weatherAsset.find(weather => weather.code === code);
    return currentWeather;
  };

  return (
    <div className="sidebar">
      <div className="sidebar__location">
        <p>{currentWeather?.location.name}</p>
        <p>Location</p>
      </div>

      <div>
        <Player
          autoplay
          loop
          src={
            getCurrentWeatherCondition(currentWeather?.current.condition.code)
              ?.lottieUrl || ''
          }
        />
      </div>

      <div>
        <p className="sidebar__temperature">
          {currentWeather?.current.temp_c}
          <sup>ºC</sup>
        </p>
      </div>

      <div>
        <p className="sidebar__current-time">{updatedDateText}</p>
      </div>

      <div className="sidebar__weather-state">
        <img
          className="sidebar__weather-state__icon"
          src={`/weather/day/${
            getCurrentWeatherCondition(currentWeather?.current.condition.code)
              ?.icon
          }.png`}
        />
        <div className="sidebar__weather-state__description">
          <p>{currentWeather?.current.condition.text}</p>
        </div>
      </div>
      <div className="sidebar__weather-card">
        <img
          className="sidebar__weather-card__image"
          src={
            getCurrentWeatherCondition(currentWeather?.current.condition.code)
              ?.imageUrl
          }
          alt="weatherImage"
        />
      </div>
    </div>
  );
};

export default Sidebar;
