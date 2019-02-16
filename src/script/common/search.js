import renderFn from '../../templates/common/search.hbs';
import data from '../data/search.json';
const listCont = document.querySelector('.aside');
const tag = document.querySelector('.tag');

let html;

html = renderFn({ items: data });
listCont.innerHTML = html;

tag.addEventListener('click', () => {
    listCont.classList.toggle('aside-show');
    tag.classList.toggle('tag_active');
    tag.innerHTML = '';
    if (tag.classList.contains('tag_active')) {
        tag.innerHTML = "Скрыть фильтр";
    } else {
        tag.innerHTML = "Показать фильтр"
    }
});