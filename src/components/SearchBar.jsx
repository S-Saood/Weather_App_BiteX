import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";

function SearchBar({setCity}) {
  const [input, setInput] = useState();

  // for change
  function handelChange(event) {
    setInput(event.target.value);
  }

  // for click
  function handleClick() {
    setCity(input)
  }

  return (
    <>
      <div className="search-wrapper">
        <input
          placeholder="Search city..."
          type="text"
          value={input}
          onChange={handelChange}
        />
        <button onClick={handleClick}>Search</button>
      </div>
    </>
  );
}

export default SearchBar;
