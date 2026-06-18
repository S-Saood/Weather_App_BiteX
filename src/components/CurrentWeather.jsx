import React from 'react'

function CurrentWeather({weather, error}) {

  if(error){
    return(
      <section className="current-weather glass">
        <h2 className="error-title">😕 City Not Found</h2>
        <p className="error-subtitle">
          Check the spelling and try again.
        </p>
      </section>
    )
  }
  return (
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
  {weather?.name || "City Name"}
</h2>

            <h1 className="temperature">
  {weather?.main?.temp ?? "--"}°c
</h1>
<p className="condition">
  {weather?.weather?.[0]?.main || ""}
</p>         
 </>
        )}
      </section>
  )
}

export default CurrentWeather
