import { useState } from 'react';
import './App.css';
import Loading from './Loading';
import HomeScreen from './HomeScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      {isLoading ? (
        <Loading onFinish={() => setIsLoading(false)} />
      ) : (
        <HomeScreen />
      )}    </div>
  );
}

export default App;
