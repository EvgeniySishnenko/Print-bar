const wrapFilter = document.querySelectorAll('.wrap__filter');

for (let i = 0; i < wrapFilter.length; i++ ) {
    wrapFilter[i].addEventListener('click', (e) => {
        const target = e.target;
        const elem = getCurrentZone(target);
        const wrapSubList = elem.nextElementSibling;
        elem.classList.toggle('wrap__filter-active');
        wrapSubList.classList.toggle('wrap__filter__sub-list-show');

    });
}

function getCurrentZone(from) {
    do {
        if (from.classList.contains('wrap__filter')) {
            return from;
        }
    } while (from = from.parentElement);
}