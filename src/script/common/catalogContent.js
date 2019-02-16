import renderFn from '../../templates/common/catalog-content.hbs';
import data from '../data/catalogContent.json';
const listCont = document.querySelector('.catalog-content');
let html;

html = renderFn({ items: data });
listCont.innerHTML = html;