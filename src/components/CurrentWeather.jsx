import React, { useState, useEffect } from "react";
import Stats from "./Stats";

const apiKey = "8c1a4ce62914c237bb7c3af42aaba981";

function CurrentWeather({ city }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!city) {
      setWeather(null);
      return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    setLoading(true);

    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [city]);

  return (
    <>
      <section className="current-weather glass">

        {!city && <p>Search for a city to see weather</p>}
        {loading && <p>Loading weather...</p>}

        <h2>{weather?.name || "City Name"}</h2>

        <div className="temperature">
          {weather ? Math.round(weather.main.temp) : "--"}°
        </div>

        <p className="condition">
          {weather?.weather?.[0]?.description || "Weather condition"}
        </p>
        

      </section>

      <Stats
        humidity={weather?.main?.humidity}
        windSpeed={weather?.wind?.speed}
        feelsLike={weather?.main?.feels_like}
      />
    </>
  );
}


export default CurrentWeather;






{/* old code */}
{/* // {
//         console.log(data);
//         console.log("Temperatur:", data.main.temp)
//         console.log("Feels like:", data.main.feels_like);
//         console.log("Humidity :", data.main.humidity);
//         console.log("City Name:", data.name);
//         console.log("Wind:", data.wind.speed);
//       }





import React, {useState, useEffect } from "react";
import Stats from "./Stats";

const apiKey = "8c1a4ce62914c237bb7c3af42aaba981";



function CurrentWeather({city}) {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if(!city) return

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8c1a4ce62914c237bb7c3af42aaba981&units=metric`;



    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.error(err));
  }, [city]); //runs when city change

  if(!weather){
    return <p>Loading weather...</p>
  }


  return (
    <>
    <section className="current-weather glass">
      <h2>{weather.name}</h2>
      <div className="temperature">{Math.round(weather.main.temp)}°</div>
      <p className="condition">{weather.weather[0].description}</p>
    </section>


    <Stats 
    humidity={weather.main.humidity}
    windSpeed={weather.wind.speed}
    feelsLike={weather.main.feels_like}
    />
    </>
  );
}


export default CurrentWeather;
 */}





