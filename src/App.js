import React, {useState} from 'react';
import './App.css';
import Form from './components/Forms/Form';
import Weather from './components/Weather/Weather';

function App() {
  const [weather, setWeather] = useState([]);
  const APIKEY ='634096fa5afe534945c732e821e53d6a'

  async function fetchData(e) {
    e.preventDefault()

    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${APIKEY}`).then(res => res.json()).then(data => data)
    setWeather({
      data: apiData,
      
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Form getWeather={fetchData}/>
        {console.log(weather.data)}
        <main>{
          /* add weather fatchig component*/
        }</main>
      </header>
    </div>
  );
}

export default App;
