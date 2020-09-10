import React, { useState } from 'react'
import Form from '../Forms/Form';
import Weather from '../Weather/Weather';

const WeatherUI=()=> {
    const [weather, setWeather] = useState([]);
    const APIKEY = '634096fa5afe534945c732e821e53d6a'

    async function fetchData(e) {

        const city = e.target.elements.city.value
        const country = e.target.elements.country.value
        e.preventDefault()

        const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`).then(res => res.json()).then(data => data)
        /*Added If statement to ahndle error*/
        if (city && country) {
            setWeather({
                data: apiData,
                city: apiData.city,
                country: apiData.sys.country,
                description: apiData.weather[0].description,
                //temperature: apiData.main.temp,
                /*Convert Kelvin to fahrenheit*/
                temperature: Math.round(apiData.main.temp * 9 / 5 - 459.67),
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
                    <Form getWeather={fetchData} />
                    {console.log(weather.data)}
                </header>
                <main>
                    <Weather
                        city={weather.city}
                        country={weather.country}
                        description={weather.description}
                        temperature={weather.temperature}
                        error={weather.error}
                    />
                </main>
                <footer>
                    &copy;  {new Date().getFullYear()} | PreMEST Project
        </footer>

            </div>
  );
}

export default WeatherUI;
