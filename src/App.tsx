import { useContext } from 'react';
import './App.css';
import { AppRouteContext } from './providers/AppRouteProvider';

function App() {
  const { activeScreen } = useContext(AppRouteContext);
  return <div className="App">{activeScreen}</div>;
}

export default App;
