import { format, toDate } from 'date-fns';

export default function setSearchResults(cityInfo) {
    if (!cityInfo) return;
    const location = document.getElementById('card-location');
    const day = document.getElementById('card-day');
    const date = document.getElementById('card-date');
    const time = document.getElementById('card-time');
    const temp = document.getElementById('card-temp');
    const desc = document.getElementById('card-desc');
    const countryDate = format(toDate(new Date(), cityInfo.timezone), 'EEEE~do MMM R~p');
    const [currrentDay, currentDate, currentTime] = countryDate.split('~');
    location.innerText = `${cityInfo.name} ${cityInfo.sys.country}`;
    location.setAttribute('data-lat', cityInfo.coord.lat);
    location.setAttribute('data-lon', cityInfo.coord.lon);
    day.innerText = currrentDay;
    date.innerText = currentDate;
    time.innerText = currentTime;
    temp.innerText = cityInfo.main.temp;
    desc.innerText = cityInfo.cityInfo.weather[0].description;
}
