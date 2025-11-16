import logo from './octofitapp-small.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="OctoFit Tracker" />
        <h1>Welcome to OctoFit Tracker</h1>
        <p>
          Your fitness journey starts here!
        </p>
        <div className="mt-3">
          <p>Track your activities, compete with teams, and reach your fitness goals.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
