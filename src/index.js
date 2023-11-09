import weather from './modules/weather';
import { renderError, setSearchResults } from './modules/dom';
// const city = await weather.getData('Hyderabad');

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');

searchForm.addEventListener('submit', (e) => e.preventDefault());
searchButton.addEventListener('click', async () => {
    if (searchInput.value === '') return;
    const city = await weather.getData(searchInput.value);
    // console.log(city);
    const cityInfo = await weather.getCityInfo(city);
    // console.log(cityInfo);
    if (typeof cityInfo === 'undefined') {
        setSearchResults('', '');
    } else {
        setSearchResults(searchInput.value, cityInfo);
        renderError('');
    }
});
// console.log(city);
