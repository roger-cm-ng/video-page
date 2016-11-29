import express from 'express';
const WeatherWidget = express.Router();

WeatherWidget.get('/', (req, res) => {
  res.render('weather-widget');
});
export default WeatherWidget;
