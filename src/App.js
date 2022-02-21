import SearchWeather from "./SearchWeather";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//add open source from github tag

function App() {
  return (
    <div className="App">
      <h1>forecast</h1>
      <SearchWeather defaultCity="Toronto" />
    </div>
  );
}

export default App;
