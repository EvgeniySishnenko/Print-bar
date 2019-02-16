import renderFn from '../../templates/common/filter.hbs';
import data from '../data/filter.json';
const blockFilter = document.querySelector('.block__filter');
const showFilter = document.querySelector('.show_mobile--filter');

let html;

html = renderFn({ items: data });
blockFilter.innerHTML = html;

showFilter.addEventListener('click', () => {
    const list = document.querySelector('.filter__list');

    list.classList.toggle('filter__list-show');
    showFilter.innerHTML = '';

    if (list.classList.contains('filter__list-show')) {
        showFilter.innerHTML = 'Скрыть фильтр';
    } else {
        showFilter.innerHTML = 'Показать фильтр';
    }
});

