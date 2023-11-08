import { useEffect, useState } from 'react';
import { getCurrentWeather, getWeatherForecast } from './utils/api';
import Sidebar from './components/Sidebar/Sidebar';
import MainSection from './components/MainSection/MainSection';
import { ICurrentWeather, IWeatherForecast } from './model/weather';
import Loading from './components/Loading';

export type TemperatureUnitType = 'celsius' | 'fahrenheit' | '';
export type PositionType = {
  latitude: number;
  longitude: number;
};

function App() {
  const [position, setPosition] = useState<PositionType>(() => {
    const positionStorage = JSON.parse(
      localStorage.getItem('position') || 'null',
    );

    if (positionStorage && positionStorage !== 'null') {
      return {
        latitude: Number(positionStorage.latitude),
        longitude: Number(positionStorage.longitude),
      };
    }

    return {
      latitude: 21.028511,
      longitude: 105.804817,
    };
  });
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>();
  const [weatherForecast, setWeatherForecast] = useState<IWeatherForecast>();
  const [temperatureUnit, setTemperatureUnit] =
    useState<TemperatureUnitType>('');

  const handleChangeTemperatureUnit = (
    temperatureUnit: TemperatureUnitType,
  ) => {
    setTemperatureUnit(temperatureUnit);
  };

  const handleChangePosition = (position: PositionType) => {
    setPosition(position);
  };

  useEffect(() => {
    (async () => {
      try {
        const currentWeather = getCurrentWeather(
          position.latitude,
          position.longitude,
        );

        const weatherForecast = getWeatherForecast(
          position.latitude,
          position.longitude,
          7,
        );

        const currentWeatherJson = await currentWeather;

        setCurrentWeather(currentWeatherJson);

        const weatherForecastJson = await weatherForecast;

        setWeatherForecast(weatherForecastJson);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
      }
    })();
  }, [position.latitude, position.longitude]);

  return currentWeather && weatherForecast ? (
    <div className="container">
      <Sidebar
        currentWeather={currentWeather}
        temperatureUnit={temperatureUnit}
        onChangePosition={handleChangePosition}
      />

      <MainSection
        weatherForecast={weatherForecast}
        onChangeTemperatureUnit={handleChangeTemperatureUnit}
        temperatureUnit={temperatureUnit}
      />
    </div>
  ) : (
    <Loading />
  );
}

export default App;
