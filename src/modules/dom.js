import { format, toDate } from 'date-fns';
function setSearchResults(name, cityInfo) {
    const location = document.querySelector('.card-location');
    const day = document.querySelector('.card-day');
    const date = document.querySelector('.card-date');
    const time = document.querySelector('.card-time');
    const temp = document.querySelector('.card-temp');
    const desc = document.querySelector('.card-desc');

    if (name === '' && (cityInfo === '' || cityInfo === 'undefined')) {
        const [currrentDay, currentDate, currentTime] = ['', '', ''];
        day.innerText = currrentDay;
        date.innerText = currentDate;
        time.innerText = currentTime;
        location.innerText = '';
        temp.innerText = '';
        desc.innerText = '';
        location.setAttribute('data-lat', '');
        location.setAttribute('data-lon', '');
    } else {
        const countryDate = format(toDate(new Date(), cityInfo.timezone), 'EEEE~do MMM R~p');
        const [currrentDay, currentDate, currentTime] = countryDate.split('~');
        day.innerText = currrentDay;
        date.innerText = currentDate;
        time.innerText = currentTime;
        location.innerText = `${name} ${cityInfo.sys.country}`;
        location.setAttribute('data-lat', cityInfo.coord.lat);
        location.setAttribute('data-lon', cityInfo.coord.lon);
        temp.innerText = cityInfo.main.temp + ' C';
        desc.innerText = cityInfo.weather[0].description;
        // console.log(location);
    }
}
function renderError(error) {
    const errorDiv = document.querySelector('.error-div');
    const errorText = document.querySelector('.error-text');
    errorText.innerText = error;
    // console.log(errorText);
    errorDiv.classList.add('is-active');
    setTimeout(() => {
        errorDiv.classList.remove('is-active');
    }, 3000);
}
export { setSearchResults, renderError };
