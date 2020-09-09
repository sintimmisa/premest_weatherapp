import React, {useState} from 'react';
import './App.css';
import Form from './components/Forms/Form';
import Weather from './components/Weather/Weather';

function App() {
  const [weather, setWeather] = useState([]);
  const APIKEY ='634096fa5afe534945c732e821e53d6a'

  async function fetchData(e) {

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    e.preventDefault()

    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`).then(res => res.json()).then(data => data)
    if (city && country) {
      setWeather({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: apiData.main.temp,
        error: ""
      
      })
    } else {
      setWeather({
        data: '',
        city: '',
        country: '',
        description: '',
        temperature: '',
        error: "Please Type A City And Country"
      })
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Form getWeather={fetchData}/>
        {console.log(weather.data)}
        <main>
          <Weather
            city={weather.city}
            country={weather.country}
            description={weather.description}
            temperature={weather.temperature}
            error={weather.error}
          />
        </main>
      </header>
    </div>
  );
}

export default App;
