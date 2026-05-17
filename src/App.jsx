import React, { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [weather, setWeather] = useState(null); //for weather
  const [city, setCity] = useState(""); //for city
  const [forecast, setForecast] = useState([]); //for city
  const [lightMode, setLightMode] = useState(false)

  const apiKey = `708d374a62b64060934c896b19d655f0`;
  const units = "metric";

  const getData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`,
    );
    const data = await response.json();
    setWeather(data); //state- to store data
    getForecast(city); //for getting forecast data
    setCity(""); //state- to store city
    // console.log(data)
  };

  const getForecast = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`,
    );
    const data = await response.json();
    // console.log(data.list) //full data
    setForecast(data.list);
  };

  const dailyForecast = forecast.filter((item) => {
    return item.dt_txt.includes("12:00:00"); //string mehod on date + time of 12
  });

  // useEffect(()=>{
  //     getData()
  // }, [])

  // function hanndleClick() {
  //   console.log(city)
  //   setCity("")
  // }

  useEffect(()=>{
    document.body.className= lightMode ? "light" : "dark"
  }, [lightMode])

  return (
    <div className={`app ${lightMode ? "light" : "dark"}`}>
      {/* Header */}
      <div className="header-wrapper">      <header className="header">
        <h1>Atmos</h1>
        <span className="sub-head">See the sky before it speaks</span>
      </header>
      <label className="switch">
        <input onChange={()=> setLightMode(!lightMode)} type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>


      {/* Search */}
      <div className="search-wrapper">
        <input
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
          type="text"
          placeholder="Search city..."
        />
        <button onClick={getData}>Search</button>
      </div>

      {/* Current Weather */}

      <section className="current-weather glass">
        {!weather ? (
          <>
            <p className="search-prompt">Search for a city to see weather</p>
            <h3 className="dumy-city">City Name</h3>
            <h2 className="dumy-temp">--°</h2>
            <p className="dumy-cond">weather condition</p>
          </>
        ) : (
          <>
            <h2 className="city-name">
              {weather ? weather.name : "Loading.."}
            </h2>

            <h1 className="temperature">
              {weather ? weather.main?.temp : "--"}°c
            </h1>
            <p className="condition">{weather ? weather.weather[0].main : ""}</p>
          </>
        )}
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat glass">
          <span>Humidity</span>
          <strong>{weather?.main?.humidity ?? "--"}%</strong>
        </div>
        <div className="stat glass">
          <span>Wind</span>
          <strong>
            {weather?.wind?.speed
              ? (weather.wind.speed * 3.6).toFixed(1)
              : "--"}
            km/h
          </strong>
        </div>
        <div className="stat glass">
          <span>Feels Like</span>
          <strong>{weather?.main?.feels_like ?? "--"}°c</strong>
        </div>
        <div className="stat glass red">
          <span>visibility</span>
          <strong>{weather?.visibility? (weather.visibility / 1000).toFixed(1): "--"}</strong>
        </div>
      </section>

      {/* Forecast */}
      <section className="forecast">
        {(dailyForecast.length > 0 ? dailyForecast : [1, 2, 3, 4, 5]) //dumy data
          .map((day, index) => (
            <div key={index} className="forecast-card glass">
              <span>
                {dailyForecast.length > 0
                  ? new Date(day.dt_txt).toDateString().slice(0, 3)
                  : "Day"}
              </span>
              <strong>
                {dailyForecast.length > 0 ? `${day.main.temp}` : "--"}°c
              </strong>
            </div>
          ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} BiteX. All rights reserved. </p>
      </footer>
    </div>
  );
}

export default App;
