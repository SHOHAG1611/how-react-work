// import logo from './logo.svg';
import './App.css';
import Divice from './components/Divice/Divice';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Divice name='uphone' price='15000'></Divice>
      <Watch></Watch>
    </div>
  );
}

export default App;
