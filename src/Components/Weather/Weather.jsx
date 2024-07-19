import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Rexburg,ID,USA&appid=529083277dc940c1230a3d43c6c8893e&units=metric`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div>Loading weather...</div>;
  if (error) return <div>Error loading weather data: {error.message}</div>;

  return (
    <div className="weather">
      <h2>Looking to dress for the weather? Check out the weather in Rexburg, ID</h2>
      <p className="temperature">Temperature: {weatherData.main.temp}°C</p>
      <p className="description">Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;