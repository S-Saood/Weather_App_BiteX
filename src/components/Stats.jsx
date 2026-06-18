

import React from 'react'

function Stats({weather}) {
  return (
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
  )
}

export default Stats