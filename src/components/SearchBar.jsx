


import React from 'react'

function SearchBar({city, setCity, getData}) {
  return (
      <div className="search-wrapper">
        <input
          onChange={(e) => {
            setCity(e.target.value);
          }}
          value={city}
          type="text"
          placeholder="Search city..."
          onKeyDown={(e) => {
            if(e.key === "Enter"){
              getData()
            }
          }}
        />
        <button onClick={getData}>Search</button>
          <p className="error-message">
          </p>
        
      </div>
  )
}

export default SearchBar
