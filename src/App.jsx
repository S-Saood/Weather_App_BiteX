import React, { useState, useEffect } from "react";
import "./index.css";
import Footer from './components/Footer'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import Stats from './components/Stats'
import Forecast from './components/Forecast'



function App() {
  const [weather, setWeather] = useState(null); //for weather
  const [city, setCity] = useState(""); //for city
  const [forecast, setForecast] = useState([]); //for city
  const [lightMode, setLightMode] = useState(false)
  const [error, setError] = useState("")

  

  const apiKey = `708d374a62b64060934c896b19d655f0`;
  const units = "metric";

  

  const getData = async () => {
    
    if (!city.trim()) {
      setError("Please enter a city name")
      return
    }
    try{
      const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`,
    );
    const data = await response.json();

    if(data.cod !== 200){
      setError("city not found")
        setWeather(null)
        setForecast([])
        return
    }
    setError("")
    setWeather(data); //state- to store data
    getForecast(city); //for getting forecast data

    } catch (err){
      setError("Something went wrong. Please try again.")
    }

    
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

  

  useEffect(()=>{
    document.body.className= lightMode ? "light" : "dark"
  }, [lightMode])

  return (
    <>
    <div className={`app ${lightMode ? "light" : "dark"}`}>
      {/* Header */}
      <Header 
      lightMode={lightMode}
      setLightMode={setLightMode}/>


      {/* Search */}
      <SearchBar 
      city={city}
      setCity={setCity}
      getData={getData}
      />

      {/* Current Weather */}

      <CurrentWeather 
      weather={weather}
            error={error}

      />

      {/* Stats */}
      <Stats weather={weather}
      />

      {/* Forecast */}
      <Forecast 
      dailyForecast={dailyForecast}
      />

      {/* Footer */}
      <Footer />
      
    </div>
    </>
  );
}

export default App;
