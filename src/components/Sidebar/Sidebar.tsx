import { Player } from '@lottiefiles/react-lottie-player';
import { PositionType, TemperatureUnitType } from '../../App';
import { ICurrentWeather } from '../../model/weather';
import '../../styles/sidebar.scss';
import { days } from '../../utils/constants';
import { getCurrentWeatherCondition } from '../../utils/generalHelpers';
import { BiCurrentLocation } from 'react-icons/bi';

interface Props {
  currentWeather: ICurrentWeather;
  temperatureUnit: TemperatureUnitType;
  onChangePosition(position: PositionType): void;
}

const Sidebar = ({
  currentWeather,
  temperatureUnit,
  onChangePosition,
}: Props) => {
  const updatedDate = new Date(currentWeather.location.localtime_epoch * 1000);

  const updatedDateText = `${
    days[updatedDate.getDay()]
  }, ${updatedDate.getHours()}:${updatedDate.getMinutes()}`;

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('Geolocation not supported');
    }
  };

  const success = (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    if (!localStorage.getItem('position')) {
      localStorage.setItem('position', JSON.stringify({ latitude, longitude }));
      onChangePosition({ latitude, longitude });
    }
  };

  const error = () => {
    console.log('Unable to retrieve your location');
  };

  return (
    <div className="sidebar">
      <div className="sidebar__location">
        <p>{currentWeather.location.name}</p>
        <button
          data-tooltips="Your location"
          className="sidebar__location__icon"
          onClick={handleGetLocation}
        >
          <BiCurrentLocation style={{ fontSize: '26px' }} />
        </button>
      </div>

      <div>
        <Player
          autoplay
          loop
          src={
            getCurrentWeatherCondition(currentWeather.current.condition.code)
              ?.lottieUrl || ''
          }
        />
      </div>

      <div>
        <p className="sidebar__temperature">
          {temperatureUnit === 'celsius' || temperatureUnit === ''
            ? currentWeather.current.temp_c
            : currentWeather.current.temp_f}
          <sup>
            {temperatureUnit === 'celsius' || temperatureUnit === ''
              ? 'ºC'
              : 'ºF'}
          </sup>
        </p>
      </div>

      <p>{updatedDateText}</p>

      <div className="sidebar__weather-state">
        <img
          className="sidebar__weather-state__icon"
          src={`/weather/day/${
            getCurrentWeatherCondition(currentWeather.current.condition.code)
              ?.icon
          }.png`}
        />

        <div className="sidebar__weather-state__description">
          <p>{currentWeather.current.condition.text}</p>
        </div>
      </div>
      <div className="sidebar__weather-card">
        <img
          className="sidebar__weather-card__image"
          src={
            getCurrentWeatherCondition(currentWeather.current.condition.code)
              ?.imageUrl
          }
          alt="weatherImage"
        />
      </div>
    </div>
  );
};

export default Sidebar;
