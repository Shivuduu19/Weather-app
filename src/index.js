import weather from './modules/weather';
import setSearchResults from './modules/dom';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
searchForm.addEventListener('submit', (e) => e.preventDefault());
searchButton.addEventListener('click', async () => {
    if (searchInput.value === '') return;
});
