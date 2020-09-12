import React, { useState, useEffect, useContext } from "react";
import Form from "../Forms/Form";
//import Weather from "../Weather/Weather";
import axios from "axios";


const WeatherUI = () => {

  //Initial State
  const [position, setPosition] = useState({
    latitde: 45,
    longitute: 90,
  });

  const onChange = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.llongitude,
    });
  };

  //get device location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
      });
    } else {
      console.log("Not supported");
    }
  });

  const [weather, setWeather] = useState({});
  const APIKEY = "5b645a49b012e318fd66581051256daf";

  async function fetchData(e) {
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value
    e.preventDefault();

    const apiData = await axios
      .get(
        `http://api.weatherstack.com/current?access_key=${APIKEY}&query=${city}`
      )
      .then((res) => {
        console.log(res);

        if (city) {
          setWeather({
            location: res.data.location.name,
            country: res.data.location.country,
            region: res.data.location.region,
            temperature: res.data.current.temperature,
            humidity:res.data.current.humidity,
            description:res.data.current.weather_descriptions[0],
            img: res.data.current.weather_icons,
          });
        }
      });

    /*Added If statement to ahndle error
        if (city/* && country) {
            setWeather({
                data: apiData,
                city: apiData.location.name,
               /* country: apiData.country,
                description: apiData.weather,
                //temperature: apiData.main.temp,
                /*Convert Kelvin to fahrenheit
                temperature: Math.round(apiData.main.temp * 9 / 5 - 459.67),
                error: ""

            })
        } else {
            setWeather({
                data: '',
                city: '',
               // country: '',
                description: '',
                temperature: '',
                error: "Please Type A City And Country"
            })
        }*/
  }
  return (
   
      <div className="App">
        <header className="App-header">
          <h1>Weather App</h1>
          <Form getWeather={fetchData} />
        </header>
        <main className="container">
          <div className="row">
            <div className="col-md-12 location text-center">
              <h2 className="city">{weather.location}</h2>,
              <span className="country">{weather.country}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 temp">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Temperature</h5>
                  <span>
                    {weather.temperature} <sup>o</sup>C
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 img">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Humidity</h5>
                  {weather.humidity}
                </div>
              </div>
            </div>
            <div className="col-md-4 img">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{weather.description }</h5>
                  
                  <img src={weather.img} alt="weather_img"/>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>&copy; {new Date().getFullYear()} | PreMEST Project</footer>
      </div>
    
  );
};

export default WeatherUI;
