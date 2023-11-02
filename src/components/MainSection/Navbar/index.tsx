import { TemperatureUnitType } from '../../../App';
import { ForecastType } from '../MainSection';

interface Props {
  onChangeForecastType(type: ForecastType): void;
  forecastType: ForecastType;
  onChangeTemperatureUnit(temperatureUnit: TemperatureUnitType): void;
  temperatureUnit: TemperatureUnitType;
}

const Navbar = ({
  onChangeForecastType,
  forecastType,
  onChangeTemperatureUnit,
  temperatureUnit,
}: Props) => {
  return (
    <div className="main__navbar">
      <div className="main__navbar__forecast">
        <p
          onClick={() => {
            onChangeForecastType('today');
          }}
          className={
            forecastType === 'today'
              ? 'main__navbar__forecast__item main__navbar__forecast__item--active'
              : 'main__navbar__forecast__item'
          }
        >
          Today
        </p>

        <p
          onClick={() => {
            onChangeForecastType('week');
          }}
          className={
            forecastType === 'week'
              ? 'main__navbar__forecast__item main__navbar__forecast__item--active'
              : 'main__navbar__forecast__item'
          }
        >
          Week
        </p>
      </div>
      <div className="main__navbar__temperature">
        <span
          className={
            temperatureUnit === 'celsius' || temperatureUnit === ''
              ? 'main__navbar__temperature--circle main__navbar__temperature--circle--active'
              : 'main__navbar__temperature--circle'
          }
          onClick={() => {
            onChangeTemperatureUnit('celsius');
          }}
        >
          ºC
        </span>
        <span
          className={
            temperatureUnit === 'fahrenheit'
              ? 'main__navbar__temperature--circle main__navbar__temperature--circle--active'
              : 'main__navbar__temperature--circle'
          }
          onClick={() => {
            onChangeTemperatureUnit('fahrenheit');
          }}
        >
          ºF
        </span>
      </div>
    </div>
  );
};

export default Navbar;