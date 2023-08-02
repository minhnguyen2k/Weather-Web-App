import { useEffect } from 'react';
import { getCurrentWeather } from './utils/api';

function App() {
  useEffect(() => {
    const result = getCurrentWeather(21.02851121, 105.804817);
    console.log(result);
  }, []);

  return (
    <div>
      <p></p>
    </div>
  );
}

export default App;
