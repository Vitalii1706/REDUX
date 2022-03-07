import React from 'react';
import { connect } from 'react-redux';
import City from './City';
import { getWeatherData } from './weather.actions';
import { useState, useEffect } from 'react';

const Weather = ({ getWeatherData }) => {
  const [weatherDatas, setWeatherData] = useState([]);
  useEffect(() => {
    getWeatherData().then(data => setWeatherData(data));
  }, []);
  console.log(weatherDatas);
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherDatas.map(weatherData => (
          <City key={weatherData.id} {...weatherData} />
        ))}
      </ul>
    </main>
  );
};

const mapDispatch = {
  getWeatherData: getWeatherData,
};

const connector = connect(null, mapDispatch);

export default connector(Weather);
