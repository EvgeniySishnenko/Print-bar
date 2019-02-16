const selected = document.querySelectorAll('.search__selected');

for (let i = 0; i < selected.length; i++) {
    selected[i].addEventListener('click', (e) => {
        const target = e.target;
        const wrapSubList = target.nextElementSibling;
        target.classList.toggle('search__selected--active');
        wrapSubList.classList.toggle('wrap__search__list-show');

    });
}