import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    const apiKey = 'YOUR_API_KEY'; 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    setWeatherData(data);
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city) {
      fetchWeather();
    }
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <div className="search">
        <input 
          type="text" 
          placeholder="Enter city" 
          value={city} 
          onChange={handleInputChange} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
