

import React from 'react'

function Forecast({dailyForecast}) {
  return (
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
  )
}

export default Forecast