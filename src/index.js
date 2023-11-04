import weather from './modules/weather';
const data = await weather.getData('Hyderabad');
console.log(data);
const weatherData = await weather.getWeatherData(data);
console.log(weatherData);
