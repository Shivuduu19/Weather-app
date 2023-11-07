import { format, toDate } from 'date-fns';

export default function setSearchResults(name, cityInfo) {
    if (!cityInfo) return;
    console.log(cityInfo);
    const location = document.querySelector('.card-location');
    const day = document.querySelector('.card-day');
    const date = document.querySelector('.card-date');
    const time = document.querySelector('.card-time');
    const temp = document.querySelector('.card-temp');
    const desc = document.querySelector('.card-desc');
    const countryDate = format(toDate(new Date(), cityInfo.timezone), 'EEEE~do MMM R~p');
    const [currrentDay, currentDate, currentTime] = countryDate.split('~');
    location.innerText = `${name} ${cityInfo.sys.country}`;
    location.setAttribute('data-lat', cityInfo.coord.lat);
    location.setAttribute('data-lon', cityInfo.coord.lon);
    day.innerText = currrentDay;
    date.innerText = currentDate;
    time.innerText = currentTime;
    temp.innerText = cityInfo.main.temp + ' C';
    desc.innerText = cityInfo.weather[0].description;
}
