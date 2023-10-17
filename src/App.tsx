import { useEffect, useState } from 'react';
import { getCurrentWeather, getWeatherForecast } from './utils/api';
import Sidebar from './components/Sidebar/Sidebar';
import MainSection from './components/MainSection/MainSection';
import { ICurrentWeather, IWeatherForecast } from './model/weather';

function App() {
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>();
  const [weatherForecast, setWeatherForecast] = useState<IWeatherForecast>();
  useEffect(() => {
    (async () => {
      try {
        const currentWeather = getCurrentWeather(21.028511, 105.804817);
        const weatherForecast = getWeatherForecast(21.028511, 105.804817, 7);
        const currentWeatherJson = await currentWeather;
        setCurrentWeather(currentWeatherJson);
        const weatherForecastJson = await weatherForecast;
        setWeatherForecast(weatherForecastJson);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="container">
      <Sidebar currentWeather={currentWeather} />
      <MainSection weatherForecast={weatherForecast} />
    </div>
  );
}

export default App;
