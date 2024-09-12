# Weather Dashboard
Weather Dashboard is a simple React-based web application that allows users to search for
real-time weather data of a city.
It fetches data from the OpenWeather API and displays current temperature, humidity, wind speed,
and weather conditions.
## Features
- Search for weather by city name
- Display current weather conditions: temperature, humidity, wind speed, and weather description
- Responsive UI built with React
## Folder Structure
|-- weather-dashboard
 |-- public
 |-- index.html
 |-- src
 |-- App.js
 |-- WeatherCard.js
 |-- index.js
 |-- App.css
 |-- package.json
 |-- README.md
## Getting Started
1. Clone this repository:
 ```bash
 git clone https://github.com/yourusername/weather-dashboard.git
 ```
2. Install the required dependencies:
 ```bash
 npm install
 ```
3. Run the application:
 ```bash
 npm start
 ```
4. Open your browser and navigate to `http://localhost:3000`.
## API Key
This project uses the OpenWeather API. Get your API key from
[OpenWeather](https://openweathermap.org/api) and add it to the `App.js` file in the `fetchWeather`
function:
```javascript
const apiKey = 'YOUR_API_KEY';
```
## Built With
- React
- OpenWeather API