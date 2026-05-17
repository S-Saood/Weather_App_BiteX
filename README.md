# 🌤️ Atmos - Weather App

Atmos is a modern weather application built with **React + Vite** that provides real-time weather updates and a 5-day forecast for any city worldwide.

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Current temperature display
- 💧 Humidity information
- 🌬️ Wind speed details
- 🤒 Feels-like temperature
- 👀 Visibility data
- 📅 5-day weather forecast
- 🌙 Light/Dark mode toggle
- 🎨 Beautiful and responsive UI design

## 📸 Preview

<img width="100%" alt="Atmos Weather App" src="./preview.png" />

## 🛠️ Built With

- **React.js**
- **Vite**
- **CSS3**
- **Weather API**

## 📂 Project Structure

```bash
src/
│── components/
│   ├── CurrentWeather.jsx
│   ├── Footer.jsx
│   ├── Forecast.jsx
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   └── Stats.jsx
│
│── App.jsx
│── main.jsx
│── index.css
```

## ⚙️ Components

### `Header`
- App title/logo
- Theme toggle button (Light/Dark mode)

### `SearchBar`
- Input field for city search
- Search button

### `CurrentWeather`
Displays:
- City name
- Current temperature
- Weather condition

### `Stats`
Shows extra weather details:
- Humidity
- Wind speed
- Feels like temperature
- Visibility

### `Forecast`
- 5-day temperature forecast

### `Footer`
- Copyright information

## 🔑 How It Works

1. Enter a city name in the search input.
2. Click the **Search** button.
3. App fetches weather data from API.
4. Displays:
   - Temperature
   - Humidity
   - Wind speed
   - Feels like
   - Visibility
   - 5-day forecast

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/atmos-weather-app.git
```

Go to project folder:

```bash
cd atmos-weather-app
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

## 🌐 API Used

You can use any weather API such as:
- OpenWeather API
- WeatherAPI

Add your API key inside your project.

Example:

```js
const API_KEY = "your_api_key_here";
```

## 🎯 Future Improvements

- Hourly forecast
- Weather icons animation
- Auto-detect current location
- Air quality index

## 👨‍💻 Author

Made with ❤️ by Your Name



Resume data  by claude 

Atmosphere — Live Weather Dashboard
React.js | Vite | CSS3 | OpenWeather REST API

- Integrated OpenWeather REST API with async/await and React 
  state management to fetch real-time weather data including 
  temperature, humidity, wind speed, and 5-day forecast.

- Architected modular React component hierarchy (6 components) 
  ensuring separation of concerns, scalability, and clean 
  maintainability.

- Built light/dark mode toggle with CSS variable theming and 
  fully responsive UI ensuring cross-browser compatibility.