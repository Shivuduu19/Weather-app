import { renderError, setSearchResults } from './dom';
const weather = (function () {
    async function getData(city) {
        const endpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=8c5e8b09e1cb051feaffc91ff767b8f5`;
        // console.log(city);
        // console.log(endpoint);

        const cityData = await fetch(endpoint, { mode: 'cors' })
            .then(function (response) {
                // console.log(response.ok);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status:${response.status}`);
                }
                const data = response.json();

                return data;
            })
            .then((data) => {
                if (!data.length) {
                    throw new Error('NOT FOUND');
                }
                // console.log(data);
                return data;
            })
            .catch((error) => {
                // console.log(error);
                renderError(error);
                setSearchResults('', '');
                return null;
            });
        if (cityData === null) {
            return;
        } else {
            return cityData[0];
        }
    }
    async function getCityInfo(data) {
        // console.log(data);
        // console.log(typeof data);
        if (typeof data === 'undefined') return;
        // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
        const endpont = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&exclude={minutely}&appid=8c5e8b09e1cb051feaffc91ff767b8f5&units=metric`;
        const response = await fetch(endpont, { mode: 'cors' });
        const weatherData = await response.json();
        // console.log(weatherData);
        return weatherData;
    }
    return { getData, getCityInfo };
})();
export default weather;
