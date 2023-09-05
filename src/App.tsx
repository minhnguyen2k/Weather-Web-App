import { useEffect, useState } from 'react';
import { getCurrentWeather } from './utils/api';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import { ICurrentWeather } from './model/weather';

function App() {
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>();
  useEffect(() => {
    (async () => {
      const result = await getCurrentWeather(21.028511, 105.804817);
      setCurrentWeather(result);
    })();
  }, []);

  return (
    <div className="container">
      <Sidebar currentWeather={currentWeather} />
      <MainSection />
    </div>
  );
}

export default App;
