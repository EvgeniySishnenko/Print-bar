const navList = document.querySelector('.nav-list');

for ( let i = 1; i < 16; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.classList.add('nav-span');
    li.classList.add('nav-item');

    a.innerText = i;
    
    li.appendChild(a);
    navList.appendChild(li);
}
