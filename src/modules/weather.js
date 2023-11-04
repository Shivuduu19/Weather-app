const weather = (function () {
    async function getData(city) {
        const endpont = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=8c5e8b09e1cb051feaffc91ff767b8f5`;

        const weatherdata = await fetch(endpont, { mode: 'cors' })
            .then(function (response) {
                const data = response.json();
                // console.log(data);
                return data;
            })
            .then((data) => {
                // console.log(data);
                return data;
            });
        // console.log(weatherdata[0]);

        // console.log(coord[0].name);
        return weatherdata[0];
    }
    async function getWeatherData(data) {
        // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
        const endpont = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&exclude={minutely}&appid=8c5e8b09e1cb051feaffc91ff767b8f5&units=metric`;
        const response = await fetch(endpont, { mode: 'cors' });
        const weatherData = await response.json();
        // console.log(weatherData);
        return weatherData;
    }
    return { getData, getWeatherData };
})();
export default weather;
